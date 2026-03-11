import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { categories, getCurrentUser, getUserResources } from '../utils/resourceStore';

function InsightsPage() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const resources = getUserResources(currentUser.email);

  const categoryCounts = {};
  categories.forEach((item) => {
    categoryCounts[item] = resources.filter((resource) => resource.category === item).length;
  });

  return (
    <div className="page">
      <Navbar currentUser={currentUser} />
      <main className="dashboard-wrap">
        <section className="intro-banner">
          <h1>Insights Module</h1>
          <p>Category-wise summary is moved to this separate page.</p>
        </section>

        <section className="panel">
          <h2>Category Overview</h2>
          <div className="insight-grid">
            {categories.map((item) => (
              <article key={item} className="insight-card">
                <h4>{item}</h4>
                <p>{categoryCounts[item]} saved links</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default InsightsPage;
