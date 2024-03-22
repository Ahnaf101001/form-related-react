
const ReusableForm = ({formTitle, handleSubmit, buttonText = 'submit', children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data);
    }

    return (
        <div>
            <h1>Reusable Form</h1>

            {/* <h2>{formTitle}</h2> */}
            <h2>{children}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />  
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />  
                <input type="submit" value={buttonText} />
            </form>
        </div>
    );
};

export default ReusableForm;