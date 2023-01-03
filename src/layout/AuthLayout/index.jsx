import { Outlet } from "react-router-dom";
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
import { useLocation } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function generateTitle(pathname) {
    if (pathname === '/register')
        return "Register"
    else if (pathname === '/login')
        return "Login"
    else
        return ''
}

const AuthLayout = () => {
    const { pathname } = useLocation()
    const title = generateTitle(pathname)
    const { login } = useContext(AuthContext)

    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col lg={4} md={8}>
                    <Card>
                        <CardHeader>{title}</CardHeader>
                        <CardBody>
                            <Outlet />
                        </CardBody>
                        <CardFooter className="text-center">
                            <ButtonGroup>
                                <Button
                                    onClick={() => login("google")}
                                    color="primary"
                                    outline
                                >
                                    Google
                                </Button>
                                <Button
                                    color="primary"
                                    outline
                                    onClick={() => login("facebook")}
                                >
                                    Facebook
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={() => login("twitter")}
                                    outline
                                >
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
