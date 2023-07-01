import { texts } from "./data.js";

const talk = document.getElementById("talk");
const modal1 = document.getElementById("modal-1");
const modal2 = document.getElementById("modal-2");
const modal4 = document.getElementById("modal-4");
let formData = {};

initialGreeting();

// EVENT LISTENERS - CLICK

document.addEventListener("click", function (e) {
  if (e.target.id === "yes-btn") {
    talk.innerHTML = `${texts.preferredDestination}`;
  } else if (e.target.id === "no-btn") {
    talk.innerHTML = `<p>so why did you open this app anyway???</p><button id="return">Return</button>`;
  } else if (e.target.id === "return") {
    talk.innerHTML = `
        ${texts.initialText}
        `;
  } else if (e.target.id === "greece-btn") {
    modal4.style.display = "block";
  } else if (e.target.id === "no-search") {
    modal4.style.display = "block";
  } else if (e.target.id === "other") {
    talk.innerHTML = `
    ${texts.personalSuggestion}
    `;
  } else if (e.target.id === "yes-search") {
    modal1.style.display = "block";
  } else if (e.target.id === "book-now") {
    modal2.innerHTML = `<img id="spinner" src="./images/loading.svg">
    <p class="medium">Booking super-expensive holiday in Greece for you</p> <h1>${formData.get(
      "fullname"
    )}</h1><p class="medium">with your credit card details which I got from the web</p>`;

    setTimeout(function () {
      modal2.innerHTML = `${texts.congrats}`;
    }, 4500);
    setTimeout(function () {
      modal2.style.display = "none";
      modal1.style.display = "none";
      talk.innerHTML = `${texts.sponsored}`;
    }, 9000);
  } else if (e.target.id === "disclaimer") {
    document.getElementById("modal-3").style.display = "block";
  } else if (e.target.id === "start-again") {
    this.location.reload();
  } else if (e.target.id === "no-book") {
    modal2.innerHTML = `<img id="spinner" src="./images/loading.svg">
    <p class="medium">Booking super-expensive holiday in Greece for you</p> <h1>${formData.get(
      "fullname"
    )}</h1><p class="medium">with your credit card details which I got from the web</p>`;

    setTimeout(function () {
      modal2.innerHTML = `${texts.congrats}`;
    }, 4500);
    setTimeout(function () {
      modal2.style.display = "none";
      modal1.style.display = "none";
      talk.innerHTML = `${texts.sponsored}`;
    }, 9000);
  }
});

// EVENT LISTENERS - MOUSEENTER

document
  .getElementById("decline-btn")
  .addEventListener("mouseenter", function () {
    document.getElementById("button-container").classList.toggle("reverse");
  });

document.addEventListener("mouseover", function (e) {
  if (e.target.id === "no-book") {
    document.getElementById("no-book").textContent = "BOOK !!!!";
  }
});

document.addEventListener("mouseout", function (e) {
  if (e.target.id === "no-book") {
    document.getElementById("no-book").textContent = "Don't book";
  }
});

// EVENT LISTENERS - SUBMIT
document
  .getElementById("booking-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    modal4.innerHTML = `<h2>Congratulations!</h2> <p class="medium">Vacation is booked at an exorbitant price.</p><p class="medium">Details will follow via email.</p>`;
    setTimeout(function () {
      modal4.style.display = "none";
      talk.innerHTML = `${texts.sponsored}`;
    }, 3000);
  });

document.getElementById("form").addEventListener("submit", function (e) {
  const searches = document.getElementById("searches");

  e.preventDefault();
  formData = new FormData(document.getElementById("form"));

  modal2.style.display = "block";
  setTimeout(function () {
    searches.innerHTML = `<p class="medium">browser history</p>`;
  }, 1500);
  setTimeout(function () {
    searches.innerHTML += `<p class="medium">recent google searches</p>`;
  }, 3000);
  setTimeout(function () {
    searches.innerHTML += `<p class="medium">amazon/ebay purchases</p>`;
  }, 4500);
  setTimeout(function () {
    searches.innerHTML += `<p class="medium">social media</p>`;
  }, 6000);
  setTimeout(function () {
    searches.innerHTML += `<p class="medium">emails</p>`;
  }, 7500);
  setTimeout(function () {
    modal2.innerHTML = `<p>Based on the analized information, your perfect holiday destination is: </p>`;
  }, 9000);
  setTimeout(function () {
    modal2.innerHTML += `<p><strong>Greece</strong><img src="./images/icons8-greece-96.png" class="greece-flag-big"></p>`;
  }, 12000);
  setTimeout(function () {
    modal2.innerHTML += `<button class="form-btn book-btn" id="book-now">Book now</button>
    <button class="form-btn book-btn" id="no-book">Don't book</button>`;
  }, 13000);
});

// INITIAL GREETING

function initialGreeting() {
  setTimeout(function () {
    talk.innerHTML = `
        <p>hi, i am vacation bot</p>`;
  }, 500);

  setTimeout(function () {
    talk.innerHTML += `
        <p> i am here to help you</p>`;
  }, 2000);

  setTimeout(function () {
    talk.innerHTML += `
        <p>find the perfect vacation 😎</p>`;
  }, 3500);

  setTimeout(function () {
    talk.innerHTML += `
      <button id="yes-btn">Yes, help me</button>
      <button id="no-btn">No, go away and leave me alone</button>
      `;
  }, 5000);
}
