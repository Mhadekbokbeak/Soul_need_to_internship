import { useCallback, useEffect, useRef, useState } from 'react'
import { projects } from './data/projects'
import Navigation from './components/layout/Navigation'
import SiteFooter from './components/layout/SiteFooter'
import AboutSection from './components/sections/AboutSection'
import HeroSection from './components/sections/HeroSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ProjectDetail from './components/projects/ProjectDetail'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [returnScrollPosition, setReturnScrollPosition] = useState(0)
  const returnFocusTarget = useRef(null)

  function openProject(project) {
    setReturnScrollPosition(window.scrollY)
    returnFocusTarget.current = project.id
    setSelectedProject(project)
  }

  const closeProject = useCallback(() => {
    setSelectedProject(null)
  }, [])

  useEffect(() => {
    if (!selectedProject) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeProject()
    }

    window.addEventListener('keydown', handleKeyDown)
    window.scrollTo({ top: 0, behavior: 'instant' })
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeProject, selectedProject])

  useEffect(() => {
    if (selectedProject || !returnFocusTarget.current) return

    document.querySelector(`[data-project-id="${returnFocusTarget.current}"]`)?.focus()
    returnFocusTarget.current = null
    window.scrollTo({ top: returnScrollPosition, behavior: 'instant' })
  }, [returnScrollPosition, selectedProject])

  if (selectedProject) {
    return (
      <>
        <Navigation detailOpen onBack={closeProject} />
        <ProjectDetail
          project={selectedProject}
          index={projects.indexOf(selectedProject)}
          onBack={closeProject}
        />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} onOpen={openProject} />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
