import React from "react";
import { robots } from "./robots";
import Card from "./Card";

const CardList = () => {
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
