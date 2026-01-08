const products = [
  {
    name: "Ocean + Salt Soap",
    description: "Clean & Refreshing",
    ingredients:
      "Ingredients: water, glycerin, sorbitol, organic olive oil, organic coconut oil, stearic acid, sodium cocoamphacetate, cocamidopropyl betaine, sodium hydroxide, sodium chloride, tetrasodium glutamate diacetate, citric acid, organic indigo powder, organic essential oil blend (coconut, bergamot, fir, patchouli, ginger, lemon, rhododendron, lime, orange, cedarwood, vetiver)",
    link: "https://i.ibb.co/7JMSXnjb/Ocean-Salt.jpg",
  },
  {
    name: "Lavender Soap",
    description: "Moisturizing & Calming",
    ingredients:
      "Ingredients: water, glycerine, sorbitol, organic olive oil, organic coconut oil, stearic acid, shea butter, isoamyl laurate, sodium hydroxide, oat protein, titanium dioxide, sodium chloride, tetrasodium glutamate diacetate, citric acid, organic lavender essential oil, home-grown lavender",
    link: "https://i.ibb.co/B26npSwx/Lavender.jpg",
  },
  {
    name: "Oatmeal Soap",
    description: "For sensitive skin",
    ingredients:
      "Ingredients: water, glycerine, sorbitol, organic olive oil, organic coconut oil, stearic acid, shea butter, isoamyl laurate, sodium hydroxide, oat protein, titanium dioxide, sodium chloride, tetrasodium glutamate diacetate, citric acid, organic oats, coconut extract",
    link: "https://i.ibb.co/BVX7R2cv/Oatmeal.jpg",
  },
  {
    name: "Activated Charcoal & Peppermint Soap",
    description: "Deep cleansing",
    ingredients:
      "Ingredients: water, glycerine, sorbitol, organic olive oil, organic coconut oil, stearic acid, shea butter, isoamyl laurate, sodium hydroxide, oat protein, titanium dioxide, sodium chloride, tetrasodium glutamate diacetate, citric acid, organic peppermint essential oil, activated charcoal",
    link: "https://i.ibb.co/PZR3cGCn/Charcoal-Peppermint.jpg",
  },
  {
    name: "Turmeric & Black Pepper Soap",
    description: "Good for acne",
    ingredients:
      "Ingredients: water, glycerine, sorbitol, organic olive oil, organic coconut oil, stearic acid, shea butter, isoamyl laurate, sodium hydroxide, oat protein, titanium dioxide, sodium chloride, tetrasodium glutamate diacetate, citric acid, organic turmeric powder, turmeric extract, black pepper extract",
    link: "https://i.ibb.co/rfxSg2yL/Turmeric-Acne-Soap.png",
  },
];

const productsTemplate = document
  .querySelector("#products-template")
  .content.querySelector(".products__card");

const productsList = document.querySelector(".products__list");

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");
const previewCaption2El = previewModal.querySelector(".modal__caption2");
const previewCaption3El = previewModal.querySelector(".modal__caption3");
const previewDescrEl = previewModal.querySelector(".modal__description");

const modals = document.querySelectorAll(".modal");

function getProductsElement(data) {
  const productsElement = productsTemplate.cloneNode(true);
  const productsNameEl = productsElement.querySelector(".products__name");
  const productsImageEl = productsElement.querySelector(".products__image");

  productsImageEl.src = data.link;
  productsImageEl.alt = data.name;
  productsNameEl.textContent = data.name;

  productsImageEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    previewCaption2El.textContent = data.description;
    previewCaption3El.textContent = data.ingredients;
    openModal(previewModal);
  });

  return productsElement;
}

products.forEach(function (item) {
  const productsElement = getProductsElement(item);
  productsList.append(productsElement);
});

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const currentModal = document.querySelector(".modal_is-opened");
    closeModal(currentModal);
  }
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscapeKey);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

modals.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeModal(modal);
    }
  });
});
