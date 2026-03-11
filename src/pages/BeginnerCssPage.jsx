import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const lessons = [
  {
    title: 'CSS Styling Basics',
    category: 'CSS',
    level: 'Beginner',
    duration: 'Flexible (self-paced)',
    link: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics'
  }
];

function BeginnerCssPage() {
  return (
    <div className="page">
      <Navbar />
      <main className="dashboard-wrap topic-page">
        <section className="intro-banner topic-hero">
          <p className="eyebrow-dark">Beginner · Step 2</p>
          <h1>CSS Basics</h1>
          <p>Learn how to style HTML with colors, spacing, and layout basics.</p>
        </section>

        <section className="panel">
          <h2>Course Details</h2>
          <div className="topic-grid">
            {lessons.map((lesson) => (
              <article key={lesson.title} className="course-card">
                <div className="course-meta">
                  <span className="course-chip">{lesson.category}</span>
                  <span className="course-chip course-beginner">{lesson.level}</span>
                </div>
                <h4>{lesson.title}</h4>
                <p className="course-duration">Duration: {lesson.duration}</p>
                <a className="course-link" href={lesson.link} target="_blank" rel="noreferrer">
                  Open course
                </a>
              </article>
            ))}
          </div>
        </section>

        <div className="topic-actions">
          <Link className="btn btn-outline" to="/beginner/html">Back: HTML Foundations</Link>
          <Link className="btn btn-primary" to="/beginner/javascript">Next: JavaScript Basics</Link>
        </div>
      </main>
    </div>
  );
}

export default BeginnerCssPage;
