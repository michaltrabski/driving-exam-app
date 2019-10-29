import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { data_mini } from "./../data/data_mini";

const SuperAdmin = () => {
  const [str, setStr] = useState(JSON.stringify(data_mini));
  const [obj, setObj] = useState("empty");

  const handleChange = e => {
    setStr(e.target.value);
  };

  const handleSubbmit = e => {
    e.preventDefault();
    let newObj = "";
    try {
      newObj = JSON.parse(str);
      if (typeof newObj === "object") {
        setObj(newObj);
      }
    } catch {
      console.log("you have pasted not an object to parse");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubbmit}>
        <label htmlFor="zxc">Wklej object ze wszystkim</label>
        <textarea value={str} onChange={handleChange}></textarea>
        <button type="submit">Wyślij do firebase</button>
      </form>
      <div>
        <p>
          {obj.questions_from_gov &&
            `obj.questions_from_gov.length = ${obj.questions_from_gov.length}`}
        </p>
        <p>
          {obj.thematic_category &&
            `obj.thematic_category.length = ${obj.thematic_category.length}`}
        </p>
        <p>
          {obj.michal_info &&
            `obj.michal_info.length = ${obj.michal_info.length}`}
        </p>
      </div>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>t</th>
              <th>a</th>
              <th>b</th>
              <th>c</th>
              <th>r</th>
              <th>m</th>
              <th>p</th>
              <th>k</th>
            </tr>
          </thead>
          <tbody>
            {obj !== "empty" &&
              obj.questions_from_gov.map(item => (
                <tr>
                  <td>{item["Numer pytania"]}</td>
                  <td>{item["Pytanie"]}</td>
                  <td>{item["Odpowiedź A"]}</td>
                  <td>{item["Odpowiedź B"]}</td>
                  <td>{item["Odpowiedź C"]}</td>
                  <td>{item["Poprawna odp"]}</td>
                  <td>{item["Media"]}</td>
                  <td>{item["Liczba punktów"]}</td>
                  <td>{item["Kategorie"]}</td>
                  {/* <td>{item[""]}</td>
                  <td>{item[""]}</td>
                  <td>{item[""]}</td> */}
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SuperAdmin;
