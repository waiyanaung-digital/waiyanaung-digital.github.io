document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("contactSlider");
  const contactCard = document.getElementById("contactCard");
  const contactStatus = document.getElementById("contactStatus");
  const contactMessage = document.getElementById("contactMessage");
  const sliderValue = document.getElementById("sliderValue");

  if (!slider || !contactCard) return;

  function updateContactSlider() {
    const value = Number(slider.value);

    // Update percentage
    if (sliderValue) {
      sliderValue.textContent = `${value}%`;
    }

    // Update slider progress
    slider.style.setProperty("--slider-progress", `${value}%`);

    // Remove previous state classes
    contactCard.classList.remove(
      "slider-start",
      "slider-middle",
      "slider-ready",
      "slider-complete",
    );

    if (value < 35) {
      contactCard.classList.add("slider-start");

      if (contactStatus) {
        contactStatus.textContent = "LET'S CONNECT";
      }

      if (contactMessage) {
        contactMessage.textContent =
          "Slide to explore opportunities to work together.";
      }
    } else if (value < 80) {
      contactCard.classList.add("slider-middle");

      if (contactStatus) {
        contactStatus.textContent = "AVAILABLE FOR OPPORTUNITIES";
      }

      if (contactMessage) {
        contactMessage.textContent =
          "Open to digital marketing, SEO, analytics and performance marketing opportunities.";
      }
    } else if (value < 100) {
      contactCard.classList.add("slider-ready");

      if (contactStatus) {
        contactStatus.textContent = "LET'S WORK TOGETHER";
      }

      if (contactMessage) {
        contactMessage.textContent =
          "Have a project or opportunity in mind? Let's connect.";
      }
    } else {
      contactCard.classList.add("slider-complete");

      if (contactStatus) {
        contactStatus.textContent = "LET'S WORK TOGETHER";
      }

      if (contactMessage) {
        contactMessage.textContent =
          "I'm ready to discuss your next digital marketing project or opportunity.";
      }
    }
  }

  slider.addEventListener("input", updateContactSlider);

  updateContactSlider();
});
