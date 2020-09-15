import React, {useState} from 'react';
import Form from './Form';
import styled from 'styled-components';

const FriendContainer = styled.div`
border: solid 2px black;
text-align: center;
width: 70%;
margin: 5% auto;
`

const initialFormValues = {
  name: '',
  email: '',
  role: ''
};

function App() {
  const [friends, setFriends] = useState([{
    name: 'Mr. Bigglesworth',
    email: 'biggz@wow.com',
    role: 'cat'
  },
  {
    name: 'Captain Whatshisname',
    email: 'cap@captain.com',
    role: 'captain'
  },
  {
    name: 'C.G. McSomething',
    email: 'wow@wow.com',
    role: 'student'
  }
]);
const [formValues, setFormValues] = useState(initialFormValues);

const updateForm = (name, value) => {
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const submitForm = () => {
  const addFriend = {
    name: formValues.name.trim(),
    email:formValues.email.trim(),
    role: formValues.role

  }
  setFriends([...friends, addFriend]);
  setFormValues(initialFormValues);
}

  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{textAlign:'center'}}>TEAM BUILDER!</h1>
      </header>
      <div>
        {friends.map(friend=>{
          return (
            <FriendContainer>
            <h2>Name: {friend.name}</h2>
            <h2>Email: {friend.email}</h2>
            <h2>Role: {friend.role}</h2>
            </FriendContainer>
          )
        })}
        <Form updateForm={updateForm} setFormValues={setFormValues} submitForm={submitForm} friends={friends} formValues={formValues}/>
      </div>
    </div>
  );
}

export default App;
