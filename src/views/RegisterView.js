import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth/auth-operations";
import { FormViews, ButtonViews, Title, Container, Input } from "./views.styled";


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
        <Container>
            <Title>Registration</Title>
            <FormViews onSubmit={handleSubmit} autoComplete="off">
                <label>
                    <span>
                        <Input type="text" name="userName" placeholder="Enter your name..." required></Input>
                    </span>
                </label>
                <label>
                    <span>
                        <Input type="email" name="userEmail" placeholder="Enter your email..." required />
                    </span>
                </label>
                <label>
                    <span>
                        <Input type="password" name="password" required placeholder="Enter your password..." minlength="6" maxlength="12" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number." />
                    </span>
                </label>
                <ButtonViews type="submit">Register</ButtonViews>
            </FormViews>
        </Container>
    )
}
export default RegisterView;