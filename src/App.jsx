import './App.css'
import ReusableForm from './Components/Reusable Form/ReusableForm'
// import HookForm from './Components/Hook Form/HookForm'
// import RefForm from './Components/Ref Form/RefForm'
// import SimpleForm from './Components/Simple Form/SimpleForm'
// import StatefulForm from './Components/Stateful Form/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
  }

  const handleUpdateProfileSubmit = data => {
    console.log('log in data', data);
  }

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formTitle={'Sign Up'}
        buttonText={'Sign Up'}
        handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h1>Sign Up</h1>
          <p>Please Sign Up!!!!</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Profile update'}
        buttonText={'Update'}
        handleSubmit={handleUpdateProfileSubmit}
      >
        <div>
          <h1>Update Profile</h1>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
