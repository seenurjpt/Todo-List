import React, {useState} from "react";

const Addtodo = ({addTodo}) => {
    const [title, setTitle] =  useState("")
    const [desc, setDesc] =  useState("")

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            alert("All fields are medatory..!!")
        }
        else{
          addTodo(title, desc);
        setTitle("");
        setDesc("");
        }
    }
  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Add to list
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
