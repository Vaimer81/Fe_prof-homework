import { useState } from "react";
import "./App.css";
import AddStudentForm from "./components/AddStudentForm";
import StudentContainer from "./components/StudentContainer";
import { student_data } from "./data/student";

function App() {
	const [student, setStudent] = useState(student_data);
	const delete_student = (id) => setStudent(student.filter((el) => el.id !== id));
	const add_student = (student_item) => setStudent([...student, student_item]);
	return (
    <div>
      <AddStudentForm add_student={add_student} />
      <StudentContainer student={student} delete_student={delete_student} />
    </div>
  );
}

export default App;
