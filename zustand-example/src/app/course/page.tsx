"use client";

import useUser from "@/hooks/useUser";
import Nav from "@/components/nav";

export default function Course() {
  const userState = useUser((state) => state.user);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Nav />
        <p>Course page</p>
        {userState != null && (
          <div>
            <ul>
              <li>ID: {userState?.id}</li>
              <li>First name: {userState?.firstname}</li>
              <li>Last name: {userState?.lastname}</li>
              <li>Nickname: {userState?.nickname}</li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
