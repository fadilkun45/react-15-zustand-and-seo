import { createStore } from "zustand";

// state
export type ProfileState = {
    profile: any;
}

// actions
export type ProfileActions = {
    setProfile: (parms: any) => void
}

export type ProfileStore = ProfileState & ProfileActions

export const createProfileStore = () => {
    return createStore<ProfileStore>((set) => ({
        profile: [],
        setProfile: (setProfile) => set(() => ({ profile: setProfile }))
    }))
}