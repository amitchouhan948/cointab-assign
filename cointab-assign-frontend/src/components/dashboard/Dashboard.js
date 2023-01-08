import { Box, Button, Flex } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'


const Dashboard = () => {

    const [status,setStatus]=useState(true);
    const [loading,setLoading]=useState(false);
    const toast = useToast()


    const fetchUsers=async()=>{

        if(loading===true){
            toast({
                title: `Users Data is being fetched, please wait`,
                status: "warning",
                isClosable: true,
              })
            console.log("Data is being fetched")
            return;
        }

        setLoading(true);
        console.log("loading status",loading);
        const res= await axios.get("https://cointabdeveoperbackend-production.up.railway.app/users");

        // console.log(res.data);

        if(res.data="Users Fetched in database: Done"){

            setStatus(false);
            setLoading(false);
            console.log("loading status",loading);

        }


    }

    const deleteDatabase=async()=>{

        const res= await axios.delete("https://cointabdeveoperbackend-production.up.railway.app/users");

       
        if(res.data="Users database deletion: Done"){

            setStatus(true);
            console.log(res.data)

        }

    }



  return (
   <>
   <Box width="100%" height="33rem" m="auto" bgColor="pink" mt='50px'>
    <Flex flexDir="column" rowGap='2rem' width="50%" m="auto" pt='8%' pb="5%">

        <Button bgColor="teal" color="white" onClick={fetchUsers}  >Fetch Users</Button>
        <Button bgColor="red" color="white" onClick={deleteDatabase}>Delete Database</Button>
        <Link to="/users"><Button disabled={status} bgColor="teal" color="white" width='100%'>Users Detail</Button></Link>

    </Flex>
   </Box>
   </>
  )
}

export default Dashboard