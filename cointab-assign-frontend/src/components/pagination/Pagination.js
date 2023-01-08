import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Pagination = ({setPage,page,length}) => {

    console.log("page,length",page,length)

    const [count,setCount]=useState(0);

    useEffect(()=>{

        pageCount();

    },[length])

    const pageCount=()=>{

        if(length>40){

            setCount(5)
        }
        else if(length>30){

            setCount(4)
        }
        else if(length>20){
            
            setCount(3)
        }
        else if(length>10){
            
            setCount(2)
        }
        else{
            setCount(1)
        }
    }

       let pages=new Array(count).fill(0).map((a,i)=><Button bgColor="black" color="white" disabled={page===(i+1)} onClick={()=>setPage(i+1)}>{i+1}</Button>)

  return (
    <>
    <Box width='100%' bgColor="grey.200">

        <Flex width='30%' m='auto'p=".5%" gap="4px" >

            <Button disabled={page===(1)} onClick={()=>setPage(page-1)} bgColor="black" color="white">◀ prev</Button>
            {pages}
            <Button disabled={page===(count)} onClick={()=>setPage(page+1)} bgColor="black" color="white">next ▶</Button>

        </Flex>
    </Box>
    </>
  )
}

export default Pagination