import initExpandes from "./expandable.js";

initExpandes(false, true);

function copyNumber(index: number) {
  // Get the text field
  const copyText = document.querySelectorAll(".cart-number")[
    index
  ] as HTMLInputElement;

  navigator.clipboard
    .writeText(copyText.textContent || "")
    .then(() => {
      console.log("Text copied to clipboard successfully!");
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
}

const copyNumberToggle = document.querySelectorAll(".copy-number-toggle");

if (navigator.clipboard) {
  copyNumberToggle.forEach((toggle, index) => {
    toggle.addEventListener("click", () => {
      copyNumber(index);
    });
  });
}
