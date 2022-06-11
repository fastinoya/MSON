import React from 'react'
import Component from "mson-react/lib/component";

const definition = {
    component: "Form",
    fields: [

        {
            name: "heading",
            component: "Text",
            text: "# Profile Page"
        },
        {
            name: 'Name',
            component: 'TextField',
            label: 'Name',
            required: true
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
            name: "Role",
            component: "TextField",
            label: "Role"
        },
        {
            name: "Gender",
            component: "SelectField",
            label: 'Gender'
        },
        {
            name: "BirthDate",
            component: "DateField",
            label: 'Date Of Birth'
        },
        {
            name: 'Country',
            component: 'TextField',
            label: 'Country'
        },
        {
            name: "phone",
            component: "PhoneField",
            label: "Phone"
        },
        {
            name: 'Language',
            component: 'SelectField',
            label: 'Language',
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

function profile() {
    return (<Component
        definition={definition}
        onSubmit={({ component }) => {
            alert(JSON.stringify(component.getValues()));
        }}
    />)
}

export default profile