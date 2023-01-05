import { useContext, useState } from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from "reactstrap";
import { YoutubeContext } from "../../contexts/YoutubeContext";


// https://www.youtube.com/watch?v=OkETCKdM0EI
// https://www.youtube.com/
// https://youtu.be/OkETCKdM0EI
// https://www.youtube.com/embed/OkETCKdM0EI123123


//validate url valid ? id video : error
//validate video id ( goi api len youtube de validation) ? save : error


const ShareMoviePage = () => {
    const { shareVideo } = useContext(YoutubeContext)
    const [formValue, setFormValue] = useState({
        youtubeUrl: ''
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setFormValue((prev) => ({ ...prev, [name]: value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        shareVideo(formValue.youtubeUrl)
    }

    return (
        <Row className="justify-content-center mt-3">
            <Col md={6} xs={8}>
                <Card>
                    <CardHeader>Share a youtube movie</CardHeader>
                    <CardBody>
                        <Form onSubmit={onSubmit}>
                            <FormGroup row>
                                <Label for="youtubeUrl" sm={3}>
                                    Youtube Url
                                </Label>
                                <Col sm={8}>
                                    <Input
                                        id="youtubeUrl"
                                        name="youtubeUrl"
                                        onChange={onChange}
                                        value={formValue.youtubeUrl}
                                        placeholder="Youtube url ...."
                                        type="url"
                                    />

                                    <Button block color="success" size="sm" className="mt-3">
                                        Share
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default ShareMoviePage;
