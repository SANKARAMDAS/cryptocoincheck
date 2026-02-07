import React, { Suspense } from 'react'
import Image from 'next/image'
import DataTable from '@/Components/DataTable'
import { fetcher } from '@/lib/coingecko.actions'
import { cn, formatCurrency } from '@/lib/utils'
import Link from 'next/link'
import { TrendingDown, TrendingUp } from 'lucide-react'
import CoinOverview from '@/Components/home/CoinOverview'
import TrendingCoins from '@/Components/home/TrendingCoins'
import { CategoriesFallback, CoinOverviewFallback, TrendingCoinsFallback } from '@/Components/home/fallback'
import Categories from '@/Components/home/Categories'


const Page = async () => {


  return (
    <main className='main-container'>
      <section className='home-grid'>
        <Suspense fallback={<CoinOverviewFallback />}>
           <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>

      </section>

      <section className='w-full mt-7 space-y-4'>
        <Suspense fallback={<CategoriesFallback />}>
        <Categories />
        </Suspense>
      </section>
    </main>
  )
}

export default Page