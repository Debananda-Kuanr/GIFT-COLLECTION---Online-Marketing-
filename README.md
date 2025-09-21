# Gift Collection — Online Marketing

<p align="center">
  <a href="https://gift.codenextlab.com" target="_blank">
    <img src="https://img.shields.io/badge/🚀 Live%20Demo-brightgreen?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo"/ width="200" height="150">
  </a>
</p>

A simple **HTML/CSS/JS** e-commerce website for showcasing and selling gifts online.  
When a user selects a product to buy, the **order summary** is automatically sent to the shop owner via **WhatsApp**.

---

## 📸 Preview
<img width="1918" height="908" alt="img1" src="https://github.com/user-attachments/assets/6f29b712-3e34-450a-acfd-419eab3a906b" />
<img width="1917" height="915" alt="img2" src="https://github.com/user-attachments/assets/eb07aef0-99f0-41e2-8c3b-9551ff9fe498" />
<img width="1918" height="913" alt="img3" src="https://github.com/user-attachments/assets/67bca59a-23bf-4027-9e33-70ea836eedea" />
<img width="1918" height="910" alt="img4" src="https://github.com/user-attachments/assets/a0081f01-6c0d-44bb-b52f-67cf0b2a974e" />
<img width="260" height="500" alt="img5" src="https://github.com/user-attachments/assets/de981771-23e2-4ead-a021-f8a8068ac1e3" />
<img width="257" height="497" alt="img6" src="https://github.com/user-attachments/assets/fcf40238-eb66-4ecb-a83b-274bf6d0ea71" />
<img width="260" height="496" alt="img7" src="https://github.com/user-attachments/assets/86015a07-4bf3-4ddb-ba3f-a37c446f9816" />

---

## 🚀 Features

- Responsive static website built with **HTML, CSS, JavaScript**  
- Product listing with images, price, and details  
- "Buy Now" button → sends **order details via WhatsApp**  
- Clean, modern UI  
- Works across all major browsers  

---

## 📂 Project Structure
codenextlab/<br>
├─ Asset/<br>
│ └─ asset/ # images, preview.png, product images etc.<br>
├─ index.html<br>
├─ Style.css<br>
└─ script.js<br>

---
## WhatsApp opens (web or app) with the message pre-filled and the owner receives the order summary.

This keeps the project 100% client-side — no server required.

---

## Quick example — HTML (index.html)

Add `data-*` attributes to each buy button (example):

```html
<!-- example product card -->
<div class="product">
<img src="Asset/asset/rose-teddy.jpg" alt="Rose Teddy" />
<h3 class="product-name">Rose Teddy</h3>
<p class="product-price">₹599</p>
<button class="buy-btn"
       data-name="Rose Teddy"
       data-price="599"
       data-qty="1">Buy Now</button>
</div>
```

---

## ⚙️ Example Script (script.js)

This script reads the product details and sends the order summary via WhatsApp.  
Replace `91XXXXXXXXXX` with your **WhatsApp number** (include country code, no `+` sign).  

```js
/* script.js - WhatsApp order sender */

document.addEventListener("DOMContentLoaded", () => {
  // Your WhatsApp number (e.g., 919876543210 for India)
  const ownerPhone = "91XXXXXXXXXX"; // <- CHANGE THIS

  // Attach event to all buy buttons
  const buyButtons = document.querySelectorAll(".buy-btn");

  buyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Get product info from data attributes
      const name = btn.dataset.name || "Product";
      const price = btn.dataset.price || "N/A";
      const qty = btn.dataset.qty || 1;

      const message = `
Hello, I would like to place an order:

Product: ${name}
Price: ₹${price}
Quantity: ${qty}

Website: https://gift.codenextlab.com
      `;

      // Encode message for WhatsApp URL
      const encoded = encodeURIComponent(message);

      // Open WhatsApp chat
      const url = `https://wa.me/${ownerPhone}?text=${encoded}`;
      window.open(url, "_blank");
    });
  });
});
```
---

##🚀 Usage

Clone the repo:
```
git clone https://github.com/Debananda-Kuanr/GIFT-COLLECTION---Online-Marketing-.git
```

---

## 🖥️ Deployment

Since this is a static site, you can deploy it easily to different hosting platforms:

- **[GitHub Pages](https://pages.github.com/)**  
  Push your project to a GitHub repository →  
  Go to **Settings > Pages** → Select `main` branch → Deploy.  

- **[Netlify](https://www.netlify.com/)**  
  Drag and drop your project folder into Netlify dashboard  
  or use the CLI:  
  ```bash
  npm install -g netlify-cli
  netlify deploy

---

## 📜 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

MIT License

Copyright (c) 2025 Codenextlab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

