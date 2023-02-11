import { useRouter } from "next/router"

const PreviewAttach: React.FunctionComponent = () => {
	const router = useRouter()
	const { postId, imageId } = router.query
	
return <div>

		Auth page{postId}, {imageId}
	</div>
}
export default PreviewAttach