import { FunctionComponent, useState } from 'react'
import { Grid } from '@mui/material'
import { useAppSelector } from 'src/@core/redux/store'
import { selectListPost, selectLoadingListPost } from 'src/@core/redux/post/post.selector'
import NewFeedItem from 'src/@core/components/NewFeedItem'
import { useDispatch } from 'react-redux'
import { postActions } from 'src/@core/redux/post/post.slice'
import { IPost } from 'src/@core/redux/post/types'
import ModalSharePoint from './ModalSharePoint'
import ModalSharePost from './ModalSharePost'
import NewfeedLoading from './NewfeedLoading'

const NewFeeds: FunctionComponent = () => {
  const [currentPost, setCurrentPost] = useState<Record<string, IPost>>({})
  const dispatch = useDispatch()
  const posts = useAppSelector(selectListPost)
  const isLoading = useAppSelector(selectLoadingListPost)

  const handleClickLikePost = (item: IPost) => {
    dispatch(
      postActions.likePost({
        id: item.id,
        liked: item.user_liked,
        classable_id: item.classable_id,
        classable_type: item.classable_type
      })
    )
  }

  const toggleModalPostList = ({ item, type }: { item: IPost; type: string }) => {
    setCurrentPost({ [type]: item })
  }

  const handleSharePoint = () => {
    setCurrentPost({})
  }

  const handleSharePost = () => {
    setCurrentPost({})
  }

  const handleFetchComments = ({ item }: { item: IPost }) => {
    const params: IParamsPolymorphic = {
      classable_id: item.classable_id,
      classable_type: item.classable_type
    }
    dispatch(postActions.fetchCommentsInPost({ ...params, id: item.id }))
  }
  const createNewComment = formValue => {
    console.log(formValue)
  }

  return (
    <Grid container rowGap={4}>
      {isLoading ? (
        <NewfeedLoading />
      ) : (
        <>
          {posts.map((post, index) => {
            return (
              <NewFeedItem
                item={post}
                key={`post-${index}`}
                onFetchComments={handleFetchComments}
                onClickLikePost={handleClickLikePost}
                onClickSharePoint={toggleModalPostList}
                onCickSharePost={toggleModalPostList}
                onSubmitComment={createNewComment}
              />
            )
          })}
          <ModalSharePoint
            onSubmit={handleSharePoint}
            post={currentPost['share-point']}
            handleClose={() => setCurrentPost({})}
          />
          <ModalSharePost
            post={currentPost['share-post']}
            handleClose={() => setCurrentPost({})}
            onSubmit={handleSharePost}
          />
        </>
      )}
    </Grid>
  )
}

export default NewFeeds
