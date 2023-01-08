import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (<>
  
  <Box width="100%" bgColor="black" color="white" fontWeight="600" fontStyle="italic">
    <Link to="/" ><Text pt='1%' pb="1%" textAlign="center">Developer Assignment</Text></Link>
  </Box>
  
  </>
  )
}

export default Navbar