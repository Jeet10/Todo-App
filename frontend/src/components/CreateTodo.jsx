import { useState } from "react";

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input style={{
            padding: 5,
            margin: 5
        }} type="text" placeholder="title" onChange={function (e) {
            const value = e.target.value;
            setTitle(value);
        }}></input><br /><br />
        <input style={{
            padding: 5,
            margin: 5
        }} type="text" placeholder="description" onChange={function (e) {
            const value = e.target.value;
            setDescription(value);
        }}></input><br /><br />

        <button style={{
            padding: 5,
            margin: 5
        }} onClick={async () => {
            const res = await fetch("http://localhost:3000/createTodo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await res.json;
            alert("Todo added!");
        }} >Add Todo</button>
    </div>
}