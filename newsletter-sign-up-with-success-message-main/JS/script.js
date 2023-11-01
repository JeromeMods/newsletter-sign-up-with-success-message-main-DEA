"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const containDiv = document.querySelector(".Contain");
  const subscribedDiv = document.querySelector(".subcribed");
  const subscribeForm = document.getElementById("subscribe-form");
  const dismissBtn = document.querySelector(".button.Dismis");

  // Add an event listener to the form
  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Hide the "Contain" div
    containDiv.style.display = "none";

    // Reveal the "subscribed" div
    subscribedDiv.style.display = "block";

    // Get the entered email
    const emailInput = document.getElementById("email");
    const enteredEmail = emailInput.value;

    // Update the email inside the <span>
    const emailSpan = document.querySelector(".subscribed-email");
    emailSpan.textContent = enteredEmail;

    // Clear the email input field
    emailInput.value = "";
  });

  // Add an event listener to the Dismiss button
  dismissBtn.addEventListener("click", function () {
    // Reset to the original state
    containDiv.style.display = "flex";
    subscribedDiv.style.display = "none";
  });
});


