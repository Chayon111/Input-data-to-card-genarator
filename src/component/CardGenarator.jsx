import { useState } from "react";
import Card from "./Card";
import Form from "./Form";

export default function Cardgenarator() {
  const [cards, setCards] = useState([]);
  const genarateCard = (name, age) => {
    const newCard = {
      name: `${name}`,
      age: `${age}`,
    };
    setCards([...cards, newCard]);
  };
  return (
    <div>
      <Form genarateCard={genarateCard} />
      <div className="d-flex flex-wrap ">
        {cards.map((cardItem, index) => {
          return (
            <div key={index}>
              <Card name={cardItem.name} age={cardItem.age} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
