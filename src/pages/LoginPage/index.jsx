import { Link } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

const LoginPage = () => {
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
            <Button block color="primary">
                Login
            </Button>
        </Form>
        <div className="text-center">
            <Link to='/register'>Create new account</Link>
        </div>
    </div>
}
export default LoginPage