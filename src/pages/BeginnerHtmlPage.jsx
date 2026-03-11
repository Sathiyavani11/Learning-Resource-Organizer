import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const lessons = [
  {
    title: 'Structuring Content with HTML',
    category: 'HTML',
    level: 'Beginner',
    duration: 'Flexible (self-paced)',
    link: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content'
  }
];

function BeginnerHtmlPage() {
  return (
    <div className="page">
      <Navbar />
      <main className="dashboard-wrap topic-page">
        <section className="intro-banner topic-hero">
          <p className="eyebrow-dark">Beginner · Step 1</p>
          <h1>HTML Foundations</h1>
          <p>Start here to learn how web pages are structured using semantic HTML.</p>
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
          <Link className="btn btn-outline" to="/learning-path">Back to Learning Path</Link>
          <Link className="btn btn-primary" to="/beginner/css">Next: CSS Basics</Link>
        </div>
      </main>
    </div>
  );
}

export default BeginnerHtmlPage;
