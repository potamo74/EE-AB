document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    try {
      const response = await fetch(this.action, {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      if (response.ok) {
        const popup = document.getElementById("popupMessage");
        popup.classList.add("show");
        setTimeout(() => popup.classList.remove("show"), 4000);
        this.reset();
      } else {
        alert("Något gick fel. Försök igen.");
      }
    } catch (error) {
      alert("Fel vid anslutning. Försök igen senare.");
    }
  });
  