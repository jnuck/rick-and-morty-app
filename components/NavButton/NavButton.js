// Prev + Next Button

export function NavButton(buttonContent, onClick) {
  const navButton = document.createElement("button");
  navButton.classList.add("button");
  navButton.textContent = buttonContent;

  navButton.addEventListener("click", onClick);

  return navButton;
}
