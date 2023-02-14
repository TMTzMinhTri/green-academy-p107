import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  TextField
} from '@mui/material'
import { FunctionComponent, useEffect, useState } from 'react'
import { IPost } from 'src/@core/redux/post/types'
import { Close } from 'mdi-material-ui'
import { Box } from '@mui/system'
import { red } from '@mui/material/colors'

interface ModalSharePostProps {
  handleClose: () => void
  post: IPost
  onSubmit: () => void
}

const ModalSharePost: FunctionComponent<ModalSharePostProps> = ({ post, onSubmit, handleClose }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (post) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [post])

  return (
    post && (
      <Dialog open={open} maxWidth='xs' fullWidth>
        <DialogTitle textAlign={'center'}>
          Viết Bài
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500]
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                R
              </Avatar>
            }
            title={post.user_name}
          />
          <CardContent>
            <TextField multiline rows={4} fullWidth placeholder='Bạn đang nghĩ gi?' />
          </CardContent>
        </Card>
        <Box></Box>
        <DialogActions>
          <Button variant='contained' fullWidth color={'info'} onClick={onSubmit}>
            Chia sẽ
          </Button>
        </DialogActions>
      </Dialog>
    )
  )
}
export default ModalSharePost
