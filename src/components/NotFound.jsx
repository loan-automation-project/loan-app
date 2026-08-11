import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
      <section style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '4rem', fontWeight: 700, margin: 0 }}>404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" style={{ fontWeight: 600 }}>Return to home</Link>
      </section>
    </main>
  );
}

export default NotFound;
