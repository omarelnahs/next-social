import Image from "next/image";
import React from "react";

function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* USER  */}
      <div className=" flex items-center justify-between mt-4">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/24783996/pexels-photo-24783996/free-photo-of-woman-posing-in-wig.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt="profile"
            width={40}
            height={40}
            className="w-12 h-12 rounded-full"
          />
          <span className="font-medium">Jackie McBride</span>
        </div>
        <Image src={"/more.png"} alt="profile" width={16} height={16} />
      </div>
      {/* DESC  */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/19200759/pexels-photo-19200759/free-photo-of-cabbage-growing-in-field.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            }
            alt="profile"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          placeat alias distinctio nemo minus, impedit inventore. Voluptatem
          dolor hic quo quisquam deleniti eaque corporis quas provident iure
          maxime. Quos dolores libero veniam.
        </p>
      </div>
      {/* INTERACTION  */}
      <div className="flex items-center justify-between text-sm mt-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/like.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300 ">I</span>
            <span className="text-gray-500 ">
              213<span className="hidden md:inline"> likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/comment.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300 ">I</span>
            <span className="text-gray-500 ">
              21<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/share.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300 ">I</span>
            <span className="text-gray-500 ">
              3<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
