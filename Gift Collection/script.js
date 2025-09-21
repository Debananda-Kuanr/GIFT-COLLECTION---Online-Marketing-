const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
    const navbar = document.getElementById("navbar");

    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });

    // Close mobile nav on link click
    document.querySelectorAll(".mobile-nav a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
      });
    });

    // Navbar shrink on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });


   document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-btn");
  const modal = document.getElementById("orderModal");
  const closeBtn = document.querySelector(".modal .close");
  const orderForm = document.getElementById("orderForm");

  let selectedProduct = {};

  // Open modal when Buy Now is clicked
  buyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");
      selectedProduct = {
        name: card.dataset.name,
        price: card.dataset.price
      };
      modal.style.display = "flex";
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Submit order to WhatsApp
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    const address = document.getElementById("userAddress").value;
    const phone = document.getElementById("userPhone").value;

    const message =
      `New Order:%0A` +
      `Product: ${selectedProduct.name}%0A` +
      `Price: ${selectedProduct.price}%0A` +
      `Customer: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Address: ${address}`;

    const whatsappNumber = "919439204006"; // change to your number
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(url, "_blank");
    modal.style.display = "none";
    orderForm.reset();
  });

  // Close if user clicks outside the modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});


function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateShopStatus() {
  const statusEl = document.getElementById("shopStatus");
  const countdownText = document.getElementById("countdownText");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentSecond = now.getSeconds();

  const openHour = 9;  // 9 AM
  const closeHour = 22; // 10 PM

  const nowInSeconds = currentHour * 3600 + currentMinute * 60 + currentSecond;
  const openInSeconds = openHour * 3600;
  const closeInSeconds = closeHour * 3600;

  let status, countdownSeconds, countdownLabel;

  if (nowInSeconds >= openInSeconds && nowInSeconds < closeInSeconds) {
    status = "Open";
    countdownLabel = "Time left until closing:";
    countdownSeconds = closeInSeconds - nowInSeconds;
  } else {
    status = "Closed";
    countdownLabel = "Time left until opening:";

    if (nowInSeconds < openInSeconds) {
      countdownSeconds = openInSeconds - nowInSeconds;
    } else {
      countdownSeconds = (24 * 3600 - nowInSeconds) + openInSeconds;
    }
  }

  statusEl.textContent = status;
  statusEl.classList.toggle("open", status === "Open");
  statusEl.classList.toggle("closed", status === "Closed");

  countdownText.textContent = countdownLabel;

  const hrs = Math.floor(countdownSeconds / 3600);
  const mins = Math.floor((countdownSeconds % 3600) / 60);
  const secs = countdownSeconds % 60;

  hoursEl.textContent = pad(hrs);
  minutesEl.textContent = pad(mins);
  secondsEl.textContent = pad(secs);
}

document.addEventListener("DOMContentLoaded", () => {
  updateShopStatus();
  setInterval(updateShopStatus, 1000);
});


