import _ from "lodash";
import firebase from "./../config/firebase";
import { not_paid_mode } from "../store/actions/settingsActions";

export const saveGlobalUserAnswers = (
  allQuestions,
  question_id,
  userAns,
  r
) => {
  let rand = Math.floor(Math.random() * 10 + 1);

  if (rand === 10) {
    firebase
      .firestore()
      .collection("usersAnswers")
      .doc("usersAnswers")
      .get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          const { usersAnswers: arr } = data;

          let newArr = arr.map(item => {
            let x = "";
            let id = `id${item.id}`;
            if (storage(id)) {
              x = storage(id);
              if (x.ans === "good" && x.taken === false) {
                item.good = item.good + 1;
                storage(id, { ...x, taken: true });
              }
              if (x.ans === "bad" && x.taken === false) {
                item.bad = item.bad + 1;
                storage(id, { ...x, taken: true });
              }
            }
            return item;
          });

          firebase
            .firestore()
            .collection("usersAnswers")
            .doc("usersAnswers")
            .set({
              usersAnswers: newArr
            });
          console.log("newArr", newArr.length);
        } else {
          console.log("document usersAnswers not exist so create one");
          firebase
            .firestore()
            .collection("usersAnswers")
            .doc("usersAnswers")
            .set({
              usersAnswers: allQuestions.map(item => {
                return { id: item.id, good: 0, bad: 0 };
              })
            });
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }

  // save userAns in localStorage
  let id = `id${question_id}`;
  if (!storage(id)) {
    storage(id, { ans: userAns === r ? "good" : "bad", taken: false });
  }
};

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

export const randomId = length => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(2, length);
};

export const mergeObj = (obj1, obj2) => {
  return _.merge(obj1, obj2);
};

export const getYear = () => {
  let d = new Date();
  return d.getFullYear();
};

export const timeStamp = () => {
  let d = new Date();
  return d.getTime();
};

export const timeStampHour = () => {
  let d = new Date();
  return Math.floor(d.getTime() / (1000 * 60 * 60));
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
      return question.r !== question.userAns && question.userAns !== ""
        ? true
        : false;
    //--------------------------------------------------------------
    case SHOW_WITHOUT: // CHANGE TO rest = rest questions
      return question.userAns === "" ? true : false;
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

export const questionAnswerTextColor = (right_answer, userAns, mode = "") => {
  let color = "";
  if (right_answer === userAns) color = "text-success";
  if (right_answer !== userAns) color = "text-danger";
  if (!userAns) color = "";

  if (mode === not_paid_mode) color = "";

  return color;
};

export const replaceRegEx = (text, search) => {
  const regex = new RegExp(search, "gi");
  let found = text.match(regex)[0];
  return text.replace(regex, `<span class="bg-warning">${found}</span>`);
};

export const getStatistics = allQuestions => {
  let good = 0;
  let bad = 0;

  allQuestions.forEach(item => {
    if (item.r === item.userAns) good++;
    if (item.r !== item.userAns && item.userAns !== "") bad++;
  });

  let all = allQuestions.length;
  let rest = all - good - bad;
  return [good, bad, all, rest];
};

export const getRandom32Questions = allQuestions => {
  let shuffled = _.shuffle(allQuestions);
  let questions32 = [];

  //I should shuffle arrWithPktToEgzam as well!!!
  const arrWithPktToEgzam20 = _.shuffle([
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1
  ]);
  const arrWithPktToEgzam12 = _.shuffle([3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1]);

  // sum must be equal 74
  const arrWithPktToEgzam = [...arrWithPktToEgzam20, ...arrWithPktToEgzam12];

  for (let i = 0; i < arrWithPktToEgzam.length; i++) {
    let findQuestion = shuffled.findIndex(
      item =>
        (i < 20 &&
          parseInt(item.p) === arrWithPktToEgzam[i] &&
          (item.r === "t" || item.r === "n")) ||
        (i >= 20 &&
          parseInt(item.p) === arrWithPktToEgzam[i] &&
          (item.r === "a" || item.r === "b" || item.r === "c"))
    );
    questions32 = [...questions32, shuffled[findQuestion]];
    shuffled = _.slice(shuffled, findQuestion + 1);
  }

  questions32 = questions32.map((item, i) => {
    return { ...item, userAns: "", nr: i + 1 };
  });

  return questions32;
};
