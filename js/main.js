const formEl = document.getElementById("contactForm");
if (formEl) {
  const submitBtn = formEl.querySelector('input[type="submit"]');

  formEl.addEventListener("submit", async (e) => {
    e.preventDefault(); // stoppa redirect
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
        headers: { Accept: "application/json" }, // krävs för /ajax
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
