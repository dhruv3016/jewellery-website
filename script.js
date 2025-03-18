// Function to filter products based on search input
function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const productList = document.getElementById('product-list');
    const products = productList.getElementsByClassName('product-card');
  
    for (let i = 0; i < products.length; i++) {
      const productName = products[i].getAttribute('data-name').toLowerCase();
  
      // Check if the product name contains the search query
      if (productName.includes(query)) {
        products[i].style.display = 'block'; // Show the product
      } else {
        products[i].style.display = 'none'; // Hide the product
      }
    }
  }
  let currentIndex = 0;

  function showBanner(index) {
    const banner = document.querySelector('.scroll-banner');
    const totalBanners = document.querySelectorAll('.banner-item').length;
  
    if (index < 0) {
      currentIndex = totalBanners - 1;
    } else if (index >= totalBanners) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
  
    banner.style.transform = `translateX(-${currentIndex * 1000}px)`;
  }
  
  function prevBanner() {
    showBanner(currentIndex - 1);
  }
  
  function nextBanner() {
    showBanner(currentIndex + 1);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    let wishlistCount = localStorage.getItem("wishlistCount") || 0;
    let cartCount = localStorage.getItem("cartCount") || 0;

    document.getElementById("wishlistCount").textContent = wishlistCount;
    document.getElementById("cartCount").textContent = cartCount;
});

