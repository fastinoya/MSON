import React from 'react'
import Component from "mson-react/lib/component";
import axios from 'axios';

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
            component: "TextField",
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
            component: 'TextField',
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
            axios.post('https://api.dev.multiple-system.com/api/MyProfile', component.getValues())
                .then(res => {
                    alert(JSON.stringify(component.getValues()))
                    console.log(res)
                }
                ).catch(e => console.log(e))
        }}
    />)
}

export default profile