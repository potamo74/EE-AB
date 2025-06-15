document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Något gick fel. Försök igen senare.");
        }
        return response.json();
      })
      .then(data => {
        form.reset();
        showPopup("Tack för ditt meddelande!");
      })
      .catch(error => {
        console.error(error);
        showPopup("Meddelandet skickades ändå, men ett fel uppstod.");
      });
  });
  
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
  