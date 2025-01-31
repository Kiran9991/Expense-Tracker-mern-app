import React, { useContext, useRef, useState } from "react";
import { expenseContext } from "../../../store/expense-context";
import { LocalHost } from "../../..";
import FetchApi from "../../../hook/FetchApi";
import notify from "../../../hook/notify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../store/user-context";
import { Button, FormInput } from "../../auth";
import Row from "../../../components/Row";
import Col from "../../../components/Col";
import FloatInput from "../../../components/FloatInput";
import Containers from "../../../components/Containers";

export default function Form() {
  const [isWrap, setIsWrap] = useState(false);
  const { token } = useContext(UserContext);
  const formRefs = useRef({
    expense: null,
    amount: null,
    description: null,
    category: null,
  });
  const { addExpense } = useContext(expenseContext);
  const navigate = useNavigate();

  let content = isWrap ? "Show Form" : "Hide Form";

  const wraphandler = (e) => {
    e.preventDefault();
    setIsWrap((prev) => !prev);
  };
  // console.log(isWrap);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formRefs)
    const expenseData = {
      expense: formRefs.current.expense.value,
      amount: formRefs.current.amount.value,
      description: formRefs.current.description.value,
      category: formRefs.current.category.value,
    };

    try {
      const response = await FetchApi(
        `${LocalHost}/expense/expense-form`,
        "POST",
        token,
        expenseData,
      );
      const json = await response.json();
      if (!response.ok) throw new Error(json.message);
      addExpense(json.expenseObj, 1);
      notify(json.message, "success");
    } catch (error) {
      notify(error.message, "error");
    }
  };

  return (
    <>
    <Containers>
      <div className='text-center text-3xl mb-4'>Expense Tracker Form</div>
      <Row>
        <Col>
        <FormInput text={"Expense Name"} type={"text"} ref={(ele) => (formRefs.current.expense = ele)} />
        <FormInput text={"Expense number"} type={"number"} ref={(el) => (formRefs.current.amount = el)} />
        <Button type={'button'}>Wrap Form</Button>
        </Col>
        <Col>
        <FormInput text={"Expense description"} type={"text"} ref={(el) => (formRefs.current.description = el)} />
        {/* <FormInput text={"Expense category"} type={"text"} ref={(el) => (formRefs.current.category = el)} /> */}
        <FloatInput ref={(el) => (formRefs.current.category = el)}/>
        <Button type={'submit'} onClick={handleSubmit}>Add Expense</Button>
        </Col>
      </Row>
    </Containers>
    </>
  );
}
