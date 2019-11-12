export const storage = (key, value) => {
  try {
    if (!value) {
      // return JSON.parse(sessionStorage.getItem(key));
      return JSON.parse(localStorage.getItem(key));
    } else {
      // sessionStorage.setItem(key, JSON.stringify(value));
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (err) {
    console.log(err);
  }
};

//Filtering questions
export const filterRightAnswers = question => {
  return question.r === question.userAns ? true : false;
};

export const filterWrongAnswers = question => {
  return question.r !== question.userAns && question.userAns !== false
    ? true
    : false;
};

export const questionAnswerTextColor = (right_answer, userAns) => {
  let color = "";
  if (right_answer === userAns) color = "text-success";
  if (right_answer !== userAns) color = "text-danger";
  if (!userAns) color = "";

  return color;
};

export const replaceRegEx = (text, search) => {
  const regex = new RegExp(search, "gi");
  let found = text.match(regex)[0];
  return text.replace(regex, `<span class="bg-warning">${found}</span>`);
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
export const wrongAnswerArr = (allQuestions, userData) => {
  let x = allQuestions.filter(item => {
    let result = false;
    if (
      typeof userData[`id_${item.id}`] !== "undefined" &&
      typeof userData[`id_${item.id}`].userAnswer !== "undefined"
    ) {
      if (item.r !== userData[`id_${item.id}`].userAnswer) {
        result = true;
      }
    }
    return result;
  });
  return x;
};

export const allGivenAnswerArr = (allQuestions, userData) => {
  let x = allQuestions.filter(item => {
    let result = false;
    if (
      typeof userData[`id_${item.id}`] !== "undefined" &&
      typeof userData[`id_${item.id}`].userAnswer !== "undefined"
    ) {
      result = true;
    }
    return result;
  });
  return x;
};
