
export default function StudentList() {
  const students = [
    { name: "Nithya", marks: 78 },
    { name: "Surya", marks: 45 },
    { name: "Arun", marks: 61 },
    { name: "Priya", marks: 32 },
  ];

  return (
    <div>
      <h2>Mini Project 1: Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li
            key={index}
            style={{
              color: student.marks > 50 ? "green" : "red",
              fontWeight: student.marks > 50 ? "bold" : "normal",
            }}
          >
            {student.name} - {student.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}