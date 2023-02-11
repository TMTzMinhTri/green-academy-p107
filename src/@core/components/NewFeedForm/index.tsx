import { FunctionComponent } from 'react'
import { Avatar, Button, Card, CardActions, CardContent, IconButton, InputAdornment, TextField } from '@mui/material'
import { ImageArea } from 'mdi-material-ui'

const NewFeedForm: FunctionComponent = () => {
  return (
    <Card>
      <CardContent>
        <TextField
          multiline
          rows={4}
          sx={{
            width: '100%',
            '& .MuiInputAdornment-root': {
              marginTop: '-20px',
              alignItems: 'self-end'
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Avatar src=''>kg</Avatar>
              </InputAdornment>
            )
          }}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <IconButton size='large'>
          <ImageArea />
        </IconButton>
        <Button color='primary'>Đăng</Button>
      </CardActions>
    </Card>
  )
}
export default NewFeedForm
