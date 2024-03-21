
const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.target);
        console.log(e.targe.email.value);
        console.log(e.targe.phone.value);
        console.log('form submittede.ail');
    }

    return (
        <div>
            <h1>Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />  
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />  
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;