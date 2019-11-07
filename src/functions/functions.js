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

export const rightAnswerArr = (allQuestions, userData) => {
  let x = allQuestions.filter(item => {
    let result = false;
    if (typeof userData[`id_${item.id}`] !== "undefined") {
      if (item.r === userData[`id_${item.id}`].userAnswer) {
        result = true;
      }
    }
    return result;
  });
  return x;
};
