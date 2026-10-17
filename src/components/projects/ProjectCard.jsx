import ArrowIcon from '../ui/ArrowIcon'
import PreviewArtwork from './PreviewArtwork'

function ProjectCard({ project, index, isActive, isPast, isRevealed, onOpen }) {
  return (
    <article
      className={`project-item reveal${isActive ? ' is-active' : ''}${isPast ? ' is-past' : ''}${isRevealed ? ' is-visible' : ''}`}
      data-project-index={index}
      data-project-id={project.id}
    >
      <button
        type="button"
        className="project-link"
        onClick={() => onOpen(project)}
        aria-label={`Read project: ${project.title}`}
      >
        <div className="project-meta">
          <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <div className="project-heading">
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <span className="project-open" aria-hidden="true"><ArrowIcon diagonal /></span>
        </div>
        <div className={`project-artwork project-artwork--${project.artwork}`}>
          <PreviewArtwork
            variant={project.artwork}
            image={project.image}
            imageAlt={project.imageAlt}
            title={project.title}
          />
          <span className="preview-caption">A closer look <ArrowIcon diagonal /></span>
        </div>
      </button>
    </article>
  )
}

export default ProjectCard
