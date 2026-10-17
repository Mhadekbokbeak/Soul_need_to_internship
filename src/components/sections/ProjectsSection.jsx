import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import SectionLabel from '../ui/SectionLabel'
import ProjectCard from '../projects/ProjectCard'

function ProjectsSection({ projects, onOpen }) {
  const [activeProject, setActiveProject] = useState(0)
  const [revealedProjectIds, setRevealedProjectIds] = useState(() => new Set())

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.unobserve(entry.target)
          setRevealedProjectIds((current) => {
            const next = new Set(current)
            next.add(entry.target.dataset.projectId)
            return next
          })
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    )
    const projectObserver = new IntersectionObserver(
      (entries) => {
        if (entries.length === 0) return
        const projectElements = document.querySelectorAll('.project-item')
        if (projectElements.length === 0) return

        const viewportCenter = window.innerHeight / 2
        const currentProject = [...projectElements].reduce((closest, element) => {
          const elementBounds = element.getBoundingClientRect()
          const closestBounds = closest.getBoundingClientRect()
          const elementDistance = Math.abs(elementBounds.top + elementBounds.height / 2 - viewportCenter)
          const closestDistance = Math.abs(closestBounds.top + closestBounds.height / 2 - viewportCenter)
          return elementDistance < closestDistance ? element : closest
        })

        setActiveProject(Number(currentProject.dataset.projectIndex))
      },
      { threshold: 0, rootMargin: '-30% 0px -30% 0px' },
    )

    document.querySelectorAll('.project-item').forEach((element) => {
      revealObserver.observe(element)
      projectObserver.observe(element)
    })

    return () => {
      revealObserver.disconnect()
      projectObserver.disconnect()
    }
  }, [])

  return (
    <section className="projects-section" id="projects">
      <SectionLabel number="02">SELECTED PROJECTS</SectionLabel>
      <div className="projects-intro">
        <h2>A few things<br /><em>made with care.</em></h2>
        <p>Independent concepts and explorations.<br />Each one starts with a question.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isActive={activeProject === index}
            isPast={index < activeProject}
            isRevealed={revealedProjectIds.has(project.id)}
            onOpen={onOpen}
          />
        ))}
      </div>
      <div className="projects-end">
        <span>THAT’S THE COLLECTION</span>
        <span>FOR NOW &nbsp; · &nbsp; {profile.year}</span>
      </div>
    </section>
  )
}

export default ProjectsSection
