import Image from "next/image";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  ViewColumnsIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import {
  ShoppingCartIcon,
  FlagIcon,
  PlayIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import HeadersIcon from "./HeadersIcon";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2  lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeadersIcon active Icon={HomeIcon} />
          <HeadersIcon Icon={FlagIcon} />
          <HeadersIcon Icon={PlayIcon} />
          <HeadersIcon Icon={ShoppingCartIcon} />
          <HeadersIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* profile pic */}

        <p className="whitespace-nowrap font-semibold pr-3">Hendry Prasetyo</p>
        <ViewColumnsIcon className="icon" />
        <BellIcon className="icon" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
