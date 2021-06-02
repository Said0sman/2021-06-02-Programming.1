const data = [
  {
    id: 0,
    order: 0,
    titel: "Den nya världsfotbollen",
    img: "./den-nya-letldsfotbollen.jpg",
    name: "Erik Niva",
    pris: 59,
    itemInCart: false,
  },
  {
    id: 1,
    order: 0,
    titel: "blågult",
    img: "./blagult.jpg",
    name: "Jesper Högström",
    pris: 216,
    itemInCart: false,
  },
  {
    id: 2,
    order: 0,
    titel: "Hälsa på recept",
    img: "./recept.jpg",
    name: "Anders Hansen",
    pris: 179,
    itemInCart: false,
  },
  {
    id: 3,
    order: 0,
    titel: "Den goda livet",
    img: "./det.goda.livet.jpg",
    name: "Tareq Taylor, Sara Ask",
    pris: 168,
    itemInCart: false,
  },
];

let detail = document.getElementsByClassName("card-item");
let friFrakt = document.getElementById("fri-frakt");
let addToCarts = document.getElementById("#add-to-cart");
let cart = document.getElementById("cart");
let update = document.getElementById("none")

cart.addEventListener("click", displayCart);
update.addEventListener("click", displayCart);

let home = document.getElementById("logo");

home.addEventListener("click", hideCart);


document.getElementById("add-to-cart0").addEventListener("click", () => {
  alert("Den nya världsfotbollen finns nu på din kundvagn");
});

document.getElementById("add-to-cart1").addEventListener("click", () => {
  alert("Blågult finns nu på din kundvagn");
});

document.getElementById("add-to-cart2").addEventListener("click", () => {
  alert("Hälsa på recept finns nu på din kundvagn");
});

document.getElementById("add-to-cart3").addEventListener("click", () => {
  alert("Det goda livet finns nu på din kundvagn");
});

function hideCart() {
  document.getElementById("main").style.display = "block";
  document.getElementById("cart-container").style.display = "none";
}

function displayCart() {
  document.querySelector("main").style.display = "none";
  document.getElementById("cart-container").style.display = "block";
  if (
    data[0].order === 0 &&
    data[1].order === 0 &&
    data[2].order === 0 &&
    data[3].order === 0
  ) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  } else {
    document.getElementById("empty-cart").style.display = "none";
    document.getElementById("cart-with-items").style.display = "block";
  }
}

/////////////////// Adding

function addBook1ToCart() {
  console.log("addBook1ToCart");
  data[0].order += 1;
  console.log(data[0].order);
  fillInformationAboutBook0InCart();
}

function addBook2ToCart() {
  console.log("addBook2ToCart");
  data[1].order += 1;
  console.log(data[1].order);
  fillInformationAboutBook1InCart();
}

function addBook3ToCart() {
  console.log("addBook3ToCart");
  data[2].order += 1;
  console.log(data[2].order);
  fillInformationAboutBook2InCart();
}

function addBook4ToCart() {
  console.log("addBook4ToCart");
  data[3].order += 1;
  console.log(data[3].order);
  fillInformationAboutBook3InCart();
}

////////////// Removes

function removeOneBook1FromCart() {
  console.log("removeOneBook1FromCart");
  data[0].order -= 1;
  if (data[0].order < 0) {
    data[0].order = 0;
  }
  console.log(data[0].order);
  fillInformationAboutBook0InCart();
}

function removeOneBook2FromCart() {
  console.log("removeOneBook2FromCart");
  data[1].order -= 1;
  if (data[1].order < 0) {
    data[1].order = 0;
  }
  console.log(data[1].order);
  fillInformationAboutBook1InCart();
}

function removeOneBook3FromCart() {
  console.log("removeOneBook3FromCart");
  data[2].order -= 1;
  if (data[2].order < 0) {
    data[2].order = 0;
  }
  console.log(data[2].order);
  fillInformationAboutBook2InCart();
}

function removeOneBook4FromCart() {
  console.log("removeOneBook4FromCart");
  data[3].order -= 1;
  if (data[3].order < 0) {
    data[3].order = 0;
  }
  console.log(data[3].order);
  fillInformationAboutBook3InCart();
}

function calculateTotalForBok(index) {
  return data[index].order * data[index].pris;
}

