import { signOut } from "firebase/auth"
import { Button } from "reactstrap"
import { auth } from "../../libs/firebase"

const HomePage = () => {
    const onLogout = async () => {
        await signOut(auth)
    }
    return <div><Button color="success" onClick={onLogout}>Logout</Button></div>
}
export default HomePage