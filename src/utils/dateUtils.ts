//TODO: refactor to use dayjs
const currentDate = new Date();
const date = `${currentDate.getDate()}/${
  currentDate.getMonth() + 1
}/${currentDate.getFullYear()}`;
const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

export { date, time };
