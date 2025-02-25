'use client'
import { Loading } from '@/app/Loading'
import { useLoadingStore } from '@/providers/loading-store-provider'
import { useProfileStore } from '@/providers/profile-store-provider'
import React, { ReactNode, useEffect } from 'react'

const Layout = ({ profile, children }: { profile: any, children: ReactNode }) => {
    const loading = useLoadingStore((state) => state.loading)
    const setLoading = useLoadingStore((state) => state.setLoading)
    const setProfile = useProfileStore((state) => state.setProfile)

    useEffect(() => {
        setLoading(true)
        if (profile) {
            setProfile(profile)
            setLoading(false)
        }
    }, [profile])


    return (
        <>
            {loading ? <Loading /> : children}
        </>
    )
}

export default Layout