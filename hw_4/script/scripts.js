const products = [
    {
      id: 1,
      title: 'Apple',
      price: 100,
      in_stock: true
    },
    {
      id: 2,
      title: 'Orange',
      price: 200,
      in_stock: false
    },
    {
      id: 3,
      title: 'Kiwi',
      price: 150,
      in_stock: true
    },
    {
      id: 4,
      title: 'Banana',
      price: 300,
      in_stock: false
    }
  ]

  function createProductCard(product) {
    const productCard = `
      <div class="product-card" style="background-color: ${product.in_stock ? 'green' : 'gray'};">
        <h2>${product.title}</h2>
        <p>$${product.price}</p>
      </div>
    `;
    return productCard;
  }
  
  const productCards = products.map(createProductCard).join('');
  const container = document.createElement('div');
  container.innerHTML = productCards;
  document.querySelector('body').appendChild(container);