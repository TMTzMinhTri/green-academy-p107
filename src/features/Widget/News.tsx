import { Box, Card, CardActionArea, CardContent, Grid, IconButton, Paper, Skeleton, Typography } from '@mui/material'
import { FunctionComponent } from 'react'
import { Menu } from 'mdi-material-ui'
import { useAppSelector } from 'src/@core/redux/store'
import { selectActicleLoading, selectListActicle } from 'src/@core/redux/acticle/acticle.selector'
import { grey } from '@mui/material/colors'

const News: FunctionComponent = () => {
  const isLoading = useAppSelector(selectActicleLoading)
  const acticles = useAppSelector(selectListActicle)

  return (
    <Paper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 2,
          borderBottom: `1px solid ${grey[400]}`
        }}
      >
        <Typography variant='subtitle2' fontWeight={'bold'}>
          Tin Tức nổi bật
        </Typography>
        <IconButton>
          <Menu />
        </IconButton>
      </Box>
      {isLoading && (
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12}>
            <Skeleton variant='rectangular' height={100} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant='rectangular' height={100} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant='rectangular' height={100} />
          </Grid>
        </Grid>
      )}
      {acticles.length > 0 && (
        <Grid container spacing={2} padding={2}>
          {acticles.map(acticle => (
            <Grid key={acticle.id} item xs={12}>
              <Card
                variant='outlined'
                sx={{
                  background: `url(${acticle.image}), #00000080`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100px',
                  backgroundBlendMode: 'multiply'
                }}
              >
                <CardActionArea sx={{ height: '100%' }}>
                  <CardContent
                    sx={{
                      color: 'background.paper',
                      p: 4,
                      display: 'flex',
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {acticle.title}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Paper>
  )
}

export default News
