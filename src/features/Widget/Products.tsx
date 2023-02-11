import {
  IconButton,
  Paper,
  Typography,
  Box,
  Skeleton,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { Menu, MapMarkerCheckOutline } from 'mdi-material-ui'
import React, { FunctionComponent } from 'react'
import Currency from 'src/@core/components/Currency'
import { selectListProduct, selectProductLoading } from 'src/@core/redux/product/product.selector'
import { useAppSelector } from 'src/@core/redux/store'

const Products: FunctionComponent = () => {
  const isLoading = useAppSelector(selectProductLoading)
  const products = useAppSelector(selectListProduct)

  const renderlistProduct = () => {
    if (products.length === 0)
      return (
        <Box>
          <Typography>Trống</Typography>
        </Box>
      )

    return products.map(product => {
      return (
        <Grid item xs={6} key={`product-${product.id}`}>
          <Card variant='outlined'>
            <CardActionArea>
              <CardMedia component='img' height='100' image={product?.images[0]?.name || ''} alt='green iguana' />
              <CardContent sx={{ padding: 2 }}>
                <Typography
                  noWrap
                  sx={{ overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold', textTransform: 'capitalize' }}
                  variant='subtitle2'
                >
                  {product.title}
                </Typography>
                <Typography variant='caption' display='flex'>
                  <MapMarkerCheckOutline fontSize='small' />
                  {product.province_name}
                </Typography>
                <Typography variant='caption' component='div'>
                  Giá lẻ
                </Typography>
                <Typography variant='caption' component='div' color='error.light' fontWeight={'bold'}>
                  {product.retail_price > 0 ? (
                    <>
                      <Currency>{product.retail_price}</Currency>/{product.unit_name}
                    </>
                  ) : (
                    'Liên hệ'
                  )}
                </Typography>
                <Typography variant='caption' component='div'>
                  Giá sỉ
                </Typography>
                <Typography variant='caption' component='div' color='error.light' fontWeight={'bold'}>
                  {product.wholesale_price > 0 ? (
                    <>
                      <Currency>{product.wholesale_price}</Currency>/{product.unit_name}
                    </>
                  ) : (
                    'Liên hệ'
                  )}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      )
    })
  }

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
          Lựa chọn hôm nay
        </Typography>
        <IconButton>
          <Menu />
        </IconButton>
      </Box>
      <Box sx={{ padding: 2 }}>
        {isLoading ? (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Skeleton height={200} variant='rectangular' />
            </Grid>
            <Grid item xs={6}>
              <Skeleton height={200} variant='rectangular' />
            </Grid>
            <Grid item xs={6}>
              <Skeleton height={200} variant='rectangular' />
            </Grid>
            <Grid item xs={6}>
              <Skeleton height={200} variant='rectangular' />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            {renderlistProduct()}
          </Grid>
        )}
      </Box>
    </Paper>
  )
}

export default Products
