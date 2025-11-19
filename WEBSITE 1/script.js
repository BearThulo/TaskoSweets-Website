// Select all accordion buttons
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    
    // Toggle active style
    btn.classList.toggle("active");

    // Select the panel right after the button
    const panel = btn.nextElementSibling;

    // Expand or collapse
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
