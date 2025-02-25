import { createStore } from "zustand";

// state
export type LoadingState = {
    loading: boolean | string;
}

// actions
export type LoadingActions = {
    setLoading: (state: boolean) => void
}

export type LoadingStore = LoadingState & LoadingActions


export const createLoadingStore = () => {
    return createStore<LoadingStore>()((set) => ({
       loading: true,
        setLoading: (setLoading) => set(() => ({ loading: setLoading })),
    }))
}