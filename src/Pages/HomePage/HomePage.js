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
            <section className='h-screen bg-background'>
                <Testimonials />
                <PartnersLogo />
            </section>
            <DiffSection />
            <FAQ />
            <NewsLetter />
        </div>
    )
}

export default HomePage