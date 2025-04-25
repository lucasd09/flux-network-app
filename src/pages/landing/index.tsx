import CTA from "./components/cta"
import Features from "./components/features"
import Footer from "./components/footer"
import Hero from "./components/hero"
import HowItWorks from "./components/how-it-works"
import Navbar from "./components/navbar"
import Testimonials from "./components/testimonials"

export const LandingPage = () => {
  return <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
  </div>
}