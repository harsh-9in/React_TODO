import React,{useState} from 'react';

function Form(props) {

    const [name,setName]=useState('')
    const [age,setAge]=useState('')

    function updateName(event){
        setName(event.target.value)
    }
    function updateAge(event){
        setAge(event.target.value)
    }

    function SubmitThis(event){
        event.preventDefault();
        props.onAddUser(name,age);
        setName('')
        setAge('')
    }


    return (
        <div>
            <form onSubmit={SubmitThis}>
                <label >name</label>
                <input type='text' value={name} onChange={updateName}></input>
                <label>age</label>
                <input type='number' value={age} onChange={updateAge}></input>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
