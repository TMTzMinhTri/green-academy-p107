import { Outlet, useLocation } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";

const AuthLayout = () => {
  const location = useLocation();
  const title = location.pathname === "/login" ? "Login" : "Register";
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg={4} md={6}>
          <Card>
            <CardHeader className="text-center">
              <h5>{title}</h5>
            </CardHeader>
            <CardBody>
              <Outlet />
            </CardBody>
            <CardFooter>
              <ButtonGroup className="w-100">
                <Button color="primary" outline>
                  Google
                </Button>
                <Button color="primary" outline>
                  Facebook
                </Button>
                <Button color="primary" outline>
                  Twitter
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default AuthLayout;
