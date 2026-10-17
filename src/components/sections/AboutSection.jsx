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
            {profile.background}, bringing curiosity and a problem-solving mindset to every project.
          </p>
          <p>
            My foundation spans modern web development, algorithms, and backend systems.
            I work with {profile.skills.join(', ')}.
          </p>
          <p>
            I enjoy building full-stack applications and working with databases. I care
            about clean, maintainable code and solving complex logical problems, while
            continuing to strengthen the fundamentals through hands-on projects.
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
