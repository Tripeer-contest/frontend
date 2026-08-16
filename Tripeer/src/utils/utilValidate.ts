const yearCheck = (year: string) => {
  const currentYear = new Date().getFullYear();
  const parseYear = parseInt(year, 10);

  return parseYear > 1920 && parseYear <= currentYear && year.length === 4;
};

const monthCheck = (month: string, setMonth: (param: string) => void) => {
  const parseMonth = parseInt(month, 10);

  if (parseMonth >= 1 && parseMonth <= 12) {
    if (month.length === 1) {
      setMonth('0' + month);
    }
    return true;
  }
  return false;
};

const dayCheck = (day: string, setDay: (param: string) => void) => {
  const parseDay = parseInt(day, 10);

  if (parseDay >= 1 && parseDay <= 31) {
    if (day.length === 1) {
      setDay('0' + day);
    }
    return true;
  }
  return false;
};

const isValidDate = (year: number, month: number, day: number): boolean => {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

export { dayCheck, monthCheck, yearCheck, isValidDate };