function fillInformationAboutBook0InCart() {
  document.getElementById("fotboll").innerText = data[0].titel;
  document.getElementById("antal").innerText = data[0].order;
  document.getElementById("name").innerText = data[0].name;
  document.getElementById("kr-per-bok").innerText = data[0].pris;
  document.getElementById("kr-0").innerText = calculateTotalForBok(0);
  document.getElementById("total-order").innerText =
    calculateTotalForBok(0) +
    calculateTotalForBok(1) +
    calculateTotalForBok(2) +
    calculateTotalForBok(3) +
    " kr";

  if (
    calculateTotalForBok(0) >= 159 ||
    calculateTotalForBok(1) >= 159 ||
    calculateTotalForBok(2) >= 159 ||
    calculateTotalForBok(3) >= 159
  ) {
    document.getElementById("fri-frakt").innerText = "Du har fri frakt!";
  } else if (
    calculateTotalForBok(0) < 159 ||
    calculateTotalForBok(1) < 159 ||
    calculateTotalForBok(2) < 159 ||
    calculateTotalForBok(3) < 159
  ) {
    document.getElementById("fri-frakt").innerText = "Fri frakt över 159kr";
  }
}

function fillInformationAboutBook1InCart() {
  document.getElementById("fotboll-1").innerText = data[1].titel;
  document.getElementById("antal-1").innerText = data[1].order;
  document.getElementById("name-1").innerText = data[1].name;
  document.getElementById("kr-per-bok-1").innerText = data[1].pris;
  document.getElementById("kr-1").innerText = calculateTotalForBok(1);
  document.getElementById("total-order").innerText =
    calculateTotalForBok(0) +
    calculateTotalForBok(1) +
    calculateTotalForBok(2) +
    calculateTotalForBok(3) +
    " kr";
  if (
    calculateTotalForBok(0) >= 159 ||
    calculateTotalForBok(1) >= 159 ||
    calculateTotalForBok(2) >= 159 ||
    calculateTotalForBok(3) >= 159
  ) {
    document.getElementById("fri-frakt").innerText = "Du har fri frakt!";
  } else if (
    calculateTotalForBok(0) < 159 ||
    calculateTotalForBok(1) < 159 ||
    calculateTotalForBok(2) < 159 ||
    calculateTotalForBok(3) < 159
  ) {
    document.getElementById("fri-frakt").innerText = "Fri frakt över 159kr";
  }
}

function fillInformationAboutBook2InCart() {
  document.getElementById("fotboll-2").innerText = data[2].titel;
  document.getElementById("antal-2").innerText = data[2].order;
  document.getElementById("name-2").innerText = data[2].name;
  document.getElementById("kr-per-bok-2").innerText = data[2].pris;
  document.getElementById("kr-2").innerText = calculateTotalForBok(2);
  document.getElementById("total-order").innerText =
    calculateTotalForBok(0) +
    calculateTotalForBok(1) +
    calculateTotalForBok(2) +
    calculateTotalForBok(3) +
    " kr";
  if (
    calculateTotalForBok(0) >= 159 ||
    calculateTotalForBok(1) >= 159 ||
    calculateTotalForBok(2) >= 159 ||
    calculateTotalForBok(3) >= 159
  ) {
    document.getElementById("fri-frakt").innerText = "Du har fri frakt!";
  } else if (
    calculateTotalForBok(0) < 159 ||
    calculateTotalForBok(1) < 159 ||
    calculateTotalForBok(2) < 159 ||
    calculateTotalForBok(3) < 159
  ) {
    document.getElementById("fri-frakt").innerText = "Fri frakt över 159kr";
  }
}

function fillInformationAboutBook3InCart() {
  document.getElementById("fotboll-3").innerText = data[3].titel;
  document.getElementById("antal-3").innerText = data[3].order;
  document.getElementById("name-3").innerText = data[3].name;
  document.getElementById("kr-per-bok-3").innerText = data[3].pris;
  document.getElementById("kr-3").innerText = calculateTotalForBok(3);
  document.getElementById("total-order").innerText =
    calculateTotalForBok(0) +
    calculateTotalForBok(1) +
    calculateTotalForBok(2) +
    calculateTotalForBok(3) +
    " kr";
  if (
    calculateTotalForBok(0) >= 159 ||
    calculateTotalForBok(1) >= 159 ||
    calculateTotalForBok(2) >= 159 ||
    calculateTotalForBok(3) >= 159
  ) {
    document.getElementById("fri-frakt").innerText = "Du har fri frakt!";
  } else if (
    calculateTotalForBok(0) < 159 ||
    calculateTotalForBok(1) < 159 ||
    calculateTotalForBok(2) < 159 ||
    calculateTotalForBok(3) < 159
  ) {
    document.getElementById("fri-frakt").innerText = "Fri frakt över 159kr";
  }
};