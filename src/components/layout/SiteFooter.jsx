import { profile } from '../../data/profile'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>{profile.initials}<span className="wordmark-period">.</span></span>
      <nav className="footer-links" aria-label="Contact and project links">
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">
          View all projects on GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href={`mailto:${profile.email}`}>
          {profile.email} <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <a className="footer-back" href="#home">Back to the beginning ↑</a>
    </footer>
  )
}

export default SiteFooter
