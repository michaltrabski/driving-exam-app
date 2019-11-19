export const storage = (key, value) => {
  try {
    if (!value) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (err) {
    console.log(err);
  }
};

export const getYear = () => {
  let d = new Date();
  return d.getFullYear();
};

//Filtering questions
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_GOOD = "SHOW_GOOD";
export const SHOW_BAD = "SHOW_BAD";
export const SHOW_WITHOUT = "SHOW_WITHOUT";
export const filterQuestions = (question, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return true;
    //--------------------------------------------------------------
    case SHOW_GOOD:
      return question.r === question.userAns ? true : false;
    //--------------------------------------------------------------
    case SHOW_BAD:
      return question.r !== question.userAns && question.userAns !== false
        ? true
        : false;
    //--------------------------------------------------------------
    case SHOW_WITHOUT:
      return question.userAns === false ? true : false;
    //--------------------------------------------------------------
    default:
      return question.th === filter ? true : false;
  }
};

export const textToSlug = text => {
  // console.log(text);
  text = text.toLowerCase();
  text = text.replace(/  /g, " ");

  text = text.replace(/\"/g, "");
  text = text.replace(/\'/g, "");

  text = text.replace(/\,/g, "");
  text = text.replace(/\./g, "");
  text = text.replace(/\!/g, "");
  text = text.replace(/\(/g, "");
  text = text.replace(/\)/g, "");

  text = text.replace(/ą/g, "a");
  text = text.replace(/ę/g, "e");
  text = text.replace(/ó/g, "o");
  text = text.replace(/ł/g, "l");
  text = text.replace(/ż/g, "z");
  text = text.replace(/ź/g, "z");
  text = text.replace(/ć/g, "c");
  text = text.replace(/ś/g, "s");
  text = text.replace(/ó/g, "o");

  text = text.replace(/ /g, "-");
  text = text.replace(/\?/g, "");
  // console.log(`${text}-${id}`);

  return text;
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
