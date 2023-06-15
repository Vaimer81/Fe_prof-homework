import React from 'react'
import ProductsItem from './ProductsItem'

export default function ProductsContainer({prod, delete_product }) {
  return (
	 <div>
      {
			  prod.map((el) => 
				 < ProductsItem 
					  key={el.id} {...el} 
					  delete_product={delete_product} />)
      }
	  </div>
	  
  )
}
