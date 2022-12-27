import { Link } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

const RegisterPage = () => {
    return <div className="my-2">
        <Form>
            <FormGroup floating>
                <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
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