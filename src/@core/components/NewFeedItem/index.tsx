import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  Typography
} from '@mui/material'
import { IPost } from 'src/@core/redux/post/types'
import { DotsHorizontal, ThumbUp, ThumbUpOutline, MessageOutline, ShareOutline, MedalOutline } from 'mdi-material-ui'
import { blue, grey, red } from '@mui/material/colors'
import ReactTimeAgo from 'react-time-ago'
import PreviewAttachment from '../PreviewAttachment'
import { useDispatch } from 'react-redux'
import { postActions } from 'src/@core/redux/post/post.slice'

interface INewFeedItemProps {
  item: IPost
}

function NewFeedItem({ item }: INewFeedItemProps) {
  const dispatch = useDispatch()

  const onClickPost = () => {
    dispatch(
      postActions.likePost({
        id: item.id,
        liked: item.user_liked,
        classable_id: item.classable_id,
        classable_type: item.classable_type
      })
    )
  }

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <Box display={'flex'}>
              <Box textAlign={'right'} marginRight={2}>
                <Typography>Bậc hội viên</Typography>
                <Typography>{item.member_rate}</Typography>
              </Box>
              <IconButton aria-label='settings'>
                <DotsHorizontal />
              </IconButton>
            </Box>
          }
          title={
            <Box display={'flex'} alignItems='center'>
              <Typography marginRight={2} variant='subtitle1'>
                {item.user_name}
              </Typography>
              <Chip label={item.user_level} variant='outlined' size='small' color='success' />
            </Box>
          }
          subheader={<ReactTimeAgo date={Date.parse(item.created_at)} />}
        />
        <CardContent>
          <PreviewAttachment item={item} />
        </CardContent>
        <Box px={4} py={2} justifyContent={'space-between'} display='flex'>
          <Box display={'flex'} alignItems='center'>
            <Box
              sx={{
                backgroundColor: blue[600],
                borderRadius: '50%',
                padding: 1,
                mr: 1,
                width: 20,
                height: 20
              }}
            >
              <ThumbUp sx={{ fontSize: 12, color: 'common.white', display: 'block', margin: 'auto' }} />
            </Box>
            {item.user_liked ? `Bạn và ${item.total_like} người khác` : item.total_like}
          </Box>
          <Typography variant='subtitle1' component={'span'}>
            {item.total_comment} bình luận
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: grey[100] }}>
          <ButtonGroup variant='text' aria-label='text button group' fullWidth>
            <Button onClick={onClickPost}>
              <Typography
                variant='subtitle1'
                component={'span'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 11,
                  textTransform: 'capitalize',
                  ...(item.user_liked && { color: blue[600] })
                }}
              >
                {item.user_liked ? (
                  <ThumbUp fontSize='small' sx={{ mr: 1 }} />
                ) : (
                  <ThumbUpOutline fontSize='small' sx={{ mr: 1 }} />
                )}
                Thích
              </Typography>
            </Button>
            <Button>
              <Typography
                variant='subtitle1'
                component={'span'}
                sx={{ display: 'flex', alignItems: 'center', fontSize: 11, textTransform: 'capitalize' }}
              >
                <MedalOutline fontSize='small' sx={{ mr: 1 }} />
                Tặng điểm
              </Typography>
            </Button>
            <Button>
              <Typography
                variant='subtitle1'
                component={'span'}
                sx={{ display: 'flex', alignItems: 'center', fontSize: 11, textTransform: 'capitalize' }}
              >
                <MessageOutline fontSize='small' sx={{ mr: 1 }} />
                Bình luận
              </Typography>
            </Button>
            <Button>
              <Typography
                variant='subtitle1'
                component={'span'}
                sx={{ display: 'flex', alignItems: 'center', fontSize: 11, textTransform: 'capitalize' }}
              >
                <ShareOutline fontSize='medium' sx={{ mr: 1 }} />
                Chia sẽ
              </Typography>
            </Button>
          </ButtonGroup>
        </Box>
      </Card>
    </Grid>
  )
}

export default NewFeedItem
