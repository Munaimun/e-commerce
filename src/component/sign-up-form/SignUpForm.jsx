import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  //setting up the value of formFields empty using the object
  const [formFields, setFormFields] = useState(defaultFormFields);

  //in case i need them, so initiate them asa constant
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const changeHandler = (event) => {
    // ----taking the value from the event----
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>SIgnUp with your eamil and password</h1>
      <form action="" onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        />
        <label>Email</label>
        <input type="email" required onChange={changeHandler} value={email} />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />
        <label>Confrim Password</label>
        <input
          type="password"
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
