import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookVisit({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onChangeDate = (e) => {
    setSelectedDate(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChangeMessage}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'
          ></textarea>

          <input
            type='date'
            value={selectedDate}
            onChange={onChangeDate}
            className='w-full border p-3 rounded-lg'
          />

          <input
            type='text'
            value={phoneNumber}
            onChange={onChangePhoneNumber}
            placeholder='Your Phone Number (optional)'
            className='w-full border p-3 rounded-lg'
          />

          <p className="text-sm text-gray-500">Please include your phone number if you would like to be contacted via phone.</p>

          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=Date: ${selectedDate}%0D%0APhone Number: ${phoneNumber}%0D%0A${message}`}
            className='bg-orange-700 text-black text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
