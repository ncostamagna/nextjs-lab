import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/index";

type useUsersType = {
  user: User | null;
  //setSelected: (value: string | null) => void;
  setUser: (user: User) => void;
  clearUser: () => void;
};

// with persist, store in localStoge, save content
export default create<useUsersType>()((set, get) => ({
  user: { firstname: "Nahuel", lastname: "Costamagna", nickname: "Nahue" },
  /*setSelected(value: string | null) {
    set((state) => {
      if (value == null) {
        return { ...state, selected: null, idSelected: null };
      }
      const index = state.contacts.findIndex((user) => {
        return contact.id == value;
      });
      return { ...state, selected: index, idSelected: value };
    });
  },*/
  setUser(user: User) {
    set((state) => ({ ...state, user }));
  },
  clearUser() {
    set((state) => ({
      user: null,
    }));
  },
}));
