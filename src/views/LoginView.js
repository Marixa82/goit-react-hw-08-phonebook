import { useDispatch } from "react-redux";
import { authOperations } from '../redux/auth';
import { Title, Container, FormViews, ButtonViews, Input, FormField } from "./views.styled";
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
const LoginView = () => {
    const dispatch = useDispatch();


    return (
        <Container>
            <Title>Registration</Title>
            <FormViews
                initialValues={{
                    username: '',
                    email: '',
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

                        <ButtonViews type="submit">Login</ButtonViews>
                    </FormField>
                )}
            </FormViews>


        </Container>
    )
}
export default LoginView;

/* <Container>
    <Title>Login</Title>
    <FormViews
        onSubmit={handleSubmit} >

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
</Container> */