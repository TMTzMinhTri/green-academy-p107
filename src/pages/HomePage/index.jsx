import { useContext, useEffect } from "react"
import { Button, Container } from "reactstrap"
import { YoutubeContext } from "../../contexts/YoutubeContext"

const HomePage = () => {
    const { getYoutubeVideos } = useContext(YoutubeContext)

    useEffect(() => {
        getYoutubeVideos()
    }, [])

    return <Container>
        <Button color="success" onClick={() => { }}>Create User</Button>
    </Container>
}
export default HomePage