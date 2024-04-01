import React from 'react'
import { Navbar } from './Navbar'
import { Box, Button, Center, HStack, Square, Text } from '@chakra-ui/react'
import { redirect, useNavigate } from 'react-router-dom'


export const Home = () => {
  const navigate = useNavigate();
  return (
    <Box p={6} bgColor={"blue.50"} h={'90vh'} w={'full'} textAlign={'center'}>
      <Text fontSize={'3xl'} fontFamily={'monospace'}>Hi Fellow!</Text>
      <Text fontFamily={'cursive'} border={'1px solid #111161'} bgColor={'white'} borderRadius={'10px'}  fontSize={'xl'} p={'100px'} textAlign={'Center'}>This site relies on students to enter their own ratings and also allows students to search for professor ratings submitted by others, to allow students to make informed decisions. There is no charge for the service, and the submissions are anonymous.</Text>

      <HStack mt={10} justifyContent={'center'}>
        <Button onClick={()=> navigate('/view_review')} colorScheme='blue'>
          View Review
        </Button>
        <Button onClick={()=> navigate('/submit_review')} colorScheme='blue' variant={'outline'}>
          Submit Review
        </Button>
      </HStack>

    </Box>
  )
}
