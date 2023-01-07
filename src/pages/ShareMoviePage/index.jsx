import { useContext, useState } from "react";
import {
    Alert,
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
    Spinner,
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
    const [sumitting, setSubmitting] = useState(false)
    const [err, setErr] = useState('')
    const [formValue, setFormValue] = useState({
        youtubeUrl: ''
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setFormValue((prev) => ({ ...prev, [name]: value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (err) setErr('')
        setSubmitting(true)
        try {
            await shareVideo(formValue.youtubeUrl)
            setFormValue({
                youtubeUrl: ''
            })

        } catch (error) {
            setErr(error.message)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Row className="justify-content-center mt-3">
            <Col md={6} xs={8}>
                <Card>
                    <CardHeader>Share a youtube movie</CardHeader>
                    <CardBody>
                        <Form onSubmit={onSubmit}>
                            {err && <Alert color="danger">{err}</Alert>}
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

                                    <Button
                                        disabled={sumitting}
                                        block
                                        color="success"
                                        size="sm"
                                        className="mt-3">
                                        Share {sumitting && <Spinner size={'sm'} />}
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
