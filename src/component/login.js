import React from "react";
import Component from "mson-react/lib/component";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

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
        },
        {
            name: "pass",
            component: "PasswordField",
            label: "Password",
            required: true
        },
        {
            name: "submit",
            component: "ButtonField",
            label: "Submit",
            type: "submit",
            icon: "Send"
        }
    ],
    validators: [
        {
            where: {
                'fields.email.value': 'test@test.com'
            },
            error: {
                field: 'email',
                error: 'must not be {{fields.email.value}}'
            }
        }
    ],
};


const login = () => {
    const navigate = useNavigate()
    return (
        <Component
            definition={definition}
            onSubmit={({ component }) => {
                axios.post('https://api.dev.multiple-system.com/api/login', component.getValues())
                    .then(res => {
                        navigate('/profile')
                        alert(JSON.stringify(component.getValues()))
                        console.log(res)
                    }
                    ).catch(e => {
                        console.log(e);
                        alert('Account does not exists please sign up');
                        navigate('/signup');
                    })
            }}
        />
    )

}

export default login