import { createContext } from "react";
import { config } from "../config";

export const YoutubeContext = createContext({
    shareVideo: (url) => { }
})

const youtubeUrlPattern = /^((http|https)\:\/\/)?(www\.youtube\.com|youtu\.?be)\/((watch\?v=)?([a-zA-Z0-9]{11}))(&.*)*$/

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=OkETCKdM0EI&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

const YoutubeProvider = ({ children }) => {
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
        return new Promise((resolve, reject) => {
            fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${config.firebase.apiKey}`)
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
        const youtubeData = await validateVideoId(videoId)


        console.log(youtubeData)

    }

    const value = { shareVideo }
    return <YoutubeContext.Provider value={value}>
        {children}
    </YoutubeContext.Provider>
}
export default YoutubeProvider