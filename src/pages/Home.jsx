import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WineSelection from '../components/WineSelection'
import Philosophy from '../components/Philosophy'
import InteractiveMap from '../components/InteractiveMap'
import Producers from '../components/Producers'
import Testimonials from '../components/Testimonials'
import GourmetExperience from '../components/GourmetExperience'
import ClubMembership from '../components/ClubMembership'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <main>
        <WineSelection />
        <Philosophy />
        <InteractiveMap />
        <Producers />
        <Testimonials />
        <GourmetExperience />
        <ClubMembership />
      </main>
      <Footer />
    </>
  )
}
