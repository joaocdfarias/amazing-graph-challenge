import React from 'react'
import HeroImg from '../../assets/team.jpg'
import './Hero.css'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1> Create amazing graphics </h1>
        <h3>
          {' '}
          Colaborate and create beautiful <br /> graphics with your team{' '}
        </h3>
        <button> Start Now </button>
      </div>
      <img src={HeroImg} alt="Hero Img" />
    </section>
  )
}
