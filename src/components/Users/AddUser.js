import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
function AddUser(props) {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');


  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

    const addUserHandler = (event) =>{
      alert('hi')
        event.preventDefault(); 
        console.log(enteredUsername, enteredAge)
    }
  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}> 
        <label htmlFor='username'>Username</label>
        <input id='username' type="text" onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' onChange={ageChangeHandler}/>	
        <button type='submit'>Add User</button>
        {/* <Button type="submit">Add User</Button> */}
    </form>
    </Card>
  )
}

export default AddUser