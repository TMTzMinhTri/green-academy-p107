import {
  Paper,
  Button,
  Box,
  TableRow,
  Typography,
  Skeleton,
  Grid,
  TableContainer,
  Table,
  TableCell,
  TableBody
} from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { FunctionComponent } from 'react'
import Currency from 'src/@core/components/Currency'
import { selectListMarketPrice, selectMarketPriceLoading } from 'src/@core/redux/market/market.seletor'
import { useAppSelector } from 'src/@core/redux/store'

const MarketPrice: FunctionComponent = () => {
  const isLoading = useAppSelector(selectMarketPriceLoading)
  const marketPrices = useAppSelector(selectListMarketPrice)

  return (
    <Paper>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
        <Box>
          <Typography variant='subtitle2' fontWeight={'bold'}>
            Giá cả thị trường
          </Typography>
          <Typography variant='caption' component='div' color={'primary.main'}>
            08/02/2023, 05:03
          </Typography>
        </Box>
        <Button variant='contained' size='small' color='secondary'>
          <Typography variant='caption' component='div' color={'inherit'}>
            Xem thêm
          </Typography>
        </Button>
      </Box>
      {isLoading ? (
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12}>
            <Skeleton variant='rectangular' height={50} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant='rectangular' height={50} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant='rectangular' height={50} />
          </Grid>
        </Grid>
      ) : (
        marketPrices.length > 0 && (
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: grey[200],
                padding: 2
              }}
            >
              <Typography variant='subtitle2'>Tỉnh thành</Typography>
              <Typography variant='subtitle2'>{marketPrices[0].province_name}</Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table aria-label='simple table' size='small'>
                <TableBody>
                  {marketPrices.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell component='th' scope='row'>
                        {item.title}
                      </TableCell>
                      <TableCell align='right'>
                        {item.get_market_price_last.min_price ? (
                          <>
                            <Currency>{item.get_market_price_last.min_price}</Currency>/{item.unit}
                          </>
                        ) : (
                          '-'
                        )}
                      </TableCell>
                      <TableCell align='right'>
                        {item.get_market_price_last.max_price ? (
                          <>
                            <Currency>{item.get_market_price_last.max_price}</Currency>/{item.unit}
                          </>
                        ) : (
                          '-'
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )
      )}
    </Paper>
  )
}

export default MarketPrice
