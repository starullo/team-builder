import React, {useState} from 'react';
import styled from 'styled-components';




const FormCont = styled.form`
text-align: center;
font-size: 2rem;
border: solid 2px black;
width: 70%;
margin: 3% auto;
`

const Input = styled.input`
margin: 3% 2%;
`

const Select = styled.select`
margin: 3% 2%;
`

const Button = styled.button`
width: 75px;
height: 40px;
margin-bottom: 10px;
`
export default function Form(props) {
const {updateForm, submitForm, friends, formValues} = props;

const onChange = e => {
    const {name, value} = e.target;
    updateForm(name, value);
}

const onSubmit = e => {
    e.preventDefault();
    submitForm();
}


return (
    <FormCont onSubmit={onSubmit}>
        <p>Enter more friends using this amazing form </p>
        <label>Name
            <Input onChange={onChange} type='text' name='name'  placeholder='Enter your name'
            maxLength='50' />
        </label><br></br>
        <label>Email
            <Input onChange={onChange} type='email' name='email'  placeholder='Enter your email' maxLength='50' />
        </label><br></br>
        <label>Role
            <Select onChange={onChange} name='role' >
                <option value=''>SELECT ROLE!</option>
                <option value='captain'>Captain</option>
                <option value='cat'>Cat</option>
                <option value='student'>Student</option>
            </Select><br></br>
            <Button>Add Friend</Button>
        </label>
    </FormCont>
)
}