'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function (timesClicked = 0, timesShown = 0) {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    this.allProducts.push(new Product(productNames[i], timesClicked, timesShown));
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
}



AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  let getStoredProducts = localStorage.getItem('products');
  if (getStoredProducts) {
    let products = JSON.parse(getStoredProducts);
    this.instantiateProducts(products.timesClicked, products.timesShown);
  } else {
    this.instantiateProducts();
  }
};


function Product(name, timesClicked = 0, timesShown = 0) {
  this.name = name;
  this.source = `assets/${name}.jpg`;
  this.timesClicked = timesClicked;
  this.timesShown = timesShown;
}
