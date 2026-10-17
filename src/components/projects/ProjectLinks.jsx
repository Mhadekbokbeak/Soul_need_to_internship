import ArrowIcon from '../ui/ArrowIcon'

const projectLinks = [
  { key: 'demoUrl', label: 'Live demo', unavailable: 'Demo link not added yet' },
  { key: 'githubUrl', label: 'GitHub', unavailable: 'GitHub link not added yet' },
]

function getSafeExternalUrl(value) {
  if (!value) return null

  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null
  } catch {
    return null
  }
}

function ProjectLinks({ project }) {
  return (
    <div className="project-actions" aria-label="Project links">
      {projectLinks.map(({ key, label, unavailable }) => {
        const href = getSafeExternalUrl(project[key])

        return href ? (
          <a
            className="project-action"
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
          >
            {label} <ArrowIcon diagonal />
          </a>
        ) : (
          <button
            className="project-action project-action--unavailable"
            type="button"
            disabled
            key={key}
            title={unavailable}
          >
            {label} <span className="project-action-status">Not available</span>
          </button>
        )
      })}
    </div>
  )
}

export default ProjectLinks
