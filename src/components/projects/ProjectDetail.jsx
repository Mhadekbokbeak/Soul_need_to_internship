import { useEffect, useRef } from 'react'
import { profile } from '../../data/profile'
import ProjectLinks from './ProjectLinks'
import PreviewArtwork from './PreviewArtwork'

function ProjectDetail({ project, index, onBack }) {
  const headingRef = useRef(null)

  useEffect(() => {
    document.title = `${project.title} — ${profile.name}`
    headingRef.current?.focus()
    return () => {
      document.title = `${profile.name} — Full-stack developer`
    }
  }, [project.title])

  return (
    <main className="detail-page">
      <div className="detail-topline">
        <button type="button" className="text-link detail-back" onClick={onBack}>
          <span aria-hidden="true">←</span> Back to selected projects
        </button>
        <span className="detail-index">PROJECT {String(index + 1).padStart(2, '0')} / 03</span>
      </div>
      <header className="detail-header">
        <span className="eyebrow">{project.category} &nbsp;·&nbsp; {project.year} &nbsp;·&nbsp; Independent concept</span>
        <h1 ref={headingRef} tabIndex="-1">{project.title}</h1>
        <p className="detail-deck">{project.description}</p>
        <ProjectLinks project={project} />
      </header>
      <div className={`detail-artwork project-artwork--${project.artwork}`}>
        <PreviewArtwork
          variant={project.artwork}
          image={project.image}
          imageAlt={project.imageAlt}
          title={project.title}
          loading="eager"
        />
      </div>
      <div className="detail-reading">
        <aside className="detail-facts">
          <div><span>ROLE</span><p>{project.role}</p></div>
          <div><span>MADE WITH</span><p>{project.technology.join(' · ')}</p></div>
          <div><span>TYPE</span><p>Independent concept</p></div>
        </aside>
        <div className="detail-story">
          <section>
            <span className="eyebrow">01 — THE IDEA</span>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>
          <section>
            <span className="eyebrow">02 — THE QUESTION</span>
            <h2>Problem &amp; motivation</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <span className="eyebrow">03 — THE MAKING</span>
            <h2>Approach</h2>
            <p>{project.approach}</p>
            <ul className="feature-list">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>
          <button type="button" className="text-link detail-back detail-bottom-back" onClick={onBack}>
            <span aria-hidden="true">←</span> Return to all projects
          </button>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetail
