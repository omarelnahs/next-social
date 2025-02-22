import Image from 'next/image';
import Link from 'next/link';

function Birthdays() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      {/* User  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/19641063/pexels-photo-19641063/free-photo-of-silhouette-of-couple-on-a-hill.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt="Profile"
            width={40}
            height={40}
            className="w-12 h-12 rounded-full"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>Celebrate</button>
        </div>
      </div>
      {/* UPCOMING  */}
      <div className='p-4 bg-slate-100 rounded-lg flex items-center gap-4'>
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className='flex flex-col gap-1 text-xs'>
          <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
          <span className='text-gray-500'>See other 16 have upcoming birthdays</span>
        </Link>
      </div>
    </div>
  );
}

export default Birthdays