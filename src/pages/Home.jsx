import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import CloudArchitecture from "../components/CloudArchitecture.jsx";
import CareerTimeline from "../components/CareerTimeline.jsx";
import Credentials from "../components/Credentials.jsx";
import TechnologyGrid from "../components/TechnologyGrid.jsx";
import CaseStudies from "../components/CaseStudies.jsx";
import GitHubRadar from "../components/GitHubRadar.jsx";
import AIAssistant from "../components/AIAssistant.jsx";
import DevOpsTerminal from "../components/DevOpsTerminal.jsx";
import Vision from "../components/Vision.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CloudArchitecture />
      <CareerTimeline />
      <Credentials />
      <TechnologyGrid />
      <CaseStudies />
      <GitHubRadar />
      <AIAssistant />
      <DevOpsTerminal />
      <Vision />
      <Contact />
      <Footer />
    </>
  );
}
