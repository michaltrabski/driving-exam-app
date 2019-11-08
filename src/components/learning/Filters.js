import React from "react";

const Filters = () => {
  return (
    <form>
      <select className="form-control mb-1 mr-1" type="select">
        <option>FILTR 1: Pokaż wszystkie pytania</option>
        <option>FILTR 2: Pokaż pytania, na które odpowiedziałeś dobrze</option>
        <option>FILTR 3: Pokaż pytania, na które odpowiedziałeś źle</option>
        <option>DZIAŁ 1: Pierwsza pomoc</option>
        <option>DZIAŁ 2: Znaki drogowe</option>
      </select>
    </form>
  );
};

export default Filters;
