import { profile } from '../../data/profile'

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-kicker">
        <span>{profile.role.toUpperCase()}</span>
        <span>{profile.aspiration.toUpperCase()}</span>
      </div>
      <h1 className="hero-title">
        Building software<br />
        <span>with <em>purpose.</em></span>
      </h1>
      <div className="hero-bottom">
        <p>
          I’m {profile.name}, a {profile.role.toLowerCase()}<br className="desktop-break" />
          {profile.introduction}
        </p>
        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span aria-hidden="true">↓</span>
        </a>
      </div>
      <span className="hero-index">PORTFOLIO &nbsp; / &nbsp; {profile.year}</span>
    </section>
  )
}

export default HeroSection
