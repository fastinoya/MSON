import React from "react";
import ReactDOM from "react-dom";
import Component from "mson-react/lib/component";

const definition = {
  component: "Form",
  fields: [
    {
      name: "heading",
      component: "Text",
      text: "# Login Page"
    },
    {
      name: "email",
      component: "EmailField",
      label: "Email Id",
      required: true
    },
    {
      name: "password",
      component: "PasswordField",
      label: "Password",
      required: true
    },
    {
      name: "phone",
      component: "PhoneField",
      label: "Phone"
    },
    {
      name: "submit",
      component: "ButtonField",
      label: "Submit",
      type: "submit",
      icon: "Send"
    }
  ]
};


ReactDOM.render(
  <Component
    definition={definition}
    onSubmit={({ component }) => {
      alert(JSON.stringify(component.getValues()));
    }}
  />,
  document.getElementById("root")
);