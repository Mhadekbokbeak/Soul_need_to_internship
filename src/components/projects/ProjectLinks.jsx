import ArrowIcon from '../ui/ArrowIcon'

const projectLinks = [
  { key: 'demoUrl', label: 'Live demo', unavailable: 'Demo link not added yet', style: 'demo' },
  { key: 'githubUrl', label: 'GitHub source', unavailable: 'GitHub link not added yet', style: 'github' },
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

function ProjectLinks({ project, className = '' }) {
  return (
    <div className={`project-actions ${className}`.trim()} aria-label={`Project links for ${project.title}`}>
      {projectLinks.map(({ key, label, unavailable, style }) => {
        const href = getSafeExternalUrl(project[key])

        return href ? (
          <a
            className={`project-action project-action--${style}`}
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            aria-label={`${label} for ${project.title} (opens in a new tab)`}
          >
            {label} <ArrowIcon diagonal />
          </a>
        ) : (
          <button
            className={`project-action project-action--${style} project-action--unavailable`}
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
