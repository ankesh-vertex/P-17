import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
  if (students.length === 0) {
    return <div className="empty-state">No student records found.</div>;
  }

  return (
    <div className="student-grid">
      {students.map((student, index) => (
        <StudentCard
          key={student.id}
          student={student}
          index={index}
        />
      ))}
    </div>
  );
}