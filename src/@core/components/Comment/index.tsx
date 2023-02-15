import { Avatar, Box, IconButton, styled, Typography, TypographyProps } from '@mui/material'
import { grey, red } from '@mui/material/colors'
import * as React from 'react'
import { IComment, IPayloadLikeAction } from 'src/@core/redux/post/types'
import ReactTimeAgo from 'react-time-ago'
import { DotsHorizontal } from 'mdi-material-ui'

interface ICommentProps {
  item: IComment
  onLikeComment: (params: IPayloadLikeAction) => void
  onLoadChildComment: (params: { id: number; page: number; pattern: string }) => void
  parrent: IComment
}

const ActionText = styled(Typography, { shouldForwardProp: props => props !== 'active' })<
  TypographyProps & { active?: boolean }
>(({ theme, active }) => ({
  ...(active && {
    fontWeight: 500,
    color: theme.palette.primary.main
  }),
  cursor: 'pointer',
  marginInline: theme.spacing(1),
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

const Comment: React.FunctionComponent<ICommentProps> = ({ item, onLikeComment, onLoadChildComment, parrent }) => {
  const handleLikeComment = () => {
    let pattern: string
    if (parrent) {
      pattern = `post-${parrent.commentable_id}.comment.comment-${parrent.id}.children.comment-${item.id}.user_liked`
    } else {
      pattern = `post-${item.commentable_id}.comment.comment-${item.id}.user_liked`
    }
    onLikeComment({
      pattern,
      classable_id: item.classable_id,
      classable_type: item.classable_type,
      liked: item.user_liked
    })
  }

  return (
    <Box sx={{ display: 'flex', mb: 2 }}>
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
        <Box sx={{ marginInline: 2 }}>
          <Box sx={{ display: 'flex' }}>
            <ActionText variant='caption' active={item.user_liked} onClick={handleLikeComment}>
              Thích
            </ActionText>
            <ActionText variant='caption'>Bình luận</ActionText>
            <ActionText variant='caption'>
              <ReactTimeAgo date={Date.parse(item.created_at)} />
            </ActionText>
          </Box>
          {item.total_answers > 0 && (
            <ActionText
              variant='caption'
              onClick={() =>
                onLoadChildComment({
                  id: item.id,
                  page: item.meta.page,
                  pattern: `post-${item.commentable_id}.comment.comment-${item.id}`
                })
              }
            >
              {' '}
              &#9758; {item.total_answers} phản hồi
            </ActionText>
          )}
        </Box>

        {Object.values(item.children).length > 0 &&
          Object.values(item.children).map(comment => (
            <Comment
              key={`comment-${item.id}-child-${comment.id}`}
              item={comment}
              onLikeComment={onLikeComment}
              onLoadChildComment={onLoadChildComment}
              parrent={item}
            />
          ))}
      </Box>
    </Box>
  )
}
export default React.memo(Comment)
