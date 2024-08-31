import { DateInfo } from '../types/PlanTypes';
import { v4 as makeId } from 'uuid';

const local = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
const koreaTime = new Date(local);

// 년, 월, 일 추출
export const getCurrentDate = () => {
  const currentYear = koreaTime.getFullYear();
  const currentMonth = koreaTime.getMonth(); // 월은 0부터 시작하므로 UI에 나타날때는 +1 필요
  const currentDay = koreaTime.getDate();
  const currentHours = koreaTime.getHours();
  const currentMinutes = koreaTime.getMinutes();
  return {
    currentYear,
    currentMonth,
    currentDay,
    currentHours,
    currentMinutes,
  };
};

const compareWithToday = (date: Date) => {
  const compareYear = date.getFullYear();
  const compareMonth = date.getMonth();
  const compareDate = date.getDate();
  const nowYear = koreaTime.getFullYear();
  const nowMonth = koreaTime.getMonth();
  const nowDate = koreaTime.getDate();
  if (
    compareYear < nowYear ||
    (compareYear === nowYear && compareMonth < nowMonth) ||
    (compareYear === nowYear &&
      compareMonth === nowMonth &&
      compareDate < nowDate)
  ) {
    return true;
  }
  return false;
};

export const isEqualDate = (targetDate: Date, date: Date) => {
  return targetDate.getFullYear() === date.getFullYear() &&
    targetDate.getMonth() === date.getMonth() &&
    targetDate.getDate() === date.getDate()
    ? true
    : false;
};

// 첫주에 포함되는 지난날 표시
const createMonthPrevDays = (year: number, month: number) => {
  const monthPrevDayList: DateInfo[] = [];
  const monthFirstDay = new Date(year, month, 1).getDay();
  for (let day = 0; day < monthFirstDay; day++) {
    const prev = new Date(year, month, day - monthFirstDay + 1);
    const prevDate = prev.getDate();
    const prevDay = prev.getDay();
    monthPrevDayList.push({
      id: makeId(),
      day: prevDay,
      date: prevDate,
      style: 'prev',
    });
  }
  return monthPrevDayList;
};

// 이번 달에 포함되는 날짜 표시
const createCurrentMonthDays = (year: number, month: number) => {
  const monthCurrentDayList: DateInfo[] = [];
  const monthLastDate = new Date(year, month + 1, 0).getDate();
  for (let currentDate = 1; currentDate <= monthLastDate; currentDate++) {
    const current = new Date(year, month, currentDate);
    const currentDay = current.getDay();
    if (compareWithToday(current)) {
      monthCurrentDayList.push({
        id: makeId(),
        day: currentDay,
        date: currentDate,
        style: 'prev',
      });
    } else {
      monthCurrentDayList.push({
        id: makeId(),
        day: currentDay,
        date: currentDate,
        style: 'current',
      });
    }
  }
  return monthCurrentDayList;
};

export const createMonthDayList = (year: number, month: number) => {
  const monthDayList: DateInfo[] = [
    ...createMonthPrevDays(year, month),
    ...createCurrentMonthDays(year, month),
  ];
  return monthDayList;
};

const week = ['일', '월', '화', '수', '목', '금', '토'];

export const makeDayToFullString = (day: string) => {
  const dayInfo = day.split('-');
  let result = '';
  result += dayInfo[1].replace(/^0+/, '') + '월 ';
  result += dayInfo[2].replace(/^0+/, '') + '일';
  result += `(${week[new Date(day).getDay()]})`;
  return result;
};

export const makeDayToFullYearString = (day: string) => {
  const dayInfo = day.split('-');
  let result = '';
  result += dayInfo[0].replace(/^0+/, '').substring(2) + '년 ';
  result += dayInfo[1].replace(/^0+/, '') + '월 ';
  result += dayInfo[2].replace(/^0+/, '') + '일';
  result += `(${week[new Date(day).getDay()]})`;
  return result;
};

export const makeDayToDotFullString = (day: string) => {
  const dayInfo = day.split('-');
  let result = '';
  result += dayInfo[0].slice(2) + '.';
  result += dayInfo[1] + '.';
  result += dayInfo[2];
  result += `(${week[new Date(day).getDay()]})`;
  return result;
};

export const getCorrectlyNow = () => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  const parts = formatter.formatToParts(new Date());
  const currentYear = parts.find((part) => part.type === 'year')?.value;
  const currentMonth = parts.find((part) => part.type === 'month')?.value;
  const currentDay = parts.find((part) => part.type === 'day')?.value;
  const currentHours = parts.find((part) => part.type === 'hour')?.value;
  const currentMinutes = parts.find((part) => part.type === 'minute')?.value;
  return {
    currentYear,
    currentMonth,
    currentDay,
    currentHours,
    currentMinutes,
  };
};
