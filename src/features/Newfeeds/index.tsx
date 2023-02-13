import { FunctionComponent } from 'react'
import { Grid } from '@mui/material'
import { useAppSelector } from 'src/@core/redux/store'
import { selectListPost } from 'src/@core/redux/post/post.selector'
import NewFeedItem from 'src/@core/components/NewFeedItem'

const NewFeeds: FunctionComponent = () => {
  const posts = useAppSelector(selectListPost)

  return (
    <Grid container rowGap={4}>
      {posts.map((post, index) => {
        return <NewFeedItem item={post} key={`post-${index}`} />
      })}
    </Grid>
  )
}

export default NewFeeds
