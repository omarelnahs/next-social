import Image from 'next/image';
import React from 'react'

function ProfileCard() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-6 text-sm">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/28389852/pexels-photo-28389852/free-photo-of-traditional-colorful-turkish-carpet.jpeg"
          fill
          alt=""
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/28407813/pexels-photo-28407813/free-photo-of-blackletes.jpeg"
          width={48}
          height={48}
          alt=""
          className="object-cover rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Edward Gabrial</span>
        <div className="flex items-center gap-4">
          <div className="flex ">
            <Image
              src="https://images.pexels.com/photos/28407813/pexels-photo-28407813/free-photo-of-blackletes.jpeg"
              width={12}
              height={12}
              alt=""
              className="object-cover rounded-full w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/28407813/pexels-photo-28407813/free-photo-of-blackletes.jpeg"
              width={12}
              height={12}
              alt=""
              className="object-cover rounded-full w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/28407813/pexels-photo-28407813/free-photo-of-blackletes.jpeg"
              width={12}
              height={12}
              alt=""
              className="object-cover rounded-full w-3 h-3"
            />
          </div>
          <span className='text-xs text-gray-500'>500 followers</span>
        </div>
        <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
      </div>
    </div>
  );
}

export default ProfileCard