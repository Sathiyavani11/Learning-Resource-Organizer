import Navbar from '../components/Navbar';

const readCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem('lro_current_user') || 'null');
  } catch {
    return null;
  }
};

function HelpPage() {
  const currentUser = readCurrentUser();

  return (
    <div className="page">
      <Navbar currentUser={currentUser} />
      <main className="dashboard-wrap">
        <section className="intro-banner">
          <h1>Help and Support</h1>
          <p>Everything you need to use Learning Resource Organizer smoothly.</p>
        </section>

        <section className="panel">
          <h2>How to Use This App</h2>
          <div className="content-grid">
            <article className="content-card">
              <h3>1. Register or Login</h3>
              <p>Create your account to keep resources tied to your email profile.</p>
            </article>
            <article className="content-card">
              <h3>2. Add New Resource</h3>
              <p>Enter title, valid URL, and category. Invalid URLs are blocked for safety.</p>
            </article>
            <article className="content-card">
              <h3>3. Search Faster</h3>
              <p>Use instant title search to quickly find old references while studying.</p>
            </article>
            <article className="content-card">
              <h3>4. Filter by Category</h3>
              <p>Pick HTML/CSS/JS/React categories and focus on one topic at a time.</p>
            </article>
            <article className="content-card">
              <h3>5. Delete Irrelevant Links</h3>
              <p>Remove outdated tutorials to keep your dashboard clean and useful.</p>
            </article>
            <article className="content-card">
              <h3>6. Data Persistence</h3>
              <p>All resources are saved in LocalStorage so refresh does not remove data.</p>
            </article>
          </div>
        </section>

        <section className="panel">
          <h2>Common Issues</h2>
          <div className="faq-wrap">
            <article className="faq-item">
              <h4>Dashboard shows empty?</h4>
              <p>Login first and check if search/filter is hiding items. Set category to All.</p>
            </article>
            <article className="faq-item">
              <h4>Cannot add URL?</h4>
              <p>Use full links with protocol, like https://react.dev.</p>
            </article>
            <article className="faq-item">
              <h4>Lost resources?</h4>
              <p>Do not clear browser site data. LocalStorage keeps all links per user.</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HelpPage;
