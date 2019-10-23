import React, { useEffect } from "react";
import axios from "axios";

const Exam = () => {
  useEffect(() => {
    axios
      .post("https://poznaj-testy.pl/wp-admin/admin-ajax.php", {
        data: {
          action: "get_user_info"
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  return "Exam";
};

export default Exam;
