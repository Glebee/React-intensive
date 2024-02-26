import React from "react";
import { v4 as uuidv4 } from "uuid";

function Lists() {
  const array = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
  ];
  return (
    <>
      <h3>list with array indexes keys</h3>
      <React.Fragment>
        <ul>
          {array.map((e, key) => (
            <li key={key}>{e.name}</li>
          ))}
        </ul>
      </React.Fragment>

      <h3>list with keys using .id property</h3>
      <React.Fragment>
        <ul>
          {array.map((e) => (
            <li key={e.id}>{e.name}</li>
          ))}
        </ul>
      </React.Fragment>

      <h3>list with uuid keys</h3>
      <React.Fragment>
        <ul>
          {array.map((e) => (
            <li key={uuidv4()}>{e.name}</li>
          ))}
        </ul>
      </React.Fragment>
    </>
  );
}

export default Lists;
