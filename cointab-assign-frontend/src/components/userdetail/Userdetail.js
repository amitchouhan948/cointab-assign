import { Box, Flex, Image, Select, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Skeleton} from '@chakra-ui/react'
import Pagination from '../pagination/Pagination';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const Userdetail = () => {

    const [data,setData]=useState(false);
    const [length,setLength]=useState(0);
    const [page,setPage]=useState(1);
    const [gender,setGender]=useState("all")


    useEffect(()=>{

        fetchUsers(gender);

    },[page])

    const fetchUsers=async(gender)=>{

        console.log("filter",gender);
        const res= await axios.get(`https://cointabdeveoperbackend-production.up.railway.app/users/details?page=${page}&filter=${gender}`);

        // console.log("length",res.data.len,res.data.data)
        setData(res.data.data);
        setLength(res.data.len)

    }


  return (
   <>
    <Box width="100%" bgColor="gray.200" mt="68px">
        <Flex alignItems="center" width='40%'m="auto" >
            <Text mr="10px" >Filter </Text>
            <Select onChange={(e)=>{
                setGender(e.target.value)
                setPage(1)
                fetchUsers(e.target.value)}} bgColor="white" p="2%" >
                <option value="">-- select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="all">All</option>
            </Select>
        </Flex>
    </Box>

    { data ? <>
            <Box bgColor="pink">
            <TableContainer width='95%' m="auto" mb="80px">
            <Table variant='simple'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
            <Tr>
                <Th>S.no</Th>
                <Th>Name</Th>
                <Th>Age</Th>
                <Th>Gender</Th>
                <Th>Country</Th>
                <Th>Contact no.</Th>
                <Th>Email</Th>
                
            </Tr>
            </Thead>
    <Tbody>
        {data && data.map((el,index)=>{

            return (<>
             <Tr>
                <Td>{index+1}</Td>
                <Td><Flex alignItems="center"><Image src={el.picture.thumbnail} alt='image' borderRadius="50px" mr="8px" />{el.name.title} {el.name.first} {el.name.last}</Flex></Td>
                <Td>{el.dob.age}</Td>
                <Td>{el.gender}</Td>
                <Td>{el.location.country}</Td>
                <Td>{el.phone}</Td>
                <Td>{el.email}</Td>
                
             </Tr>
            
            </>)


        })}
      
      
    </Tbody>
    
  </Table>
</TableContainer>

            </Box>
    </> : <Stack >
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
        </Stack>}


    
   




    {/* PAGINATION COMPONENT CALL */}

    <Box width="100%" position="fixed" bottom="0" zIndex={2} bgColor="grey.400">
   <Pagination setPage={setPage} page={page} length={length} />
   </Box>
   </>
  )
}

export default Userdetail