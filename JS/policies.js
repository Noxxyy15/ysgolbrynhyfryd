// Policies page functionality

function togglePolicy(card) {
  const content = card.querySelector('.policy-content');
  const icon = card.querySelector('.expand-icon');
  
  // Close all other cards
  document.querySelectorAll('.policy-card').forEach(otherCard => {
    if (otherCard !== card) {
      const otherContent = otherCard.querySelector('.policy-content');
      const otherIcon = otherCard.querySelector('.expand-icon');
      otherContent.classList.remove('expanded');
      otherIcon.style.transform = 'rotate(0deg)';
    }
  });
  
  // Toggle current card
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    icon.style.transform = 'rotate(0deg)';
  } else {
    content.classList.add('expanded');
    icon.style.transform = 'rotate(180deg)';
  }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Handle any anchor links that might be added later
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Optional: Auto-expand policy if URL has hash
document.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash;
  if (hash) {
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      // Scroll to section
      targetSection.scrollIntoView({ behavior: 'smooth' });
      
      // If it's a policy card, expand it
      const policyCard = targetSection.closest('.policy-card');
      if (policyCard) {
        togglePolicy(policyCard);
      }
    }
  }
});