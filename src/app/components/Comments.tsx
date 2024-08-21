import Image from "next/image";
import React from "react";

function Comments() {
  return (
    <div className="">
      {/* WRITE  */}
      <div className="flex">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/18820793/pexels-photo-18820793/free-photo-of-smiling-black-haired-woman.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt="profile"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment ..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Comments  */}
      <div className="">
        {/* COMMENT  */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR  */}
          <Image
            src="https://images.pexels.com/photos/18820793/pexels-photo-18820793/free-photo-of-smiling-black-haired-woman.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt="profile"
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          {/* DESC  */}
          <div className="flex flex-col gap-2 flex-1 bg-slate-200 p-4 rounded-2xl">
            <span className="font-medium">Omar </span>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              quia repellendus officia odit, ut sit itaque! Quas quia modi
              cupiditate eligendi facilis, aliquam, nesciunt pariatur, numquam
              sunt consectetur exercitationem! Illum?
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src={"/like.png"}
                  alt="profile"
                  width={12}
                  height={12}
                  className=" cursor-pointer w-4 h-4 "
                />
                <span className="text-gray-300">I</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Replay</div>
            </div>
          </div>
          {/* ICON  */}
          <Image
            src={"/more.png"}
            alt="profile"
            width={16}
            height={16}
            className=" cursor-pointer w-4 h-4 "
          />
        </div>
      </div>
    </div>
  );
}

export default Comments;
