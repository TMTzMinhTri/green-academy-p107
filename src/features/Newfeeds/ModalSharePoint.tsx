import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { FunctionComponent, useEffect } from 'react'
import { IPost } from 'src/@core/redux/post/types'

interface ModalSharePointProps {
  handleClose: () => void
  post: IPost
  onSubmit: () => void
}

const ModalSharePoint: FunctionComponent<ModalSharePointProps> = ({ handleClose, post, onSubmit }) => {
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    if (post) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [post])

  return (
    post && (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='xs'>
        <DialogTitle>Tặng điểm cho {post.user_name}</DialogTitle>
        <DialogContent>
          <TextField
            hiddenLabel
            autoFocus
            size='small'
            placeholder='Nhập số điểm cần tặng'
            margin='dense'
            id='name'
            fullWidth
            variant='filled'
          />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color={'info'} onClick={onSubmit}>
            Tặng
          </Button>
        </DialogActions>
      </Dialog>
    )
  )
}
export default ModalSharePoint
