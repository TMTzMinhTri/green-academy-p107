import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Form, FormGroup, Input, Label } from "reactstrap"
import errorMessage from "../../common/errorMessage"
import { auth } from "../../libs/firebase"

const RegisterPage = () => {
    const [error, setError] = useState('')
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    })

    const onChange = (e) => {
        const { name, value } = e.target
        // setFormValue((prev) => {
        //     return {
        //         ...prev,
        //         [name]: value
        //     }
        // })
        setFormValue((prev) => ({ ...prev, [name]: value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const { password, password_confirmation, email } = formValue
        if (error) setError('')

        if (password !== password_confirmation) {
            setError('Password confimation not match')
            return
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            const errorCode = error.code;
            const errMessage = errorMessage(errorCode)
            setError(errMessage)
        }
    }

    return <div className="my-2">
        <Form onSubmit={onSubmit}>
            {error && <Alert color="danger">{error}</Alert>}
            <FormGroup floating>
                <Input
                    id="email"
                    name="email"
                    onChange={onChange}
                    placeholder="Email"
                    type="text"
                />
                <Label for="email">
                    Email
                </Label>
            </FormGroup>
            {' '}
            <FormGroup floating>
                <Input
                    id="password"
                    name="password"
                    onChange={onChange}
                    placeholder="Password"
                    type="password"
                />
                <Label for="password">
                    Password
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    id="password_confirmation"
                    name="password_confirmation"
                    onChange={onChange}
                    placeholder="Password confirmation"
                    type="password"
                />
                <Label for="password_confirmation">
                    Password confirmation
                </Label>
            </FormGroup>
            <Button block color="primary">
                Register
            </Button>
        </Form>
        <div className="text-center">
            Already have an account? <Link to='/login'>Login</Link>
        </div>
    </div>
}
export default RegisterPage