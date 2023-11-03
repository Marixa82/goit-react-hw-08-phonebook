import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth/auth-operations";

const RegisterView = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.currentTarget.elements.userName.value;
        const email = e.currentTarget.elements.userEmail.value;
        const password = e.currentTarget.elements.userPassword.value;

        const formData = {
            name,
            email,
            password,
        };
        dispatch(authOperations.register(formData));
        console.log(name, email, password);
    }
    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>
                        <input type="text" name="userName" placeholder="Enter your name..." required></input>
                    </span>
                </label>
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
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default RegisterView;