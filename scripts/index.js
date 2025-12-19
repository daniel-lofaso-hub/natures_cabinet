const products = [
  {
    name: "Ocean + Salt Soap",
    price: "$7",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Lavender Soap",
    price: "$7",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Oatmeal Soap",
    price: "$7",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Activated Charcoal & Peppermint Soap",
    price: "$7",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Turmeric & Black Pepper Soap",
    price: "$7",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

const productsTemplate = document
  .querySelector("#products-template")
  .content.querySelector(".products__card");

const productsList = document.querySelector(".products__list");

function getProductsElement(data) {
  const productsElement = productsTemplate.cloneNode(true);
  const productsNameEl = productsElement.querySelector(".products__name");
  const productsPriceEl = productsElement.querySelector(".products__price");
  const productsImageEl = productsElement.querySelector(".products__image");

  productsImageEl.src = data.link;
  productsImageEl.alt = data.name;
  productsNameEl.textContent = data.name;
  productsPriceEl.textContent = data.price;

  return productsElement;
}

products.forEach(function (item) {
  const productsElement = getProductsElement(item);
  productsList.append(productsElement);
});
