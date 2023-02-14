// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import NewFeedForm from 'src/@core/components/NewFeedForm'
import { postActions } from 'src/@core/redux/post/post.slice'
import { useAppDispatch } from 'src/@core/redux/store'
import NewFeeds from 'src/features/Newfeeds'

const Dashboard = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(postActions.fetchListPost())
  }, [dispatch])

  return (
    <Grid container spacing={4}>
      <Grid item md={12}>
        <NewFeedForm />
      </Grid>
      <Grid item xs={12} md={12}>
        <NewFeeds />
      </Grid>
    </Grid>
  )
}

export default Dashboard
