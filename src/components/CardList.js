import React from "react";
import Card from "./Card";

/* CardList is a Pure function because it always returns the same thing */
const CardList = ({ robots }) => {
  /*   if (true) {
    throw new Error("I generated this hehhe");
  } */
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
