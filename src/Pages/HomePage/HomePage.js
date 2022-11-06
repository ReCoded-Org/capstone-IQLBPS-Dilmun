import React from 'react'
import DiffSection from '../../components/DiffSection/DiffSection'
import FAQ from '../../components/FAQ'
import Features from '../../components/Features/Features'
import Hero from '../../components/HeroSection/Hero'
import NewsLetter from '../../components/NewsLetter'
import PartnersLogo from '../../components/Proof/PartnersLogo'
import Testimonials from '../../components/Proof/Testimonials'

const HomePage = () => {
    return (
        <div data-testid='home-page'>
            <Hero />
            <Features />
            <DiffSection />
            <Testimonials />
            <PartnersLogo />
            <NewsLetter />
            <FAQ />
        </div>
    )
}

export default HomePage