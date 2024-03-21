import { useState } from "react";

const StatefulForm = () => {
    
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 8){
            setError("Password must be 8 characters or longer");
        }
        else{
            setError("");
            console.log(name, email, password);
        }
    }

    const handleNameChange = e =>{
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
            <h1>Stateful Form</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}
                type="text" name="name" />
                <br />
                <input onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange}
                type="password" name="Password" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;