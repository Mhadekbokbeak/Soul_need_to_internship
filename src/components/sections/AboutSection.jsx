import SectionLabel from '../ui/SectionLabel'
import { profile } from '../../data/profile'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
      <div className="about-layout">
        <h2>
          From public<br />
          service to <em>software.</em>
        </h2>
        <div className="about-copy">
          <p className="about-lede">
            {profile.background}, combining a problem-solving mindset with hands-on full-stack projects.
          </p>
          <p>
            I build web applications with {profile.skills.join(', ')}, with a particular
            interest in backend systems, databases, and how products work end to end.
          </p>
          <p>
            I value clear, maintainable code and keep strengthening my fundamentals by
            turning ideas into working applications.
          </p>
          <span className="about-signoff">{profile.aspiration}</span>
        </div>
      </div>
      <div className="about-foot">
        <span>THOUGHTFUL BY DESIGN</span>
        <span>BUILT WITH INTENTION</span>
        <span>ALWAYS IN PROGRESS</span>
      </div>
    </section>
  )
}

export default AboutSection
