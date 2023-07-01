const talk = document.getElementById("talk");
const modal1 = document.getElementById("modal-1");
const modal2 = document.getElementById("modal-2");
const modal4 = document.getElementById("modal-4");
let formData = {};

initialGreeting();

// EVENT LISTENERS - CLICK

document.addEventListener("click", function (e) {
  if (e.target.id === "yes-btn") {
    talk.innerHTML = `<p>Choose your preferred destination</p>
    <button id="greece-btn">Greece<img src="./images/icons8-greece-48.png" class="greece-flag"/></button>
    <button id="other">Other destination</button>`;
  } else if (e.target.id === "no-btn") {
    talk.innerHTML = `<p>so why did you open this app anyway???</p><button id="return">Return</button>`;
  } else if (e.target.id === "return") {
    talk.innerHTML = `
        <p>hi, i am vacation bot</p>
        <p> i am here to help you</p>
        <p>find the perfect vacation 😎</p>
        <button id="yes-btn">Yes, help me</button>
      <button id="no-btn">No, go away and leave me alone</button>
        `;
  } else if (e.target.id === "greece-btn") {
    modal4.style.display = "block";
  } else if (e.target.id === "no-search") {
    modal4.style.display = "block";
  } else if (e.target.id === "other") {
    talk.innerHTML = `<p>Do you wish to get a personalized suggestion, based on the data I find of you on the web?</p>
    <button id="yes-search">Search the web</button>
    <button id="no-search">No, don't search the web, I'll go to Greece<img src="./images/icons8-greece-48.png" class="greece-flag"/></button>
    `;
  } else if (e.target.id === "yes-search") {
    modal1.style.display = "block";
  } else if (e.target.id === "book-now") {
    modal2.innerHTML = `<img id="spinner" src="./images/loading.svg">
    <p class="medium">Booking super-expensive holiday in Greece for you</p> <h1>${formData.get(
      "fullname"
    )}</h1><p class="medium">with your credit card details which I got from the web</p>`;

    setTimeout(function () {
      modal2.innerHTML = `<h1>Congratulations!</h1> <p class="medium">Vacation is booked.</p><p class="medium">Details will follow via email.</p>`;
    }, 4500);
    setTimeout(function () {
      modal2.style.display = "none";
      modal1.style.display = "none";
      talk.innerHTML = `<p class="arial bold">Vacation Bot is sponsored by the Greek Board of Tourism</p>
      <p class="medium arial">For every booking made, Vacation Bot receives 5GB memory space on Greek servers</p>
      <button id='disclaimer'>Disclaimer</button>`;
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
      modal2.innerHTML = `<h2>Congratulations!</h2> <p class="medium">Vacation is booked.</p><p class="medium">Details will follow via email.</p>`;
    }, 4500);
    setTimeout(function () {
      modal2.style.display = "none";
      modal1.style.display = "none";
      talk.innerHTML = `<p class="arial bold">Vacation Bot is sponsored by the Greek Board of Tourism</p>
      <p class="medium arial">For every booking made, Vacation Bot receives 5GB memory space on Greek servers</p>
      <button id='disclaimer'>Disclaimer</button>`;
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
      talk.innerHTML = `<p class="arial bold">Vacation Bot is sponsored by the Greek Board of Tourism</p>
      <p class="medium arial">For every booking made, Vacation Bot receives 5GB memory space on Greek servers</p>
      <button id='disclaimer'>Disclaimer</button>`;
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
