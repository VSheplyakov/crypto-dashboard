const currentDate = new Date();
const date = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

export { date, time };
