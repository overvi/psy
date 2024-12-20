export default function initExpandes(
  keepOpen: boolean,
  closeAllBefore: boolean
) {
  const toggles = document.querySelectorAll(
    ".expand-toggle"
  ) as NodeListOf<HTMLElement>;

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      const content = document.getElementById(
        toggle.getAttribute("aria-controls")!
      ) as HTMLElement;

      // Close all if closeAllBefore is true
      if (closeAllBefore) {
        toggles.forEach((otherToggle) => {
          if (otherToggle !== toggle) {
            const otherContent = document.getElementById(
              otherToggle.getAttribute("aria-controls")!
            ) as HTMLElement;
            otherToggle.setAttribute("aria-expanded", "false");
            otherContent.classList.add("hidden");
            otherToggle.parentElement?.classList.remove("read-message");
          }
        });
      }

      // Toggle aria-expanded for the clicked toggle
      toggle.setAttribute("aria-expanded", `${!isExpanded}`);

      if (
        !isExpanded &&
        !toggle.parentElement?.classList.contains("read-message")
      ) {
        toggle.parentElement!.classList.add("read-message");
      }

      if (isExpanded && !keepOpen) {
        toggle.parentElement!.classList.remove("read-message");
      }

      // Show or hide the content
      content.classList.toggle("hidden");
    });
  });
}
