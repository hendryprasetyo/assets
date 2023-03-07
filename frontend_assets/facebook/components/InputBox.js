import Image from "next/image";
import {
  VideoCameraIcon,
  CameraIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";
import { useRef } from "react";
function InputBox() {
  const filepickerRef = useRef(null);
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4  items-center">
        <Image
          className="rounded-full"
          src="https://links.papareact.com/4u4"
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100  flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`what's on your mind, hendry`}
          />
          <button type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filepickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input type="file" hidden ref={filepickerRef} />
        </div>
        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
