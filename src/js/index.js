// Write your code here...
import {Http} from './Http.js';
const container = document.querySelector('.list');
const total = document.querySelector('.total');
const product = document.querySelector('input[name=product]');
const price = document.querySelector('input[name=price]');
const addProductForm = document.querySelector('form[name=add-product]');
const addProductBtn = document.querySelector('button[name=addProductBtn]');

const Row = ({ product, price, id }) =>
  `<div class="product">
    <span class="prod-name">${product}</span>
    <span class="prod-cost">$${price}</span>
    <div class="delete-btn"><a href="#" name="delete-btn" data-id="${id}">X</a></div>
  </div>`;

const render = function (arr) {
  const elems = arr.map((e) => Row(e));
  const totalCost = arr.reduce((prev, curr) => prev + Number(curr.price), 0);

  container.innerHTML = elems.join('');
  total.innerHTML = Row({ product: 'TOTAL', price: totalCost });
};

const getData = (uri) =>
  {
    debugger;
    const http =new Http(uri);
    console.log(http);
    return http.get();
  }

  // const postData = (uri,product, price) =>
  // {
  //   debugger;
  //   const http =new Http(uri);
  //   console.log(http);
  //   console.log(`product:${product.value}, price:${price.value}`)
  //   let formData = {id:Math.random()*100, product:`${product.value}`, price:`${price.value()}`}
  //   return http.post(formData);
  // }

async function loadAndRender() {
  try {
    debugger;
    const products = await getData('http://localhost:3000/products');
    render(products);
  } catch {
    alert('There was an error talking to the server!');
  }
}

// addProductBtn.addEventListener('click', ()=> {
//   console.log(product.value);
//   postData('http://localhost:3000/products', product.value, price.value);
// }
//   )

loadAndRender();
