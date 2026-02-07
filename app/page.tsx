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

 const columns: DataTableColumn<TrendingCoin>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: (coin) => {
        const item = coin.item;

        return (
          <Link href={`/coins/${item.id}`}>
            <Image src={item.large} alt={item.name} width={36} height={36} />
            <p>{item.name}</p>
          </Link>
        );
      },
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: (coin) => {
        const item = coin.item;
        const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;

        return (
          <div className={cn('price-change', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
            <p className="flex items-center">
              {/* {formatPercentage(item.data.price_change_percentage_24h.usd)} */}
              {isTrendingUp ? (
                <TrendingUp width={16} height={16} />
              ) : (
                <TrendingDown width={16} height={16} />
              )}
            </p>
          </div>
        );
      },
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: (coin) => `$${coin.item.data.price.toLocaleString()}`,
    },
]

const Page = async () => {


  return (
    <main className='main-container'>
      <section className='home-grid'>
        <Suspense fallback={<CoinOverviewFallback />}>
          {/* @ts-expect-error Async Server Component */}
           <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
          {/* @ts-expect-error Async Server Component */}
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