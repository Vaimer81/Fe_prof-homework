const products = [
  {
    id: 1,
    title: 'Apple',
    price: 100,
    in_stock: true,
    photo: 'https://calorizator.ru/sites/default/files/imagecache/product_512/product/apple-1.jpg'
  },
  {
    id: 2,
    title: 'Orange',
    price: 200,
    in_stock: false,
    photo: 'https://i5.walmartimages.ca/images/Enlarge/234/6_r/6000191272346_R.jpg'
  },
  {
    id: 3,
    title: 'Kiwi',
    price: 150,
    in_stock: true,
    photo: 'https://static.libertyprim.com/files/familles/kiwi-large.jpg?1569271790'
  },
  {
    id: 4,
    title: 'Banana',
    price: 300,
    in_stock: false,
    photo: 'https://images.heb.com/is/image/HEBGrocery/000377497'
  },
  {
    id: 5,
    title: 'Pineapple',
    price: 400,
    in_stock: false,
    photo: 'https://img.freepik.com/free-photo/pineapple_144627-22187.jpg?w=2000'
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
  