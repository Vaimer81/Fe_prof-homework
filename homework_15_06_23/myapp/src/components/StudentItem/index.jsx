import React from 'react'
import s from './index.module.css'

export default function StudentItem({ userId, id, title, completed, delete_student }) {
	const item_styles = { color: completed === true ? 'green' : 'blue' }

	
  return (
	  <div className={s.Student_item}
	  >
		  <span
			  className={s.cross}
        onClick={() => delete_student(id)} 
			  
		  >x&#9756;</span>
		  <p>UserId:{userId}</p>
		  <p>Id:{id}</p>
		  <p>Title:{title}</p>
		  <p className={s.completed}style={item_styles}>Completed:{completed}</p>
	</div>
  )
}
