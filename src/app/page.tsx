'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import { useSession, signIn } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (session && session.user && session.user.email) {
      setUserEmail(session.user.email);
    }
  }, [session]);

  const [formData, setFormData] = useState({
    phoneNumber: '', // New field for phone number
    name: '',
    lastName: '',
    sex: '',
    languages: [],
    sleepTimeWeekdays: '',
    sleepTimeWeekend: '',
    noiseBother: '',
    noiseTime: '',
    cleanCommonArea: '',
    sharingHabits: 0,
    cleanDishes: '',
    roommateVisitors: '',
    invitePeople: '',
    handleDisagreements: '',
    partyPerson: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // If the field is 'sharingHabits', parse the value as an integer
    if (name === 'sharingHabits') {
      const parsedValue = parseInt(value, 10);
      setFormData((prevData) => ({
        ...prevData,
        [name]: isNaN(parsedValue) ? 0 : parsedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle multiple selection for languages
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguages = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      languages: selectedLanguages,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === 'loading') {
      alert('Session is loading. Please wait...');
      return;
    }

    if (!session) {
      alert('You must be logged in to submit the form.');
      signIn();
      return;
    }

    try {
      // Include email from session in formData
      const dataToSend = { ...formData, email: userEmail };

      // Send the form data as JSON
      const response = await axios.post('/api/saveData', dataToSend);
      alert('Data saved successfully');

      // Optionally reset the form
      setFormData({
        phoneNumber: '',
        name: '',
        lastName: '',
        sex: '',
        languages: [],
        sleepTimeWeekdays: '',
        sleepTimeWeekend: '',
        noiseBother: '',
        noiseTime: '',
        cleanCommonArea: '',
        sharingHabits: 0,
        cleanDishes: '',
        roommateVisitors: '',
        invitePeople: '',
        handleDisagreements: '',
        partyPerson: '',
      });
    } catch (error: any) {
      console.error('Error saving data', error);
      alert('There was an error saving your data. Please try again.');
    }
  };

  return (
    <div className="parent-container min-h-screen flex flex-col items-center justify-center">
      <Header />

      {status === 'loading' ? (
        <p>Loading...</p>
      ) : !session ? (
        <div className="text-center">
          <p className="text-xl">You must be logged in to fill out the questionnaire.</p>
          <button
            onClick={() => signIn()}
            className="mt-4 bg-red-500 text-white p-3 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
          >
            Sign In
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 w-full max-w-lg rounded-lg shadow-lg border border-red-500"
        >
          <h1 className="text-2xl font-bold text-center mb-6">Roommate Questionnaire</h1>

          <div className="grid gap-4">
            {/* Email (Hidden Field) */}
            <input type="hidden" name="email" value={userEmail} />

            {/* Phone Number */}
            <label className="block">
              <span className="text-gray-700">Phone Number</span>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit phone number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </label>

            {/* First Name */}
            <label className="block">
              <span className="text-gray-700">First Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </label>

            {/* Last Name */}
            <label className="block">
              <span className="text-gray-700">Last Name</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </label>

            {/* Sex */}
            <label className="block">
              <span className="text-gray-700">Sex</span>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>

            {/* Display Selected Languages */}
            <label className="block">
              <span className="text-gray-700">Selected Languages</span>
              <div className="border border-gray-300 p-2 rounded-lg bg-gray-100 mt-1">
                {formData.languages.length > 0 ? (
                  formData.languages.map((language, index) => (
                    <span
                      key={index}
                      className="inline-block bg-red-200 text-red-500 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {language}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">No languages selected</span>
                )}
              </div>
            </label>

            {/* Language Selection Dropdown */}
            <label className="block">
              <span className="text-gray-700">Language(s)</span>
              <select
                name="languages"
                multiple // Allows multiple selection
                value={formData.languages}
                onChange={handleLanguageChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Bengali">Bengali</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="Marathi">Marathi</option>
                <option value="Kannada">Kannada</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Urdu">Urdu</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
                <option value="German">German</option>
                <option value="Russian">Russian</option>
              </select>
              <p className="text-gray-500 text-sm">
                Hold down Ctrl (Windows) or Command (Mac) to select multiple languages.
              </p>
            </label>

            {/* Sleep Time (Weekdays) */}
            <label className="block">
              <span className="text-gray-700">Sleep Time (Weekdays)</span>
              <select
                name="sleepTimeWeekdays"
                value={formData.sleepTimeWeekdays}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select</option>
                <option value="8 to 9pm">8 to 9pm</option>
                <option value="9 to 10pm">9 to 10pm</option>
                <option value="10 to 11pm">10 to 11pm</option>
                <option value="11 to midnight">11 to midnight</option>
                <option value="midnight to 2 am">midnight to 2 am</option>
                <option value="after 2am">after 2am</option>
              </select>
            </label>

            {/* Sleep Time (Weekend) */}
            <label className="block">
              <span className="text-gray-700">Sleep Time (Weekend)</span>
              <select
                name="sleepTimeWeekend"
                value={formData.sleepTimeWeekend}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select</option>
                <option value="8 to 9pm">8 to 9pm</option>
                <option value="9 to 10pm">9 to 10pm</option>
                <option value="10 to 11pm">10 to 11pm</option>
                <option value="11 to midnight">11 to midnight</option>
                <option value="midnight to 2 am">midnight to 2 am</option>
                <option value="after 2am">after 2am</option>
              </select>
            </label>

            {/* Does noise bother you? */}
            <label className="block">
              <span className="text-gray-700">Does noise bother you?</span>
              <select
                name="noiseBother"
                value={formData.noiseBother}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select</option>
                <option value="During the day">During the day</option>
                <option value="At night">At night</option>
                <option value="Both">Both</option>
              </select>
            </label>

            {/* Conditionally render "If at night, from what time?" */}
            {(formData.noiseBother === 'At night' || formData.noiseBother === 'Both') && (
              <label className="block">
                <span className="text-gray-700">If at night, from what time?</span>
                <select
                  name="noiseTime"
                  value={formData.noiseTime}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="9pm">9pm</option>
                  <option value="10pm">10pm</option>
                  <option value="11pm">11pm</option>
                  <option value="midnight">midnight</option>
                  <option value="after midnight">after midnight</option>
                </select>
              </label>
            )}

            {/* Clean Common Area */}
            <label className="block">
              <span className="text-gray-700">How often are you willing to clean the common area?</span>
              <select
                name="cleanCommonArea"
                value={formData.cleanCommonArea}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select</option>
                <option value="Every day">Every day</option>
                <option value="Few days per week">Few days per week</option>
                <option value="1 day per week">1 day per week</option>
              </select>
            </label>

            {/* Sharing Habits */}
            <label className="block">
              <span className="text-gray-700">How do you rate your sharing habits out of 10?</span>
              <input
                type="number"
                name="sharingHabits"
                value={formData.sharingHabits}
                onChange={handleChange}
                min="0"
                max="10"
                step="1"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </label>

            {/* Clean Dishes */}
            <label className="block">
              <span className="text-gray-700">Do you clean your dishes right after using them?</span>
              <select
                name="cleanDishes"
                value={formData.cleanDishes}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            {/* Roommate Visitors */}
            <label className="block">
              <span className="text-gray-700">Do you mind if your roommate invites people to your flat?</span>
              <select
                name="roommateVisitors"
                value={formData.roommateVisitors}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            {/* Invite People */}
            <label className="block">
              <span className="text-gray-700">Would you invite people to your flat?</span>
              <select
                name="invitePeople"
                value={formData.invitePeople}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            {/* Handle Disagreements */}
            <label className="block">
              <span className="text-gray-700">How do you handle disagreements?</span>
              <select
                name="handleDisagreements"
                value={formData.handleDisagreements}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select</option>
                <option value="Mediated discussion">Mediated discussion</option>
                <option value="Confrontation">Confrontation</option>
              </select>
            </label>

            {/* Party Person */}
            <label className="block">
              <span className="text-gray-700">Are you a party-person?</span>
              <select
                name="partyPerson"
                value={formData.partyPerson}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-red-500 text-white p-3 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
