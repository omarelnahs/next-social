import Image from "next/image";
import React from "react";

function AddPost() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR  */}
      <Image
        src={
          "https://images.pexels.com/photos/18322084/pexels-photo-18322084/free-photo-of-flowers-on-a-notebook.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        }
        alt="Post"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* Post  */}
      <div className=" flex-1">
        {/* POST TEXT  */}
        <div className="flex gap-4">
          <textarea
            placeholder="What's on your mind ?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="Post"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* POST OPTION  */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="Post" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="Post" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addvideo.png" alt="Post" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="Post" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
