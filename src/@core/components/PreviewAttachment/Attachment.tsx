import { ButtonBase } from '@mui/material'
import React, { FunctionComponent } from 'react'
import { IImage } from 'src/@core/redux/product/types'
import ReactPlayer from 'react-player'

interface IAttachmentProps {
  image: IImage
}

const Attachment: FunctionComponent<IAttachmentProps> = ({ image }) => {
  const type = image.name.includes('mp4') ? 'video' : 'image'

  return (
    <ButtonBase sx={{ width: '100%', height: '100%' }}>
      {type === 'video' ? (
        <ReactPlayer url={image.name} width='100%' controls={true} height={'300px'} />
      ) : (
        <img src={image.name} loading='lazy' className='MuiImageListItem-img' alt={image.name} />
      )}
    </ButtonBase>
  )
}

export default Attachment
