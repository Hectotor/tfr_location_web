import Header from './components/Header'
import Hero from './components/Hero'
import Avantages from './components/Avantages'
import Flotte from './components/Flotte'
import PourquoiNous from './components/PourquoiNous'
import Temoignages from './components/Temoignages'
import Localisation from './components/Localisation'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Flotte />
      <PourquoiNous />
      <Temoignages />
      <Localisation />
      <CTA />
      <Footer />
    </div>
  )
}
