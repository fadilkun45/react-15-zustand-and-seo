'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { type LoadingStore, createLoadingStore } from '@/stores/loading-store'

//  panggil si zustand 
export type LoadingStoreApi = ReturnType<typeof createLoadingStore>

// context bawaan react 
export const LoadingStoreContext = createContext<LoadingStoreApi | undefined>(
    undefined,
)


export const LoadingStoreProvider = ({ children }: { children: ReactNode}) => {
    // gabungin si zustand dengan context
    const storeRef = useRef<LoadingStoreApi>(null)
    if (!storeRef.current) {
        storeRef.current = createLoadingStore()
    }

    return (
        <LoadingStoreContext.Provider value={storeRef.current}>
            {children}
        </LoadingStoreContext.Provider>
    )

}
//  Generic <T,> untuk menangkap dan mengembalikan lebih aman sesuai LoadingStore
export const useLoadingStore = <T,>(selector: (store: LoadingStore) => T,): T => {
    const loadingStoreContext = useContext(LoadingStoreContext)

    if (!loadingStoreContext) {
        throw new Error(`useCounterStore must be used within CounterStoreProvider`)
    }

    return useStore(loadingStoreContext, selector)
}