
// Sample products
const products = [
    { id: 1, name: "დამტენი- bx51", price: 10, category: "ტელეფონის აქსესუარები", image: "https://www.borofone.com/wp-content/uploads/2020/12/borofone-bx51-triumph-charging-data-cable-for-lightning-package-white.jpg", link:"./id1.html"}, 
    { id: 2, name: "Product ", price: 10, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product ", price: 10, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 4, name: "აიფონი- bx54", price: 10, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 6, name: "ანდროიდი- bx54", price: 10, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 5, name: "მიკრო- bx54", price: 10, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150"},
    { id: 7, name: "აიფონი- bx87", price: 10, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 8, name: "ანდროიდი- bx87", price: 10, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 9, name: "მიკრო- bx87", price: 10, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Product ", price: 61, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 11, name: "Product ", price: 49, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 12, name: "Product ", price: 88, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 13, name: "Product ", price: 6, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 14, name: "Product ", price: 50, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 15, name: "Product ", price: 90, category: "ტელეფონის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 16, name: "Product ", price: 1, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 17, name: "Product ", price: 11, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 18, name: "Product ", price: 12, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 19, name: "Product ", price: 50, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 20, name: "Product ", price: 50, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 21, name: "Product ", price: 10, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 22, name: "Product ", price: 49, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 23, name: "Product ", price: 99, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 24, name: "Product ", price: 99, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 25, name: "Product ", price: 11, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 26, name: "Product ", price: 11, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 27, name: "Product ", price: 11, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 28, name: "Product ", price: 11, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 29, name: "Product ", price: 91, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 30, name: "Product ", price: 11, category: "მანქანის აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 31, name: "Product ", price: 11, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 32, name: "Product ", price: 11, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 33, name: "Product ", price: 100, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 34, name: "Product ", price: 11, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 35, name: "Product ", price: 11, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 36, name: "Product ", price: 11, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 37, name: "Product ", price: 12, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 38, name: "Product ", price: 11, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 39, name: "Product ", price: 11, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 40, name: "Product ", price: 21, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 41, name: "Product ", price: 51, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 42, name: "Product ", price: 31, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 43, name: "Product ", price: 41, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 44, name: "Product ", price: 41, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
    { id: 45, name: "Product ", price: 41, category: "ყურსასმენები და აუდიო აქსესუარები", image: "https://via.placeholder.com/150" },
  ];
  
  // Load products
  const productGrid = document.querySelector(".product-grid");
  
  function loadProducts(filter = null) {
    productGrid.innerHTML = "";
    let filteredProducts = products;
  
    // Apply filters
    if (filter) {
      const { categories, minPrice, maxPrice } = filter;
      filteredProducts = products.filter(product =>
        (categories.length === 0 || categories.includes(product.category)) &&
        product.price >= minPrice &&
        product.price <= maxPrice
      );
    }
  
    // Create product cards
    filteredProducts.forEach(product => {
      const productCard = document.createElement("a");
      productCard.className = "product-card";
      productCard.href = product.link;
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p class="price">₾${product.price}</p>
      `;
      productGrid.appendChild(productCard);
    });
  }
  
  // Handle filter button click
  document.getElementById("filterBtn").addEventListener("click", () => {
    const categories = Array.from(document.querySelectorAll(".sidebar input[type='checkbox']:checked"))
      .map(input => input.nextElementSibling.textContent);
    const minPrice = parseInt(document.getElementById("minPrice").value, 10) || 0;
    const maxPrice = parseInt(document.getElementById("maxPrice").value, 10) || Infinity;
  
    if (minPrice > maxPrice) {
      alert("Min price cannot be greater than Max price!");
      return;
    }
  
    loadProducts({ categories, minPrice, maxPrice });
  });
  
  // Initialize page
  loadProducts();
  let basketCount = 0;

  function addToBasket() {
    basketCount++;  // გაზრდი კალათის რაოდენობა
    document.getElementById("basketCount").textContent = basketCount;
  }
  
  // კალათაში პროდუქტის დამატება
  document.getElementById("addToBasketButton").addEventListener("click", addToBasket);
  