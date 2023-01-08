import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (<>
  
  <Flex width="100%" bgColor="black"  fontWeight="600" fontStyle="italic" justifyContent="space-between" p="1.5%" position={"fixed"} top="0" zIndex="2">
    <Link to="/" ><Text textAlign="center" ml="20px" color="#FFD700" fontSize="larger">Cointab</Text></Link>
    <Link to="/" ><Text textAlign="center" mr="20px" color="white">Developer Assignment</Text></Link>
  </Flex>
  
  </>
  )
}

export default Navbar