import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { Title, Container, FormViews, ButtonViews, Input } from "./views.styled";

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
    }
    return (
        <Container>
            <Title>Login</Title>
            <FormViews onSubmit={handleSubmit} >

                <label>
                    <span>
                        <Input type="email" name="userEmail" placeholder="Enter your email..." required />
                    </span>
                </label>
                <label>
                    <span>
                        <Input type="password" name="userPassword" placeholder="Enter your password..." required minLength={7} />
                    </span>
                </label>
                <ButtonViews type="submit">Login</ButtonViews>
            </FormViews>
        </Container>
    )
}
export default LoginView;