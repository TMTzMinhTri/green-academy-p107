import { addDoc, collection, getDocs, setDoc } from "firebase/firestore";
import { createContext, useContext } from "react";
import { config } from "../config";
import { db } from "../libs/firebase";
import { AuthContext } from "./AuthContext";

export const YoutubeContext = createContext({
    shareVideo: (url) => { },
    getYoutubeVideos: () => { }
})

const youtubeUrlPattern = /^((http|https)\:\/\/)?(www\.youtube\.com|youtu\.?be)\/((watch\?v=)?([a-zA-Z0-9]{11}))(&.*)*$/

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=OkETCKdM0EI&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

const YoutubeProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext)
    const getYoutubeVideos = async () => {
        const videosRef = collection(db, 'videos')
        const querySnapshot = await getDocs(videosRef)
        const youtubeData = []
        querySnapshot.forEach((doc) => {
            youtubeData.push(doc.data())
        })

        const videoIds = youtubeData.map((item) => item.videoId)
        const videos = await validateVideoId(videoIds)
        console.log(videos)
    }


    const getVideoIdFromYoutubeUrl = (url) => {
        return new Promise((resolve, reject) => {
            const result = url.match(youtubeUrlPattern)
            if (result === null) {
                reject(new Error('Youtube url not valid'))
            }
            resolve(result[6])
        })
    }
    const validateVideoId = (videoId) => {
        let idParams = ''
        if (typeof videoId === 'string') {
            idParams = `&id=${videoId}`
        } else {
            idParams = videoId
                .map(item => `&id=${item}`)
                .join('')
        }
        return new Promise((resolve, reject) => {
            fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet${idParams}&key=${config.firebase.apiKey}`)
                .then((response) => response.json())
                .then(data => {
                    if (data.items.length === 0) {
                        reject(new Error('Youtube video not found'))
                    }
                    resolve(data)
                })
        })
    }
    const shareVideo = async (url) => {
        const videoId = await getVideoIdFromYoutubeUrl(url)
        await validateVideoId(videoId)

        const videoRef = collection(db, 'videos')
        const data = {
            videoId,
            createBy: currentUser.uid
        }
        await addDoc(videoRef, data)
    }

    const value = { shareVideo, getYoutubeVideos }
    return <YoutubeContext.Provider value={value}>
        {children}
    </YoutubeContext.Provider>
}
export default YoutubeProvider