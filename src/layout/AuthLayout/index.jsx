import { signInWithPopup } from "firebase/auth";
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
import { auth, facebookProvider } from "../../libs/firebase";

const AuthLayout = () => {
    const handleLoginSocial = async (type) => {
        switch (type) {
            case "facebook":
                // signInWithPopup(auth, facebookProvider)
                // .then((result) => {
                //   console.log(result)
                // }).catch()
                const result = await signInWithPopup(auth, facebookProvider);
                console.log(result);
                break;
            case "google":
            case "github":
            case "apple":
                break;
        }
    };

    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col lg={4} md={8}>
                    <Card>
                        <CardHeader>Login</CardHeader>
                        <CardBody>
                            <Outlet />
                        </CardBody>
                        <CardFooter className="text-center">
                            <ButtonGroup>
                                <Button
                                    onClick={() => handleLoginSocial("google")}
                                    color="primary"
                                    outline
                                >
                                    Google
                                </Button>
                                <Button
                                    color="primary"
                                    outline
                                    onClick={() => handleLoginSocial("facebook")}
                                >
                                    Facebook
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={() => handleLoginSocial("twitter")}
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
