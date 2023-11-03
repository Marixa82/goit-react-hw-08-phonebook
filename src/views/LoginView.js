import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth/auth-operations";

const LoginView = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.currentTarget.elements.userEmail.value;
        const password = e.currentTarget.elements.userPassword.value;
        const formData = {
            email,
            password,
        };
        dispatch(authOperations.logIn(formData));
        console.log(email, password);
    }
    return (
        <div>
            <h1>LoginIn</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    <span>
                        <input type="email" name="userEmail" placeholder="Enter your email..." required></input>
                    </span>
                </label>
                <label>
                    <span>
                        <input type="password" name="userPassword" placeholder="Enter your password..." required minLength={7}></input>
                    </span>
                </label>
                <button type="submit">LoginIn</button>
            </form>
        </div>
    )
}
export default LoginView;