import "./App.css";

import React, { useState } from 'react';


function Receipt({ person, order, onClick }) {
  const { main, protein, rice, sauce, drink, cost, toppings } = order;

  return (
    <div className="receipt-container" onClick={onClick}>
      <h2>{person}</h2>
      <p>Main: {main}</p>
      <p>Protein: {protein}</p>
      <p>Rice: {rice}</p>
      <p>Sauce: {sauce}</p>
      <p>Drink: {drink}</p>
      <p>Cost: ${cost}</p>
      <p>Topping:{toppings}</p>
    </div>
  );
}

export default function App() {
  const [receipts, setReceipts] = useState([
    {
      person: 'Karolin',
      order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
        drink: 'Korchata',
        cost: 22,
      },
      paid: false,
    },
    {
      person: 'Mark',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
        drink: 'Korchata',
        cost: 19,
      },
      paid: false,
    },
    {
      person: 'Matt',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20,
      },
      paid: false,
    },
  ]);

  const handleReceiptClick = (index) => {
    const updatedReceipts = [...receipts];
    updatedReceipts[index].paid = !updatedReceipts[index].paid;
    setReceipts(updatedReceipts);
  };

  return (
    <div className="app-container"> 
      {receipts.map((receipt, index) => (
        !receipt.paid ? (
          <div key={index}>
            <Receipt
              person={receipt.person}
              order={receipt.order}
              onClick={() => handleReceiptClick(index)}
            />
          </div>
        ) : null
      ))}
    </div>
  );
}


