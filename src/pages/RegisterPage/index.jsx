import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const RegisterPage = () => {
  return (
    <div>
      <Form>
        <FormGroup floating>
          <Input
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            type="email"
          />
          <Label for="email">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="password"
            autoComplete="current-password"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="password">Password</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="password-confirmation"
            autoComplete="current-password"
            name="passwordConfirmation"
            placeholder="Password confirmation"
            type="password"
          />
          <Label for="password-confirmation">Password confirmation</Label>
        </FormGroup>{" "}
        <Button block color="primary">
          Register
        </Button>
      </Form>
      <div className="mt-2 text-center">
        Have already an account? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
