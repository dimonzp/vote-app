
const getDate = (date = new Date, withTime = false, forUI = false) => {
  try {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const min = String(date.getMinutes() + 1).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const yyyy = date.getFullYear();
    const fullDate = `${yyyy}-${mm}-${dd}`;
    if (forUI) return `${dd}-${mm}-${yyyy} ${hh}:${min}`;
    return withTime ? `${fullDate} ${hh}:${min}` : fullDate;
  } catch (error) {
    console.log(error);
    return "";
  }
};
module.exports = getDate;
