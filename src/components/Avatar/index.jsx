import { useEffect, useState } from "react"
import { FormGroup, Input, Label } from "reactstrap"

const Avatar = ({ onChangeImage }) => {
    const [imageUrl, setImageUrl] = useState('/default_avatar.jpg')
    const onChange = (event) => {
        const { files } = event.target
        const path = URL.createObjectURL(files[0])
        setImageUrl(path)
        onChangeImage(files[0])
    }

    useEffect(() => {
        // chay khi component unmount khoi dom
        // truoc khi change state
        return () => {
            URL.revokeObjectURL(imageUrl)
        }
    }, [imageUrl])

    return (
        <FormGroup
            className="d-flex justify-content-center">
            <Label
                style={{ width: 100, height: 100 }}
                for="avatar" className="border rounded-circle">
                <img
                    src={imageUrl}
                    className="w-100 rounded-circle object-fit-cover"
                    width={100}
                    height={100} />
            </Label>
            <Input
                type="file"
                id="avatar"
                hidden
                accept=".jpg, .jpeg, .png"
                onChange={onChange} />
        </FormGroup>
    )
}
export default Avatar