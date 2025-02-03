// Parallax Effect
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const parallaxSpeed = 0.3;
    document.querySelector('.hero-bg').style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
  });
  
  // Scroll Animations
  const productCards = document.querySelectorAll('.product-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  productCards.forEach(card => observer.observe(card));
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      // Find the closest product card
      const productCard = button.closest('.product-card');
      // Try to get the sample selector inside this product card
      const sampleSelect = productCard.querySelector('.sample-size');
      
      if (sampleSelect) {
        const selectedSample = sampleSelect.value;
        console.log('Adding product with sample size:', selectedSample);
        // Proceed to add to cart using selectedSample
      } else {
        console.log('No sample size selector found for this product.');
        // Proceed with default behavior or handle accordingly
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    // Select all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        // Get the ID of the main image to update
        const mainImageId = thumbnail.getAttribute('data-main-image');
        const mainImage = document.getElementById(mainImageId);
        
        // Update the main image with the clicked thumbnail's src and alt
        mainImage.src = thumbnail.src;
        mainImage.alt = thumbnail.alt;
      });
    });
  });
  