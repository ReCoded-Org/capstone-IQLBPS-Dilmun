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
            <DiffSection />
            <section className='min-h-screen bg-background sna'>
                <Testimonials />
                <PartnersLogo />
            </section>
            <Features />
            <FAQ />
            <NewsLetter />
        </div>
    )
}

export default HomePage