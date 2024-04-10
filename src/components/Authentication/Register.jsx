import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import {auth} from "../../firebase.config.js";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useUserStore} from "../../Services/Store.js";
import Alert from "../misc/Alert.jsx";


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firebaseErrorMessage, setFirebaseErrorMessage] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            useUserStore.getState().updateUser(user);

            console.log(useUserStore.getState())
            navigate('/home')
        } catch (error) {
            console.error(error.message);
            switch (error.message) {
                case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                    setFirebaseErrorMessage('Password should be at least 6 characters');
                    break;
                case 'Firebase: Error (auth/email-already-in-use).':
                    setFirebaseErrorMessage('Account with this email already exists')
                    break;
                case 'Firebase: Error (auth/invalid-email).':
                    setFirebaseErrorMessage('Invalid Email')
                    break;
            }
        }
    }

    return (
        <main className={"container mx-auto h-screen flex flex-col items-center justify-center max-w-screen-lg"}>
            <div>
                <h1 className={"text-5xl font-bold"}>Register Account</h1>
            </div>
            <div className={"card shrink-0 w-full shadow-2xl bg-base-300 max-w-screen-lg mt-10"}>
                <form className={"card-body"} onSubmit={handleSubmit}>
                    <div className={"form-control"}>
                        <label className={"label"}>Email</label>
                        <input className={"input"}
                               type={"email"}
                               placeholder={"email"}
                               required={true}
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={"form-control"}>
                        <label className={"label"}>Password</label>
                        <input className={"input"}
                               type={"password"}
                               placeholder={"password"}
                               required={true}
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <label className={"label justify-end"}>
                        <NavLink to={'/login'} className="label-text-alt link link-hover">Already have an account? Log
                                                                                          in</NavLink>
                    </label>
                    <div className={"form-control mt-8"}>
                        <button className={"btn btn-primary"} type={"submit"}>Sign up</button>
                    </div>
                    {firebaseErrorMessage ? <Alert message={firebaseErrorMessage}/> : null}
                </form>
            </div>
            <div className={"mt-10 w-full flex justify-start"}>
                <NavLink to={'/'}>
                    <button className={"btn btn-secondary px-10"}>Go Back</button>
                </NavLink>
            </div>
        </main>
    )
}