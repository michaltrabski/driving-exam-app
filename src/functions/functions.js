export const storage = (key, value) => {
  try {
    if (!value) {
      return JSON.parse(sessionStorage.getItem(key));
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  } catch (err) {
    console.log(err);
  }
};
