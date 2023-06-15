import React from 'react'

export default function ProductsItem({id,title,price,country,address,delete_product}) {
  return (
	  <div className='App'>
		 <span  className='x' onClick={() => delete_product(id)}>&#129699;&#9756;</span>
		  <p>Title: {title}</p>
		  <p>Price:{price} </p>
		  <p>Country:{country}</p>
		  <p> Address:{address.city} , {address.street} </p>
		 

	</div>
  )
}
