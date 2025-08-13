const formEl = document.getElementById("contactForm");

// Om inget formulär hittas, gör inget
if (formEl) {
  const submitBtn = formEl.querySelector('input[type="submit"]');

  // 1) INTE AJAX-läge: när action INTE innehåller "/ajax/"
  if (!formEl.action.includes("/ajax/")) {
    formEl.addEventListener("submit", () => {
      if (submitBtn) {
        submitBtn.dataset.originalText = submitBtn.value;
        submitBtn.value = "Skickar...";
        submitBtn.disabled = true;
      }
      // Låt webbläsaren posta formuläret som vanligt
    });

    // Om användaren navigerar tillbaka 
    window.addEventListener("pageshow", () => {
      if (submitBtn && submitBtn.disabled) {
        submitBtn.disabled = false;
        submitBtn.value = submitBtn.dataset.originalText || "Skicka";
      }
    });
  }

  // 2) AJAX-läge: om jag ska ancända de sen
  else {
    formEl.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(formEl);
      try {
        if (submitBtn) {
          submitBtn.dataset.originalText = submitBtn.value;
          submitBtn.value = "Skickar...";
          submitBtn.disabled = true;
        }

        const res = await fetch(formEl.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });

        const payload = await res.json().catch(() => ({}));

        if (!res.ok || payload.success === false) {
          const msg = payload.message || payload.errors?.[0] || `Fel ${res.status}`;
          showPopup(msg);
          return;
        }

        formEl.reset();
        showPopup("Tack! Ditt meddelande är skickat.");
      } catch (err) {
        console.error(err);
        showPopup("Nätverksfel – försök igen.");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.value = submitBtn.dataset.originalText || "Skicka";
        }
      }
    });
  }
}

// Popup för Ajax
function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "slide-popup show";
  popup.innerText = message;
  document.body.appendChild(popup);
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => document.body.removeChild(popup), 500);
  }, 4000);
}
