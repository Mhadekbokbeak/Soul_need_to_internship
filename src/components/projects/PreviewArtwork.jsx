import { profile } from '../../data/profile'
import ArrowIcon from '../ui/ArrowIcon'

function FieldnotesArtwork() {
  return (
    <div className="artwork artwork--fieldnotes" aria-hidden="true">
      <div className="fieldnotes-topline">
        <span>FIELDNOTES</span>
        <span>ISSUE 01&nbsp;&nbsp; / &nbsp;&nbsp;2025</span>
      </div>
      <div className="fieldnotes-content">
        <div className="fieldnotes-copy">
          <span className="artwork-eyebrow">A journal for the curious</span>
          <p className="fieldnotes-title">Small things,<br />seen slowly.</p>
          <span className="artwork-link">Read the latest story <ArrowIcon diagonal /></span>
        </div>
        <div className="fieldnotes-still-life">
          <div className="still-life-sun" />
          <div className="still-life-vase" />
          <div className="still-life-stem still-life-stem--one" />
          <div className="still-life-stem still-life-stem--two" />
          <div className="still-life-table" />
        </div>
      </div>
      <div className="fieldnotes-footer">
        <span>OBSERVATIONS ON EVERYDAY LIFE</span>
        <span>SCROLL TO EXPLORE &nbsp; ↓</span>
      </div>
    </div>
  )
}

function CommonGroundArtwork() {
  return (
    <div className="artwork artwork--common" aria-hidden="true">
      <div className="common-sidebar">
        <div className="common-mark">cg.</div>
        <div className="common-nav-item common-nav-item--active">Overview</div>
        <div className="common-nav-item">My circles</div>
        <div className="common-nav-item">Shared plans</div>
        <div className="common-profile"><span>{profile.initials}</span> {profile.name}</div>
      </div>
      <div className="common-main">
        <div className="common-topbar"><span>MONDAY, MAY 19</span><span>⌕ &nbsp; ◯</span></div>
        <div className="common-heading">
          <div><span className="artwork-eyebrow">YOUR PEOPLE, IN ONE PLACE</span><p>Good morning, {profile.name}.</p></div>
          <span className="common-new">＋ &nbsp; Make a plan</span>
        </div>
        <div className="common-week">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
            <div className={index === 2 ? 'week-day week-day--selected' : 'week-day'} key={`${day}-${index}`}>
              <span>{day}</span><strong>{19 + index}</strong>
            </div>
          ))}
        </div>
        <div className="common-plan">
          <span className="plan-time">10:30</span>
          <span className="plan-marker" />
          <div><strong>Coffee & a catch-up</strong><span>With Maya, Sam + 2 others</span></div>
          <span className="plan-avatars">M&nbsp; S&nbsp; +2</span>
        </div>
        <div className="common-plan common-plan--second">
          <span className="plan-time">16:00</span>
          <span className="plan-marker plan-marker--lavender" />
          <div><strong>Sunday market wander</strong><span>A little fresh air together</span></div>
          <span className="plan-avatars">A&nbsp; J&nbsp; +1</span>
        </div>
      </div>
    </div>
  )
}

function IndexArtwork() {
  return (
    <div className="artwork artwork--index" aria-hidden="true">
      <aside className="index-sidebar">
        <span className="index-symbol">INDEX<br />/ 08</span>
        <span>SELECTED WORK<br />&amp; FOUND OBJECTS</span>
        <span>INDEPENDENT<br />DESIGN ARCHIVE</span>
        <span>EST. MMXXV</span>
      </aside>
      <div className="index-main">
        <div className="index-header"><span>THE PERSONAL COLLECTION</span><span>01 — 24</span></div>
        <div className="index-intro">
          <p>An ongoing study of<br />form, function &amp; feeling.</p>
          <span>Objects, notes and references collected along the way.</span>
        </div>
        <div className="index-grid">
          <div className="index-object index-object--arch"><span /></div>
          <div className="index-object index-object--vessel"><span /></div>
          <div className="index-object index-object--chair"><span /></div>
          <div className="index-object index-object--book"><span /></div>
        </div>
        <div className="index-bottom"><span>01 &nbsp; OBJECTS</span><span>02 &nbsp; NOTES</span><span>03 &nbsp; PLACES</span><span>↗</span></div>
      </div>
    </div>
  )
}

function PreviewArtwork({ variant, image, imageAlt, title, loading = 'lazy' }) {
  if (image) {
    return (
      <img
        className="artwork-image"
        src={image}
        alt={imageAlt || `${title} website screenshot`}
        loading={loading}
        decoding="async"
      />
    )
  }

  if (variant === 'fieldnotes') return <FieldnotesArtwork />
  if (variant === 'common-ground') return <CommonGroundArtwork />
  return <IndexArtwork />
}

export default PreviewArtwork
