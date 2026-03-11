import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const readCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem('lro_current_user') || 'null');
  } catch {
    return null;
  }
};

const weeklyPlan = [
  {
    week: 'Week 1',
    title: 'HTML Foundations',
    points: ['Semantic tags', 'Forms and validation', 'Accessible markup']
  },
  {
    week: 'Week 2',
    title: 'CSS Core Skills',
    points: ['Flexbox and Grid', 'Responsive layout', 'Spacing and typography']
  },
  {
    week: 'Week 3',
    title: 'JavaScript Essentials',
    points: ['Functions and arrays', 'DOM manipulation', 'Fetch API and async']
  },
  {
    week: 'Week 4',
    title: 'React Basics',
    points: ['Components and props', 'useState and useEffect', 'Conditional rendering']
  },
  {
    week: 'Week 5',
    title: 'React Projects',
    points: ['Routing with React Router', 'Form handling', 'State-driven UI design']
  },
  {
    week: 'Week 6',
    title: 'Portfolio and Deployment',
    points: ['Project cleanup', 'Hosting and deployment', 'Interview preparation notes']
  }
];

const beginnerModules = [
  {
    title: 'HTML Foundations',
    description: 'Start here for structure, tags, and accessible markup.',
    link: '/beginner/html'
  },
  {
    title: 'CSS Basics',
    description: 'Learn styling, spacing, and layout fundamentals.',
    link: '/beginner/css'
  },
  {
    title: 'JavaScript Basics',
    description: 'Understand variables, functions, and DOM basics.',
    link: '/beginner/javascript'
  }
];

const courseTracks = [
  {
    level: 'Intermediate',
    subtitle: 'Deepen layout skills and move into React.',
    courses: [
      {
        title: 'CSS Layout',
        category: 'CSS',
        duration: 'Flexible (self-paced)',
        link: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout'
      },
      {
        title: 'React Quick Start',
        category: 'React',
        duration: 'Flexible (self-paced)',
        link: 'https://react.dev/learn'
      },
      {
        title: 'JavaScript Modules',
        category: 'JavaScript',
        duration: 'Flexible (self-paced)',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules'
      }
    ]
  },
  {
    level: 'Advanced',
    subtitle: 'Scale state, effects, and architecture.',
    courses: [
      {
        title: 'Scaling Up with Reducer and Context',
        category: 'React',
        duration: 'Flexible (self-paced)',
        link: 'https://react.dev/learn/scaling-up-with-reducer-and-context'
      },
      {
        title: 'React Escape Hatches',
        category: 'React',
        duration: 'Flexible (self-paced)',
        link: 'https://react.dev/learn/escape-hatches'
      },
      {
        title: 'JavaScript Modules (Deep Dive)',
        category: 'JavaScript',
        duration: 'Flexible (self-paced)',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules'
      }
    ]
  }
];

function LearningPathPage() {
  const currentUser = readCurrentUser();

  return (
    <div className="page">
      <Navbar currentUser={currentUser} />
      <main className="dashboard-wrap">
        <section className="intro-banner">
          <h1>Structured Learning Path</h1>
          <p>Follow this 6-week roadmap and store every useful link in your dashboard for revision.</p>
        </section>

        <section className="panel">
          <h2>6-Week Full Stack Frontend Plan</h2>
          <div className="roadmap-grid">
            {weeklyPlan.map((item) => (
              <article key={item.week} className="roadmap-card">
                <p className="eyebrow-dark">{item.week}</p>
                <h4>{item.title}</h4>
                <ul className="simple-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Beginner Track (Start Here)</h2>
          <div className="topic-grid">
            {beginnerModules.map((module) => (
              <article key={module.title} className="course-card">
                <h4>{module.title}</h4>
                <p className="course-duration">{module.description}</p>
                <Link className="course-link" to={module.link}>Open module</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Course Links by Level</h2>
          <div className="course-levels">
            {courseTracks.map((track) => (
              <div key={track.level} className="course-level">
                <div className="course-level-header">
                  <h3>{track.level}</h3>
                  <p>{track.subtitle}</p>
                </div>
                <div className="course-grid">
                  {track.courses.map((course) => (
                    <article key={course.title} className="course-card">
                      <div className="course-meta">
                        <span className="course-chip">{course.category}</span>
                        <span className={`course-chip course-${track.level.toLowerCase()}`}
                        >
                          {track.level}
                        </span>
                      </div>
                      <h4>{course.title}</h4>
                      <p className="course-duration">Duration: {course.duration}</p>
                      <a className="course-link" href={course.link} target="_blank" rel="noreferrer">
                        Open course
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Daily Learning Routine</h2>
          <div className="insight-grid">
            <article className="insight-card">
              <h4>Morning</h4>
              <p>30 mins theory reading and short notes in your own words.</p>
            </article>
            <article className="insight-card">
              <h4>Afternoon</h4>
              <p>60 mins coding practice from the resources you saved.</p>
            </article>
            <article className="insight-card">
              <h4>Evening</h4>
              <p>20 mins revision and update links with new tutorials.</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LearningPathPage;
