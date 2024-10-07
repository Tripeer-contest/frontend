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
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dateParts = day.split(' ')[0].split('-'); // YYYY-MM-DD 부분
  const timeParts = day.split(' ')[1]
    ? day.split(' ')[1].split(':')
    : ['00', '00', '00']; // HH:mm:ss 부분, 없으면 기본값으로 00:00:00

  // new Date를 사용하여 날짜 객체 생성
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; // 월은 0부터 시작하므로 1을 빼야 함
  const dayOfMonth = parseInt(dateParts[2], 10);
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  const seconds = parseInt(timeParts[2], 10);

  const date = new Date(year, month, dayOfMonth, hours, minutes, seconds);

  let result = '';
  result += date.getFullYear().toString().substring(2) + '년 '; // 연도에서 0 제거 후 두 자리로 변환
  result += date.getMonth() + 1 + '월 '; // 월
  result += date.getDate() + '일 '; // 일
  result += `(${week[date.getDay()]})`; // 요일

  return result;
};

export const makeDayToDotFullString = (day: string) => {
  const dayInfo = day.split('-');
  let result = '';

  // 일자가 한 자리수일 경우 0을 붙여줍니다.
  const year = dayInfo[0].slice(2); // 연도
  const month = dayInfo[1].padStart(2, '0'); // 월을 2자리로
  const date = dayInfo[2].padStart(2, '0'); // 일을 2자리로

  result += year + '.';
  result += month + '.';
  result += date;
  result += `(${week[new Date(day).getDay()]})`;

  return result;
};

export const makeDateToString = (day: string) => {
  const date = new Date(day);
  return (
    date.getFullYear() +
    '년 ' +
    (date.getMonth() + 1) +
    '월 ' +
    date.getDate() +
    '일'
  );
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
    hour12: true,
  });

  const parts = formatter.formatToParts(new Date());
  const currentYear = parts.find((part) => part.type === 'year')?.value;
  const currentMonth = parts.find((part) => part.type === 'month')?.value;
  const currentDay = parts.find((part) => part.type === 'day')?.value;
  const currentHours = parts.find((part) => part.type === 'hour')?.value;
  const currentMinutes = parts.find((part) => part.type === 'minute')?.value;
  const currentPeriod = parts.find((part) => part.type === 'dayPeriod')?.value;
  return {
    currentYear,
    currentMonth,
    currentDay,
    currentHours,
    currentMinutes,
    currentPeriod,
  };
};

export const getChatDateString = (
  year: string,
  month: string,
  day: string,
  hours: string,
  minutes: string,
  amOrPm: string,
) => {
  const date = new Date(year + '-' + month + '-' + day);
  const result = compareWithToday(date);
  const ampmStr = amOrPm === 'AM' ? '오전' : '오후';
  return result
    ? `${year}년 ${month}월 ${day}일 ${ampmStr} ${hours}:${minutes}`
    : `${ampmStr} ${hours}:${minutes}`;
};
export function daysAgo(date: string) {
  const now = new Date();
  const given = new Date(date);
  const differ = now.getTime() - given.getTime();
  const result = Math.floor(differ / (1000 * 3600 * 24));
  if (result > 11) return makeDateToString(date);
  return result + '일 전';
}

// 날짜 추가
export function addDays(dateStr: string, daysToAdd: number): string {
  // 문자열을 분리하여 연도, 월, 일을 얻음
  const [year, month, day] = dateStr.split('-').map(Number);

  // Date 객체 생성 (연도는 2000년대를 기준으로 해석)
  const date = new Date(2000 + year, month - 1, day); // month는 0부터 시작

  // 주어진 일 수만큼 날짜 증가
  date.setDate(date.getDate() + daysToAdd);

  // 새로운 날짜를 "YY-M-D" 형식으로 반환
  const newYear = date.getFullYear() - 2000; // 2000년 기준으로 연도 처리
  const newMonth = date.getMonth() + 1; // 0부터 시작하므로 +1
  const newDay = date.getDate();

  // 숫자를 문자열로 변환해 다시 합침
  return `${newYear}-${newMonth}-${newDay}`;
}
