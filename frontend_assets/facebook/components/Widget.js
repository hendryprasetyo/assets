import {
  MagnifyingGlassIcon,
  VideoCameraIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import Contact from "./Contact";
const contact = [
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
  },
  {
    name: "Jeff Bazoz",
    src: "https://links.papareact.com/k2j",
  },
  {
    name: "Mark Zuckerburg",
    src: "https://links.papareact.com/xql",
  },
  {
    name: "Hendry",
    src: "https://links.papareact.com/zof",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
  },
];
function Widget() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contact</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>
      {contact.map((ctc) => (
        <Contact key={ctc.src} src={ctc.src} name={ctc.name} />
      ))}
    </div>
  );
}

export default Widget;
