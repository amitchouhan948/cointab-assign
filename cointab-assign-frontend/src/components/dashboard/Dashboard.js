import { Box, Button, Flex } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [status,setStatus]=useState(true);
    const [loading,setLoading]=useState(false);


    const fetchUsers=async()=>{

        if(loading===true){

            console.log("Data is being fetched")
            return;
        }

        setLoading(true);
        console.log("loading status",loading);
        const res= await axios.get("http://localhost:8000/users");

        // console.log(res.data);

        if(res.data="Users Fetched in database: Done"){

            setStatus(false);
            setLoading(false);
            console.log("loading status",loading);

        }


    }

    const deleteDatabase=async()=>{

        const res= await axios.delete("http://localhost:8000/users");

       
        if(res.data="Users database deletion: Done"){

            setStatus(true);
            console.log(res.data)

        }

    }



  return (
   <>
   <Box width="100%" height="33rem" m="auto" bgColor="pink" mt='50px'>
    <Flex flexDir="column" rowGap='2rem' width="50%" m="auto" pt='8%' pb="5%">

        <Button bgColor="teal" color="white" onClick={fetchUsers} loadingText='Fetch Users' isLoading={loading} >Fetch Users</Button>
        <Button bgColor="red" color="white" onClick={deleteDatabase}>Delete Database</Button>
        <Link to="/users"><Button disabled={status} bgColor="teal" color="white" width='100%'>Users Detail</Button></Link>

    </Flex>
   </Box>
   </>
  )
}

export default Dashboard