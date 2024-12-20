document.querySelectorAll(".select-wrapper").forEach((wrapper) => {
  const select = wrapper.querySelector(".select") as HTMLSelectElement;
  const toggleButton = wrapper.querySelector(".select-toggle")!;

  const updateToggle = () => {
    toggleButton.children[0].classList.toggle("rotate-180");
  };

  select.addEventListener("click", updateToggle);
});
