document.addEventListener("DOMContentLoaded", function () {
  const range = document.getElementById("connectRange");
  const progress = document.getElementById("sliderProgress");
  const percentage = document.getElementById("sliderPercentage");
  const sliderText = document.getElementById("sliderText");

  const contactCard = document.getElementById("contactCard");
  const eyebrow = document.getElementById("contactEyebrow");
  const title = document.getElementById("contactTitle");
  const description = document.getElementById("contactDescription");

  // Stop safely if the slider is not found.
  if (!range) return;

  function updateSlider() {
    const value = Number(range.value);

    // Update percentage.
    if (percentage) {
      percentage.textContent = value + "%";
    }

    // Update progress bar.
    if (progress) {
      progress.style.width = value + "%";
    }

    // Remove previous state classes.
    if (contactCard) {
      contactCard.classList.remove(
        "slider-start",
        "slider-middle",
        "slider-ready",
        "slider-complete",
      );
    }

    // 0%–34%
    if (value < 35) {
      if (contactCard) {
        contactCard.classList.add("slider-start");
      }

      if (sliderText) {
        sliderText.textContent = "Slide to connect";
      }

      if (eyebrow) {
        eyebrow.textContent = "LET'S CONNECT";
      }

      if (title) {
        title.innerHTML = "Have a project or<br>opportunity in mind?";
      }

      if (description) {
        description.textContent =
          "I'm open to digital marketing opportunities, freelance projects and collaborations across SEO, analytics, paid media and creative content.";
      }

      return;
    }

    // 35%–79%
    if (value < 80) {
      if (contactCard) {
        contactCard.classList.add("slider-middle");
      }

      if (sliderText) {
        sliderText.textContent = "Keep sliding";
      }

      if (eyebrow) {
        eyebrow.textContent = "AVAILABLE FOR OPPORTUNITIES";
      }

      if (title) {
        title.innerHTML = "Looking for a digital<br>marketing specialist?";
      }

      if (description) {
        description.textContent =
          "I'm available for opportunities across digital marketing, SEO, analytics, Meta Ads, social media and performance marketing.";
      }

      return;
    }

    // 80%–99%
    if (value < 100) {
      if (contactCard) {
        contactCard.classList.add("slider-ready");
      }

      if (sliderText) {
        sliderText.textContent = "Almost there";
      }

      if (eyebrow) {
        eyebrow.textContent = "LET'S WORK TOGETHER";
      }

      if (title) {
        title.innerHTML = "Ready to build something<br>that performs?";
      }

      if (description) {
        description.textContent =
          "Have a project, role or collaboration in mind? Connect with me through email, LinkedIn or WhatsApp.";
      }

      return;
    }

    // 100%
    if (contactCard) {
      contactCard.classList.add("slider-complete");
    }

    if (sliderText) {
      sliderText.textContent = "Ready to connect";
    }

    if (eyebrow) {
      eyebrow.textContent = "LET'S WORK TOGETHER";
    }

    if (title) {
      title.innerHTML = "Let's create measurable<br>digital growth.";
    }

    if (description) {
      description.textContent =
        "I'm ready to discuss your next digital marketing project, collaboration or career opportunity.";
    }
  }

  // Update while the slider moves.
  range.addEventListener("input", updateSlider);

  // Set the correct initial state.
  updateSlider();
});
