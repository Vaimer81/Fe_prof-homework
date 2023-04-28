


// #CATEGORY_FLEX_BLOCK

const category_flex_block = document.querySelector('#category_flex_block');

const categories_flex_data = [
  {
    id: 1,
    category: "Women's",
    img: 'media/category_women.png'
  },
  {
    id: 2,
    category: "Men's",
    img: 'media/category_men.png'
  },
  {
    id: 3,
    category: "Kids'",
    img: 'media/category_child.png'
  }
]


categories_flex_data.forEach(({category, img}) => {
  const cardElem = document.createElement('div');
  const imgELem = document.createElement('div');
  const categoryElem = document.createElement('p');

  categoryElem.innerText = category;
  cardElem.classList.add('category_card')

  imgELem.style.backgroundImage = `url('${img}')`;

  cardElem.append(imgELem, categoryElem);
  category_flex_block.append(cardElem);
});

// #NEW_ARRIVALS_BLOCK

const new_arrivals_container = document.querySelector('.new_arrivals_container');
const new_arrivals_data = [
    {
      id: 1,
      img: 'media/cap.png',
      title: 'Black and white sport cap',
      price: '15.00'
    },
    {
      id: 2,
      img: 'media/glasses.png',
      title: 'Metal bridge sunglasses',
      price: '20.00'
    },
    {
      id: 3,
      img: 'media/body.png',
      title: 'Green baby romper',
      price: '18.95'
    },
    {
      id: 4,
      img: 'media/pants.png',
      title: 'Mid-rise slim cropped fit jeans',
      price: '15.99'
    },
    {
      id: 5,
      img: 'media/ears_rings.png',
      title: 'Red dangle earrings',
      price: '45.30'
    },
    {
      id: 6,
      img: 'media/child_shoes.png',
      title: 'Baby shoes with laces',
      price: '77.54'
    }
  ]
  new_arrivals_data.forEach(({ img, title, price }) => {
    const cardElem = document.createElement('div');
    const imgELem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const heartElem = document.createElement('p');
  
    imgELem.style.backgroundImage = `url('${img}')`;
    cardElem.classList.add('new_arrival_card');
    heartElem.classList.add('fa-regular');
    heartElem.classList.add('fa-heart');
    heartElem.classList.add('heartElem');
    titleElem.classList.add('new_arrival_title');
    priceElem.classList.add('new_arrival_price');
   
    heartElem.addEventListener('click', () => heartElem.classList.toggle('liked'));
  
    titleElem.innerText = title;
    priceElem.innerText = `$${price}`;
  
    imgELem.append(heartElem);
    cardElem.append(imgELem, titleElem, priceElem);
    new_arrivals_container.append(cardElem);
  });


  //GRID_BANNERS_BLOCK

  const grid_banners_block = document.querySelector('#grid_banners_block');

  const grid_banners_data = [
    {
      id: 1, 
      back_img: 'media/b1.png',
      sub_title: 'Summer Collections',
      title: 'Sale Up to 70%',
      btn: 'Explore new prices'
    },
    {
      id: 2, 
      back_img: 'media/b2.png',
      sub_title: 'Deal of the week',
      title: 'Stay Warm With Our New Sweaters',
      btn: 'Shop now'
    },
    {
      id: 3, 
      back_img: 'media/b3.png',
      sub_title: 'New collection',
      title: 'Shoes & Bags autumn / winter 2020',
      btn: 'See offers'
    },
    {
      id: 4, 
      back_img: 'media/b4.png',
      sub_title: 'For All new Email Subscribers',
      title: 'Get 5% Off & Free Delivery'
    }
  ]

grid_banners_data.forEach(({back_img,}) => {
  const cardElem = document.createElement('div');

  cardElem.style.backgroundImage = `url('${back_img}')`;
  grid_banners_block.append(cardElem);
 
});