/**
 * Edge Light — Installation Landing Page Interactivity
 * Features:
 * - Single-open FAQ accordion behavior
 * - Instant download toast notifications & feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initDownloadFeedback();
});

/* ─── FAQ Accordion (Single-Open Focus) ───────────────────────────── */
function initFAQ() {
  const allDetails = document.querySelectorAll('.faq-accordion details');
  allDetails.forEach((targetDetail) => {
    targetDetail.addEventListener('click', (e) => {
      // If clicking summary, close other open items for clean aesthetic
      if (e.target.closest('summary')) {
        allDetails.forEach((otherDetail) => {
          if (otherDetail !== targetDetail && otherDetail.hasAttribute('open')) {
            otherDetail.removeAttribute('open');
          }
        });
      }
    });
  });
}

/* ─── Download Toast & Feedback ─────────────────────────────────── */
function initDownloadFeedback() {
  const downloadButtons = document.querySelectorAll('a[download]');
  downloadButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const fileName = btn.getAttribute('download') || 'Edge Light';
      showToast(`Starting download for ${fileName}...`);
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('landingToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'landingToast';
    toast.style.position = 'fixed';
    toast.style.bottom = '28px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    toast.style.backgroundColor = 'rgba(18, 20, 29, 0.92)';
    toast.style.border = '1px solid rgba(255, 178, 102, 0.4)';
    toast.style.color = '#ffffff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '999px';
    toast.style.fontSize = '14px';
    toast.style.fontWeight = '500';
    toast.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 178, 102, 0.2)';
    toast.style.backdropFilter = 'blur(12px)';
    toast.style.zIndex = '9999';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)';
    toast.style.pointerEvents = 'none';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '8px';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span style="color:#ffb266">✨</span> ${message}`;
  
  // Trigger animation
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3500);
}
