import React from "react";

import Form from "./FormInput/Form";
import ListExpenses from "./ListItems/ListExpenses";

export default function ExpenseTracker() {
  return (
    <div>
      <Form />
      <ListExpenses />  
    </div>
  );
}
