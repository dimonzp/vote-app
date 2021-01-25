

export const getDate = (date, withTime = false) => {
  try {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const min = String(date.getMinutes() + 1).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const yyyy = date.getFullYear();
    
    return withTime ? `${dd}-${mm}-${yyyy} ${hh}:${min}` : `${yyyy}-${mm}-${dd}`;
  } catch (error) {
      console.log(error);
      return ''
  }
  
};
