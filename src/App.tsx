import HeroSection from '@/components/HeroSection';
import GiftGallery from '@/components/GiftGallery';
import MehendiMoments from '@/components/MehendiMoments';
import ComboSurprise from '@/components/ComboSurprise';
import LoveLetter from '@/components/LoveLetter';
import HeartfeltMessage from '@/components/HeartfeltMessage';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-amber-50">
      <HeroSection />
      <GiftGallery />
      <MehendiMoments />
      <ComboSurprise />
      <LoveLetter />
      <HeartfeltMessage />
      <Footer />
    </div>
  );
}

export default App;