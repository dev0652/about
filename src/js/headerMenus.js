import { refs } from '/js/refs';

export function onHeaderMenuToggle(event) {
  const menuName = event.target.dataset.menuName;

  const dropdown = getRef('MenuDropdown');
  const checkboxLabel = getRef('MenuCheckboxLabel');
  const checkbox = getRef('MenuCheckbox');
  const menuInputs = getRef('MenuInputs');

  const method = event.target.checked ? 'add' : 'remove';
  document[`${method}EventListener`]('click', handleClicksOutsideMenu);

  if (event.target.checked) {
    enableKeyboardFocus(menuInputs);
    event.target.setAttribute('aria-expanded', true);
  } else {
    disableKeyboardFocus(menuInputs);
    event.target.setAttribute('aria-expanded', false);
  }

  function getRef(name) {
    return refs[`${menuName}${name}`];
  }

  function handleClicksOutsideMenu(event) {
    if (
      !dropdown.contains(event.target) &&
      !checkboxLabel.contains(event.target) &&
      !document.querySelector('.caption-toggle-label').contains(event.target)
    )
      closeMenu();
  }

  function closeMenu() {
    document.removeEventListener('click', handleClicksOutsideMenu);
    checkbox.checked = false;
    checkbox.setAttribute('aria-expanded', false);

    disableKeyboardFocus(menuInputs);
  }
}

function disableKeyboardFocus(items) {
  items.forEach(item => {
    item.tabIndex = '-1';
  });
}

function enableKeyboardFocus(items) {
  items.forEach(item => {
    item.removeAttribute('tabIndex');
  });
}
