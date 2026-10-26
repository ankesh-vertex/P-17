export default function StudentCard({ student, index }) {
  const initials = student.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const colors = ["mint", "violet", "blue", "coral"];
  const color = colors[index % colors.length];

  return (
    <article className={`student-card ${color}`}>
      <div className="card-top">
        <span className="student-number">
          STUDENT / {String(index + 1).padStart(2, "0")}
        </span>
        <span className="online-dot" title="Loaded from API" />
      </div>

      <div className="profile-row">
        <div className="avatar">{initials}</div>
        <div className="profile-info">
          <h2>{student.name}</h2>
          <p>@{student.username}</p>
        </div>
      </div>

      <div className="student-details">
        <div className="detail-row">
          <span className="detail-icon">✉</span>
          <div>
            <small>EMAIL ADDRESS</small>
            <p>{student.email}</p>
          </div>
        </div>

        <div className="detail-row">
          <span className="detail-icon">⌖</span>
          <div>
            <small>CAMPUS LOCATION</small>
            <p>{student.address.city}</p>
          </div>
        </div>

        <div className="detail-row">
          <span className="detail-icon">▤</span>
          <div>
            <small>ORGANIZATION</small>
            <p>{student.company.name}</p>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <span>STUDENT PROFILE</span>
        <span className="arrow-circle">↗</span>
      </div>
    </article>
  );
}