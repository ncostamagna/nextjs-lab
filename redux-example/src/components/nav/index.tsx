import Link from "next/link";

export default function Nav() {
  return (
    <ul className="flex">
      <li className="mr-6">
        <Link className="text-blue-500 hover:text-blue-800" href={"/user"}>
          user
        </Link>
      </li>
      <li className="mr-6">
        <Link className="text-blue-500 hover:text-blue-800" href={"/course"}>
          course
        </Link>
      </li>
    </ul>
  );
}
