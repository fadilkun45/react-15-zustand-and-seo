import { type ReactNode } from "react"
import { LoadingStoreProvider } from "./loading-store-provider"
import { CounterStoreProvider } from "./counter-store-provider"

const providers = [CounterStoreProvider,LoadingStoreProvider]

const MainProviders = ({children}: { children: ReactNode }) => {
    // reduce untuk menbungkus provider dari kanan ke kiri, acc adalah item dari providers dan yang provider adalah tumpukan yang sudah ada
   return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children)
}

export default MainProviders