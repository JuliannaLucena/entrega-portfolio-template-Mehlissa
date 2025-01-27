import { Header } from "../../components/Header"
import { BannerSection } from "../../components/BannerSection"
import { AboutSection } from "../../components/AboutSection"
import { ContactSection } from "../../components/ContactSection"
import { Footer } from "../../components/Footer"

export const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <BannerSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}