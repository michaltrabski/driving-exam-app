import React, { Component } from "react";
const firebase = require("firebase");

let kat_x_lang = "kat_b_pl";
kat_x_lang = "kat_a_eng";

class Home extends Component {
  state = {
    allQuestions: [],
    isLoaded: false
  };

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("questions")
    //   .onSnapshot(serverUpdate => {
    //     let allQuestions = serverUpdate.docs.map(_doc => {
    //       const data = _doc.data();
    //       data["id"] = _doc.id;
    //       return data;
    //     });
    //     console.log("allQuestions", allQuestions);
    //     // allQuestions = JSON.parse(allQuestions[kat_x_lang]);
    //     // this.setState({ allQuestions, isLoaded: true });
    //   });
    // firebase
    //   .firestore()
    //   .collection("questions")
    //   .doc(kat_x_lang)
    //   .get()
    //   .then(doc => {
    //     if (doc.exists) {
    //       // console.log("Document data:", doc.data());
    //       const data = doc.data();
    //       console.log(data.allQuestions);
    //       this.setState({ allQuestions: data.allQuestions, isLoaded: true });
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log("Error getting document:", error);
    //   });
    // firebase
    //   .firestore()
    //   .collection("questions")
    //   .doc("kat_b_pl")
    //   .set({
    //     allQuestions: kat_b_pl
    //   });
    // firebase
    //   .firestore()
    //   .collection("questions")
    //   .doc("kat_a_eng")
    //   .set({
    //     allQuestions: kat_a_eng
    //   });
    // firebase
    //   .firestore()
    //   .collection("questions")
    //   .add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   });
  }
  render() {
    const { allQuestions, isLoaded } = this.state;
    return (
      <div>
        {isLoaded &&
          allQuestions.map((question, i) => (
            <p key={question.id}>
              {i}) {question.id} {question.t}
            </p>
          ))}
      </div>
    );
  }
}

export default Home;
