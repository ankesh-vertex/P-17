import { useEffect, useState } from "react";
import StudentList from "./Components/StudentList";

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch student records.");
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
        setError("");
      })
      .catch(() => {
        setError("Could not load records. Please check your internet.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">S<span>+</span></div>
          <span>STUDY<span className="brand-light">SPACE</span></span>
        </div>
        <span className="live-label">
          <span className="live-dot" /> LIVE DIRECTORY
        </span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">CAMPUS MANAGEMENT / 2026</span>
          <h1>
            Every student.
            <br />
            <span>One bright future.</span>
          </h1>
          <p>
            Your campus community, beautifully organized.
            Explore student profiles fetched directly from the API.
          </p>
          <div className="hero-actions">
            <span className="hero-pill">✦ Student Directory</span>
            <span className="hero-pill">↗ API Connected</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-center">S</div>
          <div className="art-bubble bubble-one">✦</div>
          <div className="art-bubble bubble-two">01</div>
          <div className="art-bubble bubble-three">+</div>
        </div>
      </section>

      <section className="directory-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">YOUR COMMUNITY</span>
            <h2>Student directory<span>.</span></h2>
            <p>All profiles in one place, ready to explore.</p>
          </div>

          <div className="count-box">
            <span>REGISTERED</span>
            <strong>{loading ? "—" : students.length}</strong>
            <small>Student records</small>
          </div>
        </div>

        {loading ? (
          <div className="status-panel">
            <div className="loader" />
            <h3>Gathering student profiles...</h3>
            <p>Connecting to the campus directory.</p>
          </div>
        ) : error ? (
          <div className="status-panel error-panel">
            <h3>Something went wrong</h3>
            <p>{error}</p>
            <button
              className="retry-button"
              onClick={() => window.location.reload()}
            >
              Try again ↻
            </button>
          </div>
        ) : (
          <StudentList students={students} />
        )}
      </section>

      <footer className="footer">
        <span>STUDYSPACE © 2026</span>
        <span>BUILT WITH REACT <span className="footer-star">✦</span></span>
      </footer>
    </main>
  );
}