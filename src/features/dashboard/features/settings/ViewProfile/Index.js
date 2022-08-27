import React from "react";
import Card from "./Card";
import Header from "./Header";

const Index = ({ Name, Gender, City, DOB, Img, Para }) => {
  return (
    <div>
      <Header
        Name={Name}
        Gender={Gender}
        City={City}
        DOB={DOB}
        Img={Img}
        Para={Para}
      />
      <Card />
    </div>
  );
};

export default Index;
