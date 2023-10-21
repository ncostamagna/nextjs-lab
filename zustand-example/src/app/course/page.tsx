"use client";

import useUser from "@/hooks/useUser";
import Nav from "@/components/nav";

export default function Course() {
  const userState = useUser((state) => state.user);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Nav />
        {userState != null && (
          <ul className="flex flex-col">
            <li className="inline-flex items-center gap-x-5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              ID: {userState?.id}
            </li>
            <li className="inline-flex items-center gap-x-5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              First name: {userState?.firstname}
            </li>
            <li className="inline-flex items-center gap-x-5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              Last name: {userState?.lastname}
            </li>
            <li className="inline-flex items-center gap-x-5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              Nickname: {userState?.nickname}
            </li>
          </ul>
        )}
      </div>
    </main>
  );
}
