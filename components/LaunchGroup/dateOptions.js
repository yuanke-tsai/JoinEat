export const monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const daysInMonth = (month) => {
  const currentYear = new Date().getFullYear();
  if (month === 2) {
    return (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
      currentYear % 400 === 0
      ? 29
      : 28;
  }
  return new Date(currentYear, month, 0).getDate();
};
export const nowYear = new Date().getFullYear();
