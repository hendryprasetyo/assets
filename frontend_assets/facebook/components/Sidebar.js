import {
  CalendarIcon,
  ClockIcon,
  ComputerDesktopIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  ShoppingCartIcon,
  ChevronDownIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";
function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow Icon={UserIcon} title="Friend" />
      <SidebarRow Icon={UserGroupIcon} title="Group" />
      <SidebarRow Icon={ShoppingCartIcon} title="MarketPlace" />
      <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
