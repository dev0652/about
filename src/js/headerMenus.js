import { refs } from '/js/refs';

// *********************************

export function onHeaderMenuToggle(event) {
  const menuName = event.target.dataset.menuName;

  const radios = refs[`${menuName}SwitcherRadios`];
  const dropdown = refs[`${menuName}SwitcherDropdown`];
  const checkboxLabel = refs[`${menuName}SwitcherCheckboxLabel`];
  const checkbox = refs[`${menuName}SwitcherCheckbox`];

  // Listen to clicks outside of a switcher menu while it is open:
  const method = event.target.checked
    ? 'addEventListener'
    : 'removeEventListener';
  document[method]('click', handleClicksOutsideMenu);

  // If clicked outside menu, close it
  function handleClicksOutsideMenu(event) {
    if (
      !dropdown.contains(event.target) &&
      !checkboxLabel.contains(event.target) &&
      !document.querySelector('.caption-toggle-label').contains(event.target)
    ) {
      document.removeEventListener('click', handleClicksOutsideMenu);
      checkbox.checked = false;
      checkbox.setAttribute('aria-expanded', false);

      radios.forEach((radio) => {
        radio.tabIndex = '-1'; // disables focus on radio buttons when menu is collapsed
      });
    }
  }

  // Make menu items keyboard-focusable when menu is shown and set aria-expanded attribute on the checkbox:
  if (event.target.checked) {
    radios.forEach((radio) => {
      radio.removeAttribute('tabIndex');
    });

    event.target.setAttribute('aria-expanded', false);
  } else {
    radios.forEach((radio) => {
      radio.tabIndex = '-1'; // disables focus on radio buttons when menu is collapsed
    });

    event.target.setAttribute('aria-expanded', false);
  }
}
