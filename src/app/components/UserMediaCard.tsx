import Image from 'next/image';
import Link from 'next/link';

const UserMediaCard =({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href={"/"} className="text-blue-500 text-sm">
          See All
        </Link>
      </div>
      {/* BOTTOM  */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17939186/pexels-photo-17939186/free-photo-of-christian-shrine-in-niche-on-wall-with-flowers.jpeg"
            alt="Post"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17939186/pexels-photo-17939186/free-photo-of-christian-shrine-in-niche-on-wall-with-flowers.jpeg"
            alt="Post"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17939186/pexels-photo-17939186/free-photo-of-christian-shrine-in-niche-on-wall-with-flowers.jpeg"
            alt="Post"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17939186/pexels-photo-17939186/free-photo-of-christian-shrine-in-niche-on-wall-with-flowers.jpeg"
            alt="Post"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17939186/pexels-photo-17939186/free-photo-of-christian-shrine-in-niche-on-wall-with-flowers.jpeg"
            alt="Post"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17939186/pexels-photo-17939186/free-photo-of-christian-shrine-in-niche-on-wall-with-flowers.jpeg"
            alt="Post"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17939186/pexels-photo-17939186/free-photo-of-christian-shrine-in-niche-on-wall-with-flowers.jpeg"
            alt="Post"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/17939186/pexels-photo-17939186/free-photo-of-christian-shrine-in-niche-on-wall-with-flowers.jpeg"
            alt="Post"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default UserMediaCard