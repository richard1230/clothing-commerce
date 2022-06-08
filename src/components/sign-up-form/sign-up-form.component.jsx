
import { useState } from 'react';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
  } from '../../utils/firebase/firebase.utils';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};
  

const SignUpFrom = () => { 
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };
    console.log(formFields)

    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value }) 
        //[name]: value ---> 获取到对应的name(这里有4个name)里面的value
    }
    
    const handSubmit = async (e) => { 
        e.preventDefault();
        if (password !== confirmPassword) { 
            alert("do not match")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
              } else {
                console.log('user creation encountered an error', error);
            }
        }

    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handSubmit}>
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