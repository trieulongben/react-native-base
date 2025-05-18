function convertToJSDate(timeStr: string) {
  // Get the current date
  const today = new Date();
  const [time, modifier] = timeStr.split(' '); // Split into time and AM/PM
  let [hours, minutes] = time.split(':').map(Number); // Split hours and minutes and convert to numbers

  // Convert 12-hour time to 24-hour time
  if (modifier === 'PM' && hours !== 12) {
    hours += 12;
  }
  if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }

  // Set the time to the current date
  today.setHours(hours, minutes, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
  return today;
}

function convertDateToTimeString(date: Date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, make it 12

  // Format minutes to always have two digits
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;

  // Return the formatted time string
  return `${hours}:${minutesStr} ${ampm}`;
}

function extractTimeComponents(date: Date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, make it 12

  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;

  // Format minutes to always have two digits
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return {
    hours: hoursStr,
    minutes: minutesStr,
    ampm: ampm,
  };
}
export {convertToJSDate, convertDateToTimeString, extractTimeComponents};
