export const getStringedDate = (targetDate) => {
  // targetDate에는 날짜 객체
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;

  let date = targetDate.getDate();
  // 9일 -> 09일 :
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
