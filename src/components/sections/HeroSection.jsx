import { profile } from '../../data/profile'
import ArrowIcon from '../ui/ArrowIcon'

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
        <div className="hero-intro">
          <p>
            I’m <strong>{profile.name}</strong>, {profile.introduction}
          </p>
          <div className="hero-actions" aria-label="Quick links">
            <a
              className="hero-cta hero-cta--primary"
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="View CV as a PDF in a new tab"
            >
              View CV (PDF) <ArrowIcon diagonal />
            </a>
            <a className="hero-cta" href="#projects">
              Explore projects <span aria-hidden="true">↓</span>
            </a>
            <a
              className="hero-cta"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <ArrowIcon diagonal />
            </a>
          </div>
        </div>
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
