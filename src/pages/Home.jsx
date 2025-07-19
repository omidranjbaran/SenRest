import Slider from '../components/Slider';
import FeatureBoxes from '../components/FeatureBoxes';
import LatestProjects from '../components/LatestProjects';
import InfoSection from '../components/InfoSection';
import ClinicFinder from '../components/ClinicFinder';
import CustomerTestimonials from '../components/CustomerTestimonials';

export default function Home() {
  return (
    <>
      <Slider />
      <FeatureBoxes />
      <LatestProjects />
      <InfoSection />
      <ClinicFinder />
      <CustomerTestimonials />
    </>
  );
}
