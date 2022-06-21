import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {

    return (
        <>
            <section id='home'><Header /></section>
            <Nav />
            <section id='about'><About /></section>
            <section id='experience'><Experience /></section>
            <section id='services'><Services /></section>
            <section id='portfolio'><Portfolio /></section>
            <section id='testimonials'><Testimonials /></section>
            <section id='contact'><Contact /></section>
            <section><Footer /></section>
        </>
    )
}

export default App