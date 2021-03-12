import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ResponsiveCardTable({ headers, fields }) {
  const [useCard, setUseCard] = useState(false);

  useEffect(() => {
    determineWrapper();
  }, []);

  function determineWrapper() {
    setUseCard(window.innerWidth <= 500);
  }

  window.addEventListener("resize", determineWrapper);

  return useCard ? (
    fields.map((x) => (
      <div key={uuidv4()} className="item-container">
        <HeaderFieldPair key={uuidv4()} headers={headers} fields={x} />
      </div>
    ))
  ) : (
    <div className="item-parent-container">
      <table className="item-table">
        <thead>
          <tr>
            {headers.map((x) => (
              <th key={uuidv4()}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fields.map((x) => (
            <Row key={uuidv4()} fields={x} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HeaderFieldPair({ headers, fields }) {
  return fields.map((x, index) => (
    <>
      {headers[index]} {x}
    </>
  ));
}

function Row({ fields }) {
  return (
    <tr>
      {fields.map((x) => (
        <td key={uuidv4()}>{x}</td>
      ))}
    </tr>
  );
}
