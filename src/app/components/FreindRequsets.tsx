import Image from "next/image";
import Link from "next/link";
import React from "react";

function FreindRequsets() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Request</span>
        <Link href={"/"} className="text-blue-500 text-sm"></Link>
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
          <Image
            src="/accept.png"
            alt="Profile"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="Profile"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
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
          <Image
            src="/accept.png"
            alt="Profile"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="Profile"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
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
          <Image
            src="/accept.png"
            alt="Profile"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="Profile"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default FreindRequsets;
