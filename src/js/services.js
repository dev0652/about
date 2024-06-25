export function getCurrentDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

export function sortArrayOfObjectsById(array, order) {
  if (!array) return;

  if (order !== 'ascending' && order !== 'descending')
    return console.error(
      'Invalid order key passed to function. Valid keys are "ascending" and "descending"'
    );

  const compareIds = (a, b) =>
    order === 'ascending' ? a.id - b.id : b.id - a.id;
  return array.sort(compareIds);
}
