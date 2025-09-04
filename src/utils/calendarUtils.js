const generateICS = (title, description, startDate, endDate, location = "Online") => {
  return `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
DTSTART:${startDate}
DTEND:${endDate}
LOCATION:${location}
END:VEVENT
END:VCALENDAR
`.trim();
};

// Format date to iCalendar format (UTC)
const formatDateToICS = (date) => {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
};

export { generateICS, formatDateToICS };
