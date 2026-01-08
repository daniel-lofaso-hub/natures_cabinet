const products = [
  {
    name: "Ocean + Salt Soap",
    price: "$7",
    link: "https://i.ibb.co/7JMSXnjb/Ocean-Salt.jpg",
  },
  {
    name: "Lavender Soap",
    price: "$7",
    link: "https://i.ibb.co/B26npSwx/Lavender.jpg",
  },
  {
    name: "Oatmeal Soap",
    price: "$7",
    link: "https://i.ibb.co/BVX7R2cv/Oatmeal.jpg",
  },
  {
    name: "Activated Charcoal & Peppermint Soap",
    price: "$7",
    link: "https://i.ibb.co/PZR3cGCn/Charcoal-Peppermint.jpg",
  },
  {
    name: "Turmeric & Black Pepper Soap",
    price: "$7",
    link: "https://i.ibb.co/rfxSg2yL/Turmeric-Acne-Soap.png",
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
