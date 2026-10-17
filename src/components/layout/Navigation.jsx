import { profile } from '../../data/profile'

function Navigation({ detailOpen = false, onBack }) {
  return (
    <header className="site-header">
      <a
        className="wordmark"
        href={detailOpen ? '#projects' : '#home'}
        aria-label={`${profile.name}, home`}
        onClick={detailOpen ? (event) => {
          event.preventDefault()
          onBack()
        } : undefined}
      >
        {profile.initials}<span className="wordmark-period">.</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {detailOpen ? (
          <button type="button" className="nav-back" onClick={onBack}>← &nbsp; All projects</button>
        ) : (
          <>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </>
        )}
      </nav>
      <a
        className="availability"
        href={profile.githubUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Soul's GitHub profile (opens in a new tab)"
      >
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Navigation
