import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { FormViews, Button, Input } from "./Formik.styled";
// import { SignSchema } from "components/Schemas/schemas";


const SignForm = () => {
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
            <Button type="submit">Login</Button>
        </FormViews>

    )
}
export default SignForm;


// { touched.email && errors.email && <div>{errors.email}</div> }
// { touched.username && errors.username && <div>{errors.username}</div> }

/* <Container>
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


</Container> */