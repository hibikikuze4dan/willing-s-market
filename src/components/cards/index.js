import React from "react";
import MultiCardComponent from "./MultiCard";
import SingleCardComponent from "./SingleCard";

const CardComponent = ({ choice }) => {
  const { multi, picked } = choice;
  const CardType = multi ? MultiCardComponent : SingleCardComponent;
  const backgroundColor = picked ? "green" : "inherit";
  return <CardType backgroundColor={backgroundColor} choice={choice} />;
};

export default CardComponent;
