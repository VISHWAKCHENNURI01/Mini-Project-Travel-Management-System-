// JavaScript for Travel Management Website
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".bi-three-dots");
  const menuBox = document.querySelector("#menu_bx");
  const exploreButton = document.querySelector(
    "header .content .cont_bx button"
  );
  const subscribeButton = document.querySelector("footer .input button");
  const emailInput = document.querySelector("footer .input input");

  // Toggle mobile menu
  menuIcon.addEventListener("click", () => {
    menuBox.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });

  // Start your search button functionality
  exploreButton.addEventListener("click", () => {
    alert("Start exploring your travel destinations!");
    document.querySelector(".trip_bx .search_bx input[type='text']").focus();
  });

  // Subscribe button functionality
  subscribeButton.addEventListener("click", () => {
    const email = emailInput.value.trim();
    if (email === "") {
      alert("Please enter your email to subscribe.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Thank you for subscribing with ${email}!`);
      emailInput.value = ""; // Clear the input
    }
  });

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Search functionality for the travel search box
  const searchButton = document.querySelector(
    ".trip_bx .search_bx input[type='button']"
  );
  searchButton.addEventListener("click", () => {
    const location = document
      .querySelector(".trip_bx .search_bx .card:nth-child(1) input")
      .value.trim();
    const date = document
      .querySelector(".trip_bx .search_bx .card:nth-child(2) input")
      .value.trim();
    const people = document
      .querySelector(".trip_bx .search_bx .card:nth-child(3) input")
      .value.trim();

    if (!location || !date || !people) {
      alert("Please fill in all search fields to explore destinations.");
    } else {
      alert(`Searching trips for ${location} on ${date} for ${people} people.`);
    }
  });

  // Interactive "Heart" icons
  const heartIcons = document.querySelectorAll(".bi-heart-fill");
  heartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("active");
      const countSpan = icon.querySelector("span");
      let count = parseInt(countSpan.textContent);
      count = icon.classList.contains("active") ? count + 1 : count - 1;
      countSpan.textContent = count;
    });
  });

  const chatIcons = document.querySelectorAll(".bi-chat-fill");
  chatIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      alert("Open comments section (coming soon).");
    });
  });
});
