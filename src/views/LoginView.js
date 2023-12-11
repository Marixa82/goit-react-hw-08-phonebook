import { useDispatch } from "react-redux";
import { authOperations } from '../redux/auth';
import { Title, Container, FormViews, Error, ButtonViews, Input, FormField } from "./views.styled";
import { SignSchema } from "components/Schemas/schemas";


const LoginView = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Title>Login</Title>
            <FormViews
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignSchema}
                onSubmit={(values, { resetForm }) => {
                    dispatch(authOperations.register(values));
                    resetForm();
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <FormField onSubmit={handleSubmit}>
                        <Input
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            placeholder="Enter your email..." />
                        {touched.email && errors.email && <Error>{errors.email}</Error>}

                        <Input
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            placeholder="Enter your password..." />
                        {touched.password && errors.password && <Error>{errors.password}</Error>}

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
// { touched.email && errors.email && <div>{errors.email}</div> }
// { touched.username && errors.username && <div>{errors.username}</div> }