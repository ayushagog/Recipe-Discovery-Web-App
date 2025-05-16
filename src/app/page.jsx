import React from 'react';
import Image from 'next/image';
import { getRecipes } from '@/library/api-call';
import { Section } from '@/components/Section';

export default async function Home () {
const recipes = await getRecipes();
const topTrending=recipes.slice(0,4);
const topBuy=recipes.slice(4,8);
const topCategory=recipes.slice(8,12);
const editorsPick=recipes.slice(12,16);



  return (
    <>

    <Image src={`https://dummyjson.com/image/1200/700`} width='200' height='150'  className='!w-full h-[300px]'  alt='image' />
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">

  {/* 🔥 Top Trending */}
  <Section title="🔥 Top Trending" data={topTrending} />

  {/* 🛒 Top Buying */}
  <Section title="🛒 Top Buying" data={topBuy} />

  {/* 📂 Top Categories */}
  <Section title="📂 Top Categories" data={topCategory} />

  {/* ⭐ Editor's Picks */}
  <Section title="⭐ Editor’s Picks" data={editorsPick} />

</div>

    </>
  )
}
