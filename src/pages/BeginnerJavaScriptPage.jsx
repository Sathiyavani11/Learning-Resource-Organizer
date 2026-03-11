import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const lessons = [
  {
    title: 'JavaScript Guide',
    category: 'JavaScript',
    level: 'Beginner',
    duration: 'Flexible (self-paced)',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
  }
];

function BeginnerJavaScriptPage() {
  return (
    <div className="page">
      <Navbar />
      <main className="dashboard-wrap topic-page">
        <section className="intro-banner topic-hero">
          <p className="eyebrow-dark">Beginner · Step 3</p>
          <h1>JavaScript Basics</h1>
          <p>Learn programming fundamentals to make your pages interactive.</p>
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
          <Link className="btn btn-outline" to="/beginner/css">Back: CSS Basics</Link>
          <Link className="btn btn-primary" to="/learning-path">Finish Beginner</Link>
        </div>
      </main>
    </div>
  );
}

export default BeginnerJavaScriptPage;
