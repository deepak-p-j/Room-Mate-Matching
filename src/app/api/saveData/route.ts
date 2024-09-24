// app/api/saveData/route.ts

import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import ExcelJS from 'exceljs';
import { getServerSession } from 'next-auth';
import authOptions from '../auth/[...nextauth]/route'; // Adjust the path as necessary

// Helper function to convert stream to buffer
const streamToBuffer = async (stream: Readable): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
};

export async function POST(request: Request) {
  try {
    // Get the session to access user email
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.email) {
      console.error('Unauthorized access attempt: No valid session found.');
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userEmail = session.user.email;

    // Parse the form data
    const formData = await request.json();

    const {
      phoneNumber, // Include phoneNumber
      name,
      lastName,
      sex,
      languages,
      sleepTimeWeekdays,
      sleepTimeWeekend,
      noiseBother,
      noiseTime,
      cleanCommonArea,
      sharingHabits,
      cleanDishes,
      roommateVisitors,
      invitePeople,
      handleDisagreements,
      partyPerson,
    } = formData;

    // Initialize S3 Client
    const s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const bucketName = process.env.S3_BUCKET_NAME!;
    const fileKey = process.env.S3_FILE_KEY!;

    let workbook: ExcelJS.Workbook;
    let worksheet: ExcelJS.Worksheet;

    // Attempt to fetch the existing Excel file from S3
    try {
      const getObjectParams = {
        Bucket: bucketName,
        Key: fileKey,
      };
      const getObjectCommand = new GetObjectCommand(getObjectParams);
      const s3Response = await s3.send(getObjectCommand);

      const buffer = await streamToBuffer(s3Response.Body as Readable);

      workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(buffer);
      worksheet = workbook.getWorksheet('Sheet1');

      if (!worksheet) {
        console.warn('Sheet1 not found in the Excel file. Creating a new worksheet with headers.');
        throw new Error('Sheet1 not found');
      }
    } catch (error: any) {
      if (error.name === 'NoSuchKey' || error.message === 'Sheet1 not found') {
        // File does not exist or Sheet1 is missing, create a new workbook and worksheet with headers
        console.info('Excel file does not exist or is missing Sheet1. Creating a new Excel workbook.');
        workbook = new ExcelJS.Workbook();
        worksheet = workbook.addWorksheet('Sheet1');

        // Define headers
        worksheet.columns = [
          { header: 'Email', key: 'email', width: 30 },
          { header: 'Phone Number', key: 'phoneNumber', width: 20 },
          { header: 'First Name', key: 'name', width: 20 },
          { header: 'Last Name', key: 'lastName', width: 20 },
          { header: 'Sex', key: 'sex', width: 10 },
          { header: 'Languages', key: 'languages', width: 30 },
          { header: 'Sleep Time Weekdays', key: 'sleepTimeWeekdays', width: 20 },
          { header: 'Sleep Time Weekend', key: 'sleepTimeWeekend', width: 20 },
          { header: 'Does noise bother you?', key: 'noiseBother', width: 25 },
          { header: 'Noise Time', key: 'noiseTime', width: 20 },
          { header: 'Clean Common Area', key: 'cleanCommonArea', width: 25 },
          { header: 'Sharing Habits (0-10)', key: 'sharingHabits', width: 20 },
          { header: 'Clean Dishes', key: 'cleanDishes', width: 15 },
          { header: 'Roommate Visitors', key: 'roommateVisitors', width: 20 },
          { header: 'Invite People', key: 'invitePeople', width: 15 },
          { header: 'Handle Disagreements', key: 'handleDisagreements', width: 25 },
          { header: 'Party Person', key: 'partyPerson', width: 15 },
        ];
      } else {
        // Other errors
        console.error('Error fetching Excel file from S3:', error);
        throw error;
      }
    }

    // Prepare the data row
    const languagesJoined = Array.isArray(languages) ? languages.join(', ') : languages;

    // Check if a row with the same email already exists
    const emailColumn = worksheet.getColumn('email');
    let existingRowNumber: number | null = null;

    emailColumn.eachCell((cell, rowNumber) => {
      if (cell.value === userEmail && rowNumber !== 1) { // Exclude header row
        existingRowNumber = rowNumber;
      }
    });

    if (existingRowNumber) {
      // Update the existing row
      const row = worksheet.getRow(existingRowNumber);
      row.getCell('email').value = userEmail;
      row.getCell('phoneNumber').value = phoneNumber;
      row.getCell('name').value = name;
      row.getCell('lastName').value = lastName;
      row.getCell('sex').value = sex;
      row.getCell('languages').value = languagesJoined;
      row.getCell('sleepTimeWeekdays').value = sleepTimeWeekdays;
      row.getCell('sleepTimeWeekend').value = sleepTimeWeekend;
      row.getCell('noiseBother').value = noiseBother;
      row.getCell('noiseTime').value = (noiseBother === 'At night' || noiseBother === 'Both') ? noiseTime : '';
      row.getCell('cleanCommonArea').value = cleanCommonArea;
      row.getCell('sharingHabits').value = sharingHabits;
      row.getCell('cleanDishes').value = cleanDishes;
      row.getCell('roommateVisitors').value = roommateVisitors;
      row.getCell('invitePeople').value = invitePeople;
      row.getCell('handleDisagreements').value = handleDisagreements;
      row.getCell('partyPerson').value = partyPerson;
      row.commit();
      console.info(`Updated existing row for email: ${userEmail}`);
    } else {
      // Append a new row
      worksheet.addRow({
        email: userEmail,
        phoneNumber,
        name,
        lastName,
        sex,
        languages: languagesJoined,
        sleepTimeWeekdays,
        sleepTimeWeekend,
        noiseBother,
        noiseTime: (noiseBother === 'At night' || noiseBother === 'Both') ? noiseTime : '',
        cleanCommonArea,
        sharingHabits,
        cleanDishes,
        roommateVisitors,
        invitePeople,
        handleDisagreements,
        partyPerson,
      });
      console.info(`Added new row for email: ${userEmail}`);
    }

    // Generate buffer from workbook
    const buffer = await workbook.xlsx.writeBuffer();

    // Upload the updated Excel file back to S3
    try {
      const putObjectParams = {
        Bucket: bucketName,
        Key: fileKey,
        Body: buffer,
        ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      };
      const putObjectCommand = new PutObjectCommand(putObjectParams);
      await s3.send(putObjectCommand);
      console.info('Successfully uploaded updated Excel file to S3.');
    } catch (uploadError) {
      console.error('Error uploading Excel file to S3:', uploadError);
      throw uploadError;
    }

    return NextResponse.json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error in saveData API:', error);
    return NextResponse.json({ message: 'Failed to save data' }, { status: 500 });
  }
}
