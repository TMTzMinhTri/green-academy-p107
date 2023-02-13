import React, { FunctionComponent } from 'react'
import { IPost } from 'src/@core/redux/post/types'
import { youtubeGetID } from 'src/@core/utils/string'
import YouTube from 'react-youtube'
import { ImageList, ImageListItem } from '@mui/material'
import Attachment from './Attachment'

interface IPreviewAttachmentProps {
  item: IPost
}

const PreviewAttachment: FunctionComponent<IPreviewAttachmentProps> = ({ item }) => {
  const youtubeId = youtubeGetID(item.title)
  const onReady = event => {
    event.target.pauseVideo()
  }

  if (youtubeId) {
    return <YouTube videoId={youtubeId} onReady={onReady} />
  } else if (item.shared_post_id) return <div></div>
  else {
    const imageLength = item.images.length

    return (
      <>
        {imageLength === 1 && (
          <ImageList
            sx={{ width: 'auto', height: 'auto', overflow: 'hidden' }}
            variant='quilted'
            rowHeight={300}
            cols={1}
          >
            {item.images.map(image => {
              return (
                <ImageListItem key={image.id} cols={1}>
                  <Attachment image={image} />
                </ImageListItem>
              )
            })}
          </ImageList>
        )}
        {imageLength === 2 && (
          <ImageList
            sx={{ width: 'auto', height: 'auto', overflow: 'hidden' }}
            variant='quilted'
            rowHeight={300}
            cols={2}
          >
            {item.images.map(image => {
              return (
                <ImageListItem key={image.id} cols={1}>
                  <Attachment image={image} />
                </ImageListItem>
              )
            })}
          </ImageList>
        )}
        {imageLength > 3 && (
          <ImageList
            sx={{ width: 'auto', height: 'auto', overflow: 'hidden' }}
            variant='quilted'
            rowHeight={150}
            cols={3}
          >
            {item.images.slice(0, 3).map((image, index) => {
              return (
                <ImageListItem
                  key={image.id}
                  cols={index === 0 ? 2 : 1}
                  rows={index === 0 ? 2 : 1}
                  sx={{ position: 'relative' }}
                >
                  <Attachment image={image} />
                </ImageListItem>
              )
            })}
          </ImageList>
        )}
      </>
    )
  }
}

export default PreviewAttachment
