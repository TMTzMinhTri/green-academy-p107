// ** MUI Imports
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import NewFeedForm from 'src/@core/components/NewFeedForm'
import { globalActions } from 'src/@core/redux/global/global.slice'
import { useAppDispatch } from 'src/@core/redux/store'

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(globalActions.fetchNavigation())
  }
  
return (
    <>
      <Grid container spacing={4}>
        <Grid item md={12}>
          <NewFeedForm />
        </Grid>
        <Grid item md={12}>
          <Button onClick={onClick}>test</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
