import React from "react";
import Card from "../card/card";

const CardList = () => {
  return (
    <div className="card-list">
      <Card card={"default"} taste={'фуа-гра'} quantity={[10,1]} weight={"0,5"}/>
      <Card card={"selected"} taste={'рыбой'} quantity={[40,2]} weight={"2"}/>
      <Card card={"disabled"} taste={'курой'} quantity={[100,5]} weight={"5"}/>
    </div>
  );
};

export default CardList;
