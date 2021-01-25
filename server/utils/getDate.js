const getDate = (isTime = false) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const hh = String(today.getHours());
  const min = String(today.getMinutes());
  const yyyy = today.getFullYear();
  const date = `${yyyy}-${mm}-${dd}`;
  return isTime ? `${date} ${hh}:${min}` : date;
};
module.exports = getDate;
