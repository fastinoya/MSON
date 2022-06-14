import React from 'react'
import Component from "mson-react/lib/component";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const definition = {
    component: "Form",
    fields: [

        {
            name: "heading",
            component: "Text",
            text: "# Sign Up Page"
        },

        {
            name: "email",
            component: "EmailField",
            label: "Email Id",
            required: true
        },
        {
            name: "pass",
            component: "PasswordField",
            label: "Password",
            required: true
        },
        {
            name: 'username',
            component: 'TextField',
            label: 'Name',
            required: true
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
    const navigate = useNavigate()
    return (<Component
        definition={definition}
        onSubmit={({ component }) => {
            axios.post('https://api.dev.multiple-system.com/api/registration', component.getValues())
                .then(res => {
                    navigate('/profile')
                    alert(JSON.stringify(component.getValues()))
                    console.log(res)
                }
                ).catch(e => {
                    console.log(e)
                    alert('Account already exists. Please Sign In')
                    navigate('/')
                })
        }}
    />)
}

export default profile