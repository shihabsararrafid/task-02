const getDate = () => {
  const date = new Date();
  const today =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ).toDateString();
  const todayDate = newDate.split(" ");
  const finalDate = todayDate[2] + " " + todayDate[1] + " " + todayDate[3];
  return [finalDate];
};
export default getDate;
