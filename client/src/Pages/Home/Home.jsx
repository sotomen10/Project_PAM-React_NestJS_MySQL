import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/mainHeroSection/HeroSection";
import AboutSection from "../../Components/aboutSection/AboutSection";
import ContactSection from "../../Components/contactSection/ContactSection";
import Sponsors from '../../Components/Sponsors/Sponsors';


function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1500, // duración de la animación en milisegundos
        });
    }, []);

    return (
        <div className='App'>
            <Header />
            <HeroSection />
            <AboutSection />  
            <Sponsors/>  
            <ContactSection />
            <Footer />
        </div>
    );
}

export default Home;