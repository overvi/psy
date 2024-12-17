function showTab(tabId: string) {
  // Hide all tabs
  const panels = document.querySelectorAll(
    '[role="tabpanel"]'
  ) as NodeListOf<HTMLDivElement>;

  panels.forEach((panel) => {
    panel.classList.add("hidden");

    panel.setAttribute("aria-hidden", "true");
  });

  // Show the selected tab
  const selectedPanel = document.getElementById(tabId) as HTMLElement;
  selectedPanel.classList.remove("hidden");

  selectedPanel.setAttribute("aria-hidden", "false");

  // Update the selected tab
  const buttons = document.querySelectorAll('[role="tab"]');
  buttons.forEach((button) => {
    button.setAttribute("aria-selected", "false");
    button.classList.remove("bg-white");
  });

  const selectedButton = document.querySelector(
    `[aria-controls="${tabId}"]`
  ) as HTMLElement;
  selectedButton.setAttribute("aria-selected", "true");
  selectedButton.classList.add("bg-white");

  if (window.innerWidth < 950) {
    toggleSidebarFn();
  }
}

const tabToggles = document.querySelector(".tab-toggles") as HTMLElement;

tabToggles.addEventListener("click", (e) => {
  const event = e.target as HTMLElement;

  const tabButton = event.closest(".tab-toggle");

  if (tabButton) {
    showTab(tabButton.getAttribute("aria-controls")!);
  }
});

const toggles = document.querySelectorAll(
  ".expand-toggle"
) as NodeListOf<HTMLElement>;

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    const content = document.getElementById(
      toggle.getAttribute("aria-controls")!
    ) as HTMLElement;

    // Toggle aria-expanded
    toggle.setAttribute("aria-expanded", `${!isExpanded}`);

    if (
      !isExpanded &&
      !toggle.parentElement?.classList.contains("read-message")
    ) {
      toggle.parentElement!.classList.add("read-message");
    }

    // Show or hide the content
    content.classList.toggle("hidden");
  });
});

const openModalButton = document.getElementById("open-modal") as HTMLElement;
const modal = document.getElementById("modal") as HTMLElement;
const closeModalButton = document.getElementById("close-modal") as HTMLElement;

const focusableElementsSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
let lastFocusedElement: any | null = null;

// Function to trap focus
function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    focusableElementsSelector
  ) as NodeListOf<any>;
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        // Shift+Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

// Function to open modal
function openModal() {
  lastFocusedElement = document.activeElement;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  trapFocus(modal);
  modal.querySelector(focusableElementsSelector as any)!.focus();
}

// Function to close modal
function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  lastFocusedElement!.focus();
}

// Event listeners
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

const toggleSidebarFn = () => {
  sidebar?.classList.toggle("hidden");
};

const toggleSidebar = document.querySelectorAll(".toggle-sidebar");
const sidebar = document.getElementById("sidebar");

toggleSidebar.forEach((toggle) => {
  toggle?.addEventListener("click", () => {
    toggleSidebarFn();
  });
});
