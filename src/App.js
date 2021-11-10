import React,{useState} from 'react';
import './App.css';
import  Form from './Form';
import Userlist from './userList'


function App() {

  const [userList,setUserList]= useState([]);

  const AddUserHandler=(userName,userAge)=>{
      setUserList((prevUserList)=>{
        return [...prevUserList,{name:userName,age:userAge}]
      }) 
  }


  return (
    <div className="App">
      <Form onAddUser={AddUserHandler}/>
      <Userlist users={userList} />
    </div>
  );
}

export default App;
