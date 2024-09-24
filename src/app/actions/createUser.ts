// src/app/actions/createUser.ts

'use server';
import prisma from '@/app/lib/dbConnect'; // Ensure this path is correct

interface UserData {
  email: string;
  image?: string;
  name?: string;
  provider?: string;
  providerAccountId?: string;
}

async function createUser(userData: UserData) {
  try {
    console.log('Attempting to create or update user:', userData);
    const userInfo = await prisma.user.upsert({
      where: { email: userData.email },
      update: {
        image: userData.image,
        name: userData.name,
        provider: userData.provider,
        providerAccountId: userData.providerAccountId,
      },
      create: {
        email: userData.email,
        image: userData.image,
        name: userData.name,
        provider: userData.provider,
        providerAccountId: userData.providerAccountId,
      },
    });
    console.info('User successfully saved:', userInfo.email);
    return {
      message: 'Successfully saved',
      userInfo,
    };
  } catch (err: any) {
    console.error('Failed to create user:', err);
    return {
      message: 'Failed to create user',
      err,
    };
  }
}

export default createUser;
