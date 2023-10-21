"use client";

import { useState, FormEvent } from "react";
import { User } from "@/types";
import useUser from "@/hooks/useUser";
import Nav from "@/components/nav";

export default function User() {
  const userState = useUser((state) => state.user);
  const setUserState = useUser((state) => state.setUser);

  const [user, setUser] = useState<User>(
    userState == null
      ? {
          id: "",
          firstname: "",
          lastname: "",
          nickname: "",
        }
      : userState
  );

  const handleUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    setUserState(user);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Nav />
        <p>User page</p>

        <form className="w-full max-w-lg" onSubmit={handleUser}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-id"
              >
                Id
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Id"
                id="grid-id"
                value={user.id}
                onChange={(e) => setUser({ ...user, id: e.target.value })}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                id="grid-first-name"
                placeholder="First Name"
                value={user.firstname}
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Last name"
                id="grid-last-name"
                value={user.lastname}
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-nickname"
              >
                Nickname
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                id="grid-nickname"
                placeholder="Nick Name"
                value={user.nickname}
                onChange={(e) => setUser({ ...user, nickname: e.target.value })}
              />
            </div>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
