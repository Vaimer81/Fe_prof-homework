import { useState } from "react";
import "./App.css";
import ProductsContainer from "./components/ProductsContainer";

import { products } from "./data/products";

function App() {
	const [prod, setProd] = useState(products)
	const delete_product = (id) => setProd(prod.filter((el) => el.id !== id));

	return (
		<div>
			<ProductsContainer
				prod={prod}
				delete_product={delete_product}
			/>
		</div>
	)
}
export default App