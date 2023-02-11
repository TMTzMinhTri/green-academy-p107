import React, { FunctionComponent } from 'react'
import {
  Box,
  Button,
  ButtonProps,
  CircularProgress,
  Grid,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TypographyProps
} from '@mui/material'
import { useAppSelector } from 'src/@core/redux/store'
import { selectCurrentWeather, selectLoadingCurrentWeather } from 'src/@core/redux/weather/weather.selector'
import Image from 'next/image'

const TemperatureText = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 'bold',
  '&:after': {
    content: '"°C"'
  }
}))

const ReadMoreButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#ffffff20',
  borderRadius: '10px',
  color: 'black',
  '&:hover': {
    backgroundColor: 'initial'
  }
}))

const Weather: FunctionComponent = () => {
  const isLoading = useAppSelector(selectLoadingCurrentWeather)
  const currentWeather = useAppSelector(selectCurrentWeather)

  return (
    <Paper
      sx={{
        position: 'relative',
        background: 'url(/images/background/weather.jpg),linear-gradient(to bottom, #02ab6480 0%, #fca9074f 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'darken',
        p: 2,
        '& .MuiTypography-root': {
          color: 'black'
        }
      }}
    >
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress color='secondary' />
        </Box>
      ) : (
        <>
          <Grid container height={'100px'} justifyContent='center' alignItems={'center'}>
            <Grid item xs={4} height='100%'>
              <Box position={'relative'} height='70%'>
                <Image
                  src={`${process.env.API_DOMAIN}/images/weather_icons/${currentWeather.current_date.weather_status_icon}.png`}
                  alt='weather icon'
                  style={{ objectFit: 'contain' }}
                  fill
                />
              </Box>
              <Typography variant='subtitle2' textAlign={'center'} fontWeight='bold'>
                {currentWeather.current_date.weather_status}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
              <TemperatureText variant='h4'>{Math.round(currentWeather.current_date.temp)}</TemperatureText>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
              <Typography variant='subtitle2'>Độ ẩm {Math.round(currentWeather.current_date.humidity)}%</Typography>
              <Typography variant='subtitle1'>
                {`~${Math.round(currentWeather?.current_date?.temp_min)}~${Math.round(
                  currentWeather?.current_date?.temp_max
                )}`}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} my={2}>
              <TableContainer component={Paper} sx={{ backgroundColor: '#ffffff20', border: '0.5px solid #ffffff20' }}>
                <Table aria-label='simple table'>
                  <TableBody>
                    {currentWeather?.current_date.current_weather_group.slice(0, 3).map((weather, index) => (
                      <TableRow key={index}>
                        <TableCell align='left'>
                          <Typography>{weather.hour}:00</Typography>
                        </TableCell>
                        <TableCell align='right' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                          <Box sx={{ position: 'relative', height: '28px', width: '28px', marginRight: 2 }}>
                            <Image
                              src={`${process.env.API_DOMAIN}/images/weather_icons/${weather.weather_status_icon}.png`}
                              alt='weather icon'
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </Box>
                          <TemperatureText>{Math.round(weather.temp)}</TemperatureText>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12}>
              <ReadMoreButton variant='contained' fullWidth>
                Xem thêm
              </ReadMoreButton>
            </Grid>
          </Grid>
        </>
      )}
    </Paper>
  )
}

export default Weather
