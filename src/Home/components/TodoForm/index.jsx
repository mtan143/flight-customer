import React from "react";
import PropTypes from "prop-types";
import InputField from "../../InputField";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const form = useForm({
    defaultValues: {
      tu: "",
      den: "",
      
    },
  });

  const handleSubmit = (values) => {
    console.log("To do form: ", values);
  };
  return (
    <div>
      <label>Từ</label>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Form.Select name="tu" label="Todo" form={form}>
          {" "}
          <option>Open this select menu</option>
          <option value="1">One </option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <label>Đến</label>
        <Form.Select name="tu" label="Todo" form={form}>
          {" "}
          <option>Open this select menu</option>
          <option value="1">One </option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </form>
    </div>
  );
}

export default TodoForm;
