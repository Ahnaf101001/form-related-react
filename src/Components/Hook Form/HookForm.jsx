import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('');
    // const [email, handleEmailChange] = useInputState('');
    // const [password, handlePasswordChange] = useInputState('');

    const nameState = useInputState('');
    const emailState = useInputState('');
    const passwordState = useInputState('');
    

    const handleSubmit = e =>{
        // console.log("form data, name: ", name);
        // console.log("form data, email: ", email);
        // console.log("form data, password: ", password);
        console.log("form data, name: ", nameState.value);
        console.log("form data, email: ", emailState.value);
        console.log("form data, password: ", passwordState.value);
        e.preventDefault();
    }


    return (
        <div>
            <h1>Hook Form</h1>
            {/* <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input value={email} onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input value={password} onChange={handlePasswordChange} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form> */}
            <form onSubmit={handleSubmit}>
                <input {...nameState} type="text" name="name" />
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input {...passwordState} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;