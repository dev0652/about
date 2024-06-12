import { refs } from '/js/refs';

export function onHeaderMenuToggle(event) {
  const menuName = event.target.dataset.menuName;

  const dropdown = refs[`${menuName}MenuDropdown`];
  const checkboxLabel = refs[`${menuName}MenuCheckboxLabel`];
  const checkbox = refs[`${menuName}MenuCheckbox`];

  const menuInputs = refs[`${menuName}MenuInputs`];

  // Listen to clicks outside of a switcher menu while it is open:
  const method = event.target.checked
    ? 'addEventListener'
    : 'removeEventListener';
  document[method]('click', handleClicksOutsideMenu);

  // Close the menu on an outside click
  function handleClicksOutsideMenu(event) {
    if (
      !dropdown.contains(event.target) &&
      !checkboxLabel.contains(event.target) &&
      !document.querySelector('.caption-toggle-label').contains(event.target)
    )
      closeMenu();
  }

  // Close the menu on menuitem click
  function closeMenu() {
    document.removeEventListener('click', handleClicksOutsideMenu);
    checkbox.checked = false;
    checkbox.setAttribute('aria-expanded', false);

    menuInputs.forEach(input => {
      input.tabIndex = '-1'; // disables focus on input buttons when menu is collapsed
    });
  }

  // Make menu items keyboard-focusable when menu is shown and set aria-expanded attribute on the checkbox:
  if (event.target.checked) {
    menuInputs.forEach(input => {
      input.removeAttribute('tabIndex');
    });

    event.target.setAttribute('aria-expanded', false);
  } else {
    menuInputs.forEach(input => {
      input.tabIndex = '-1'; // disables focus on input buttons when menu is collapsed
    });

    event.target.setAttribute('aria-expanded', false);
  }
}
