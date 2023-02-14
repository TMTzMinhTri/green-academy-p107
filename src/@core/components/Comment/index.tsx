import { Avatar, Box, IconButton, Typography } from '@mui/material'
import { grey, red } from '@mui/material/colors'
import * as React from 'react'
import { IComment } from 'src/@core/redux/post/types'
import ReactTimeAgo from 'react-time-ago'
import { DotsHorizontal } from 'mdi-material-ui'

interface ICommentProps {
  item: IComment
}

const Comment: React.FunctionComponent<ICommentProps> = ({ item }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexShrink: 0, mt: 1 }}>
        <Avatar sx={{ bgcolor: red[500], width: 32, height: 32 }} aria-label='recipe'>
          R
        </Avatar>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ marginX: 2, backgroundColor: grey[200], px: 4, py: 2, borderRadius: 2 }}>
            <Box>
              <Typography variant='subtitle1' fontWeight={'bold'}>
                {item.user.name}
              </Typography>
              <Box>{item.content}</Box>
            </Box>
          </Box>
          <IconButton size='small'>
            <DotsHorizontal />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography variant='caption' m={1}>
            Thích
          </Typography>
          <Typography variant='caption' m={1}>
            Bình luận
          </Typography>
          <Typography variant='caption' m={1}>
            <ReactTimeAgo date={Date.parse(item.created_at)} />
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default Comment
