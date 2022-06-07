
import { useState } from 'react';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};
  

const SignUpFrom = () => { 
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields)

    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value }) 
        //[name]: value ---> 获取到对应的name(这里有4个name)里面的value
    }
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => { }}>
                <label>Display Name</label>
                <input type='text' required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <label>Email</label>
                <input type='email' required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <label>Password</label>
                <input type='password' required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <label>Confirm Password</label>
                <input type='password' required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}


export default SignUpFrom;