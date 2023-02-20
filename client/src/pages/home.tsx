import React from 'react'
import { useList } from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components'

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={500} color="#11142d"> 
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
        <PieChart 
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={['#469d89', '#c7f3c5']}
        />
        <PieChart 
          title="Total customers"
          value={5684}
          series={[30, 70]}
          colors={['#c1121f', '#fbc3bc']}
        />
        <PieChart 
          title="Properties for Cities"
          value={555}
          series={[60, 40]}
          colors={['#ffc300', '#fcefb4']}
        />
      </Box>    

      <Stack mt='25px' width="100%" direction={{ xs: 'column', lg: 'row'}}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default Home