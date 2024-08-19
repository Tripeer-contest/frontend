import zustandStore from '../../../store/store.tsx';
import React from 'react';

const useRegisterBirthday = () => {
  const { r_setYear, r_setMonth, r_setDay } = zustandStore();

  const inputHandler =
    (setState: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const regex = /^\d*$/;

      if (regex.test(value)) {
        setState(value);
      }
    };

  const cancelHandler = () => {};

  const nextHandler = () => {};

  return {
    inputYearHandler: inputHandler(r_setYear),
    inputMonthHandler: inputHandler(r_setMonth),
    inputDayHandler: inputHandler(r_setDay),
    cancelHandler,
    nextHandler,
  };
};

export default useRegisterBirthday;
