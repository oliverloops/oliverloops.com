import Link from "next/link";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";

export default function Header() {
  return (
    <nav className="flex justify-around flex-row fixed sticky sticky-nav top-0 h-18 p-8 bg-white dark:bg-black bg-opacity-60">
      <div>
        <button className="flex justify-center items-center rounded-md bg-gray-200 h-8 w-8">
          <HiMoon className="icon" />
        </button>
      </div>
      <div className="flex justify-around flex-row w-64">
        <div className="p-1">
          <Link href="/">
            <a className="dark:text-white">Blog</a>
          </Link>
        </div>
        <div className="p-1">
          <Link href="/">
            <a className="dark:text-white">Portfolio</a>
          </Link>
        </div>
        <div className="p-1">
          <Link href="/">
            <a className="dark:text-white">About</a>
          </Link>
        </div>
        <div className="p-1">
          <Link href="/">
            <a className="dark:text-white">Home</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
