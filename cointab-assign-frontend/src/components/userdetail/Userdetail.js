import { Box, Stack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Skeleton} from '@chakra-ui/react'


const Userdetail = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{

        fetchUsers();

    },[])

    const fetchUsers=async()=>{

        // console.log("fetching");

        const res= await axios.get("http://localhost:8000/users/details?page=1&filter=female");

        console.log("length",res.data.len,res.data.data)
        setData(res.data.data);

    }


  return (
   <>

        

    {/* <Stack >
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
    </Stack> */}
   
   </>
  )
}

export default Userdetail