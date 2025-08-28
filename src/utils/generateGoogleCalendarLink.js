const generateGoogleCalendarLink = ({ title, details, location, startDate, endDate }) => {
  const formatDate = (date) =>
    date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const startStr = formatDate(startDate);
  const endStr = formatDate(endDate);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startStr}/${endStr}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
};

export default generateGoogleCalendarLink;
