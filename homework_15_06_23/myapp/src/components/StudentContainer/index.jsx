import React from 'react'
import StudentItem from '../StudentItem';
import s from './index.module.css';

export default function StudentContainer({student,delete_student}) {
	return (
		<div className={s.student_container}>
			{student.map((el) => (
				<StudentItem key={el.id} {...el} delete_student={delete_student} />
			))}
		  
		</div>
	);
}
