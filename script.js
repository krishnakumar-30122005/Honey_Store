document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".btn");
  const scrollContainer = document.querySelector(".shop-content");

  scrollButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Scroll button clicked!");
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Scroll button functionality (your existing code)
  const scrollButton = document.querySelector(".btn");
  const scrollContainer = document.querySelector(".shop-content");

  scrollButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Scroll button clicked!");
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });

  // Cart functionality
  let cart = [];

  const cartIcon = document.getElementById('cart-icon');
  const cartPopup = document.getElementById('cart-popup');
  const cartItemsList = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');

  // Toggle cart popup visibility on cart icon click
  cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    cartPopup.classList.toggle('hidden');
    updateCartUI();
  });

  // Close cart popup on close button click
  closeCartBtn.addEventListener('click', () => {
    cartPopup.classList.add('hidden');
  });

  // Add to cart buttons - expects buttons with class 'add-cart-btn' and data attributes
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = btn.getAttribute('data-name');
      const price = parseFloat(btn.getAttribute('data-price'));

      cart.push({ name, price });
      alert(`${name} added to cart`);
      updateCartUI();
    });
  });

  // Update cart UI
  function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
      cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
    } else {
      cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.innerHTML = `
          ${item.name} - ₹${item.price.toFixed(2)} 
          <button onclick="removeFromCart(${index})" title="Remove item">×</button>
        `;
        cartItemsList.appendChild(li);
      });
    }

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
  }

  // Remove item from cart (expose globally)
  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
  };

  // Checkout button
  checkoutBtn.addEventListener('click', () => {
    if(cart.length === 0){
      alert("Your cart is empty!");
      return;
    }
    alert(`Thank you for your order! Total: ₹${cartTotal.textContent}`);
    cart = [];
    updateCartUI();
    cartPopup.classList.add('hidden');
  });
});
