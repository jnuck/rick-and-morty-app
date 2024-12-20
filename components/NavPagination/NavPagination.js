export function NavPagination() {
  const navPage = document.createElement("span");
  navPage.classList.add("navigation__pagination");
  navPage.textContent = "1 / 42";

  return navPage;
}
