export default () => {
  const formatDate = (date: string) => {
    const d = new Date(date);
    const month = d.toLocaleString("default", {
      month: "long",
    });

    return `${d.getDate()} ${month} ${d.getFullYear()}`;
  };

  return {
    formatDate,
  };
};
