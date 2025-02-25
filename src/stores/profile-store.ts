import { createStore } from "zustand";


// state
export type ProfileState = {
    profile: any;
}

// actions
export type ProfileActions = {
    setProfile: () => void
}

export type ProfileStore = ProfileState & ProfileActions

export const createProfileStore = () => {
    return createStore<ProfileStore>((set) => ({
        profile: [],
        setProfile: () => set((state) => ({ setProfile: state.setProfile}))
    }))
}