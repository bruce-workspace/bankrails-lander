// BankRails landing page — vanilla JS

// ─── WAITLIST FORM HANDLER ─────────────────────────────────────────────────
// HubSpot form placeholder: when form ID is ready, replace this function
// with the HubSpot embed script targeting #hubspot-form-hero / #hubspot-form-bottom
// Segment: bankrails-waitlist

function handleWaitlist(event, source) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form.querySelector('input[type="email"]');
  const email = emailInput ? emailInput.value.trim() : '';

  if (!email) return;

  // Disable form while submitting
  const btn = form.querySelector('button[type="submit"]');
  const originalBtnText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="mono">submitting...</span>';
  }

  // TODO: replace with actual HubSpot form submission
  // HubSpot form ID: TBD
  // List segment: bankrails-waitlist
  // Example HubSpot endpoint:
  //   https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}
  console.log(`[BankRails] Waitlist signup from ${source}: ${email}`);

  setTimeout(() => {
    // Replace form with success message
    const successEl = document.createElement('div');
    successEl.className = 'form-success';
    successEl.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.2"/>
        <path d="M5 8l2 2 4-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>you're on the list — we'll be in touch.</span>
    `;
    form.replaceWith(successEl);
  }, 600);
}

// ─── SCROLL ANIMATIONS ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.glass-card, .step, .section-headline, .section-subhead').forEach((el) => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

  // Stagger bento cards
  document.querySelectorAll('.bento-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 60}ms`;
  });

  // Stagger problem cards
  document.querySelectorAll('.problem-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
});

// ─── STYLES FOR SCROLL ANIMATIONS ────────────────────────────────────────
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
  .fade-up {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(fadeStyle);

// ─── NAV SCROLL HIGHLIGHT ─────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(13,13,15,0.95)';
  } else {
    nav.style.background = 'rgba(13,13,15,0.80)';
  }
}, { passive: true });
