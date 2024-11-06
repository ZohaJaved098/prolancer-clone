import Head from './ui/head';
import Features from './ui/features'
import Services from './ui/services'
import Category from './ui/category'
import Sellers from './ui/sellers'
import Stats from './ui/statistics'
import SearchApp from './ui/searchApp'
import Blog from './ui/blog'

export default function Home() {
  return (
    <div className="w-full text-white">
      <Head/>
      <Features/>
      <Services/>
      <Category/>
      <Sellers/>
      <Stats/>
      <SearchApp/>
      <Blog/>
    </div>

    
  );
}
