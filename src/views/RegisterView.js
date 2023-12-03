import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { FormViews, FormField, ButtonViews, Title, Container, Input } from "./views.styled";
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .matches(/[a-z]/, /[A-Z]/, /\s/, "Error")
        .required('Required'),
});
const RegisterView = () => {
    const dispatch = useDispatch();

    return (

        <Container>
            <Title>Registration</Title>
            <FormViews
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={(values, { resetForm }) => {
                    dispatch(authOperations.register(values));
                    resetForm();
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <FormField onSubmit={handleSubmit}>
                        <Input name="username" value={values.username} placeholder="Enter your name..." />
                        {touched.username && errors.username && <div>{errors.username}</div>}

                        <Input name="email" value={values.email} placeholder="Enter your email..." />
                        {touched.email && errors.email && <div>{errors.email}</div>}

                        <Input name="password" value={values.password} placeholder="Enter your password..." />
                        {touched.password && errors.password && <div>{errors.password}</div>}

                        <ButtonViews type="submit">Register</ButtonViews>
                    </FormField>
                )}
            </FormViews>


        </Container>
    )
}
export default RegisterView;


// const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = e.currentTarget.elements.userName.value;
//     const email = e.currentTarget.elements.userEmail.value;
//     const password = e.currentTarget.elements.userPassword.value;

//     const formData = {
//         name,
//         email,
//         password,
//     };
//     dispatch(authOperations.register(formData));
//     console.log(name, email, password);
// }
/* <Title>Registration</Title>
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
            </FormViews> */