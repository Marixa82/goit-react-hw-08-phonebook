import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { FormViews, Button, Input } from "./Formik.styled";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(authOperations.register({
            name: form.elements.userName.value,
            email: form.elements.userEmail.value,
            password: form.elements.userPassword.value,
        }));
        form.reset();
    };

    return (
        <FormViews onSubmit={handleSubmit} autoComplete="off">
            <label>
                <span>
                    <Input type="text" name="userName" placeholder="Enter your name..." required />
                </span>
            </label>
            <label>
                <span>
                    <Input type="email" name="userEmail" placeholder="Enter your email..." required />
                </span>
            </label>
            <label>
                <span>
                    <Input
                        type="password"
                        name="userPassword"
                        required
                        placeholder="Enter your password..."
                        minLength="6"
                        maxLength="12"
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                        title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
                    />
                </span>
            </label>
            <Button type="submit">Register</Button>
        </FormViews>
    );
};

export default RegisterForm;



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


{/* <FormViews
    initialValues={{
        username: '',
        email: '',
        password: '',
    }}
    validationSchema={RegistrationSchema}
    onSubmit={(values, { resetForm }) => {
        dispatch(authOperations.register(values));
        resetForm();
        console.log(values);
    }
    }
//  {resetForm}) => {
//     // dispatch(authOperations.register(values));
//     resetForm()
// }}
>
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <FormField onSubmit={handleSubmit}>
            <Input
                name="username"
                type="text"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
                placeholder="Enter your name..."
                className={errors.username && touched.username ? "input-error" : ""}
            />
            {touched.username && errors.username && <Error>{errors.username}</Error>}

            <Input
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                placeholder="Enter your email..."
                className={errors.email && touched.email ? "input-error" : ""}
            />
            {touched.email && errors.email && <Error>{errors.email}</Error>}

            <Input
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                placeholder="Enter your password..."
                className={errors.password && touched.password ? "input-error" : ""}
            />
            {touched.password && errors.password && <Error>{errors.password}</Error>}

            <ButtonViews type="submit">Register</ButtonViews>
        </FormField>
    )}
</FormViews> */