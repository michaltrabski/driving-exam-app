import React, { useState } from "react";

import { data_mini } from "./../data/data_mini";
import PrevievDataTable from "../components/superAdmin/PrevievDataTable";

const SuperAdmin = () => {
  const [str, setStr] = useState(JSON.stringify(data_mini));
  const [obj, setObj] = useState("empty");

  const handleChange = e => {
    setStr(e.target.value);
  };

  const handleSubmit = e => {
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="zxc">Wklej object ze wszystkim</label>
        <textarea value={str} onChange={handleChange}></textarea>
        <button type="submit">Sprawdź dane (parse object wth data)</button>
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
      <PrevievDataTable obj={obj}></PrevievDataTable>
    </div>
  );
};

export default SuperAdmin;
