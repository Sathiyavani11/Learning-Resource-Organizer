import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function LandingPage() {
  return (
    <div className="page page-landing">
      <Navbar />

      <main className="landing-layout landing-hero-alt">
        <section className="hero-card">
          <p className="eyebrow">Your Learning Control Center</p>
          <h1>Learning Resource Organizer</h1>
          <p className="hero-lead">
            Capture every tutorial, note, and doc in one clean workspace.
            Tag them, search instantly, and keep your roadmap visible as you grow.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/register">Create Account</Link>
            <Link className="btn btn-outline" to="/login">Login</Link>
            <Link className="btn btn-outline" to="/learning-path">View Learning Path</Link>
            <Link className="btn btn-outline" to="/help">Help Center</Link>
          </div>
        </section>

        <aside className="hero-pane">
          <div className="hero-pulse" />
          <div className="hero-panel">
            <p className="panel-label">Today’s Focus</p>
            <h3>HTML → CSS → JS</h3>
            <p>Follow the beginner track and save links as you go.</p>
            <div className="panel-stats">
              <div>
                <span>Saved</span>
                <strong>18</strong>
              </div>
              <div>
                <span>Categories</span>
                <strong>7</strong>
              </div>
              <div>
                <span>Week</span>
                <strong>2/6</strong>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <section className="landing-layout landing-bands">
        <article className="band-card">
          <h3>Save Useful Links</h3>
          <p>Add resources with title, valid URL, and category.</p>
        </article>
        <article className="band-card">
          <h3>Find in Seconds</h3>
          <p>Use instant search and category filters to locate content quickly.</p>
        </article>
        <article className="band-card">
          <h3>Learn Consistently</h3>
          <p>Build your own personal library for HTML, CSS, JavaScript, React, and more.</p>
        </article>
        <article className="band-card">
          <h3>Track Weekly Goals</h3>
          <p>Use the 6-week plan and track your progress week by week.</p>
        </article>
      </section>

      <section className="landing-layout landing-columns">
        <div className="column-left">
          <h2>What You Can Do Inside The App</h2>
          <p className="muted">
            Everything is designed for clarity, quick access, and a clean learning flow.
          </p>
          <div className="feature-stack">
            <div className="stack-item">
              <h4>Add and Tag Resources</h4>
              <p>Save tutorial links with a proper title, valid URL, and category tags for easy tracking.</p>
            </div>
            <div className="stack-item">
              <h4>Instant Search</h4>
              <p>Type any keyword and immediately filter resources by title without page reload.</p>
            </div>
            <div className="stack-item">
              <h4>Category Filtering</h4>
              <p>Switch between HTML, CSS, JavaScript, React, UI/UX, Node.js, and custom categories.</p>
            </div>
          </div>
        </div>
        <div className="column-right">
          <div className="grid-cards">
            <article className="content-card">
              <h3>Resource Dashboard</h3>
              <p>View everything in a clean card layout designed for mobile, tablet, and desktop devices.</p>
            </article>
            <article className="content-card">
              <h3>Persistent Storage</h3>
              <p>All your links stay saved in LocalStorage, so browser refresh will not remove your data.</p>
            </article>
            <article className="content-card">
              <h3>Beginner Friendly Flow</h3>
              <p>Simple register, login, dashboard navigation and readable UI for students.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="landing-layout landing-timeline">
        <div className="timeline-header">
          <h2>Suggested Weekly Learning Path</h2>
          <p>Follow the 6-week path and add resources as you progress.</p>
        </div>
        <div className="timeline-rail">
          <article className="path-card">
            <h3>Week 1</h3>
            <p>HTML tags, forms, semantic structure, basic accessibility.</p>
          </article>
          <article className="path-card">
            <h3>Week 2</h3>
            <p>CSS selectors, Flexbox, Grid, responsive units and media queries.</p>
          </article>
          <article className="path-card">
            <h3>Week 3</h3>
            <p>JavaScript fundamentals, arrays, objects, ES6, async concepts.</p>
          </article>
          <article className="path-card">
            <h3>Week 4</h3>
            <p>React components, hooks, state management and routing basics.</p>
          </article>
          <article className="path-card">
            <h3>Week 5</h3>
            <p>UI/UX practice with color systems, spacing, reusable components.</p>
          </article>
          <article className="path-card">
            <h3>Week 6</h3>
            <p>Build full projects and use this organizer to track references.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
