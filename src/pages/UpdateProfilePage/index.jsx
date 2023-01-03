import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import Avatar from "../../components/Avatar"
import { AuthContext } from "../../contexts/AuthContext"

const UpdateProfilePage = () => {
    const { updateProfile, currentUser } = useContext(AuthContext)
    const [formValue, setFormValue] = useState({
        displayName: "",
        photo: null
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setFormValue(prev => ({ ...prev, [name]: value }))
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        await updateProfile(formValue.displayName, formValue.photo)
    }
    const onChangeImage = (file) => {
        setFormValue(prev => ({ ...prev, photo: file }))
    }

    console.log(formValue)

    if (currentUser.displayName
        && currentUser.photoURL) {
        return <Navigate to='/' />
    }
    return <Container>
        <Row className="justify-content-center">
            <Col md={6} >
                <Card className="mt-4">
                    <CardBody>
                        <Form onSubmit={onSubmit}>
                            <Avatar onChangeImage={onChangeImage} />
                            <FormGroup>
                                <Input
                                    id="displayName"
                                    name="displayName"
                                    placeholder="input display name"
                                    onChange={onChange}
                                    value={formValue.displayName}
                                />
                            </FormGroup>
                            <Button color="success" block>Update</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
}

export default UpdateProfilePage