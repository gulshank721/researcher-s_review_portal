import { Box, Button, Container, Flex, Grid, GridItem, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import colleges from '../colleges.json' ;
import { useNavigate } from "react-router-dom";

export const SubmitReview = () => {
  const navigate = useNavigate();
  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState ] = useState();
  const [selectedUniversity, setSelectedUniversity ] = useState();
  const [universityList, setUniversityList] = useState([]);
  useEffect(()=>{
    const states =[];
    //getting list of state from colleges.json file
    colleges.forEach(element => {
        if(!states.includes(element.state)){
            // console.log(stateList.includes(element));
            states.push(element.state); 
        }
         
    });
    console.log("states ",stateList);
    setStateList(states)
  },[])
  const handleSelectState =(e)=>{
    console.log(e.target.value);
   setSelectedState(e.target.value)
  }
  const handleSelectUniversity =(e)=>{
    setSelectedUniversity(e.target.value)
  }
  useEffect(()=>{
    // console.log(stateList[i]);
    const universities = [];

    //accuring all the university of selectedState
    for(let i in colleges){
        if(colleges[i].state === selectedState && !universities.includes(colleges[i].university))
        universities.push(colleges[i].university);
    }
   console.log(universities);
   setUniversityList(universities)

  },[selectedState])

  const handleSubmit = () =>{
    if(selectedState !== '' && selectedUniversity !== ''){
      console.log('navigating');
      navigate('/submit_review/rate', { state: { selectedState: selectedState, selectedUniversity: selectedUniversity} })
    }
  }
  return (
    <Box m={'50px'} w={'50%'} p={4} mx={'auto'}>
      <Grid templateColumns='repeat(3, 1fr)' w={'full'} gap={2} my={4}>
        <GridItem colSpan={1}>
        <Text fontSize={"2xl"} fontStyle={"normal"} color={"gray.500"}>Select State</Text>
        </GridItem>
        <GridItem colSpan={2}>
        <Select onChange={handleSelectState} variant="outline" placeholder="Select State">
          {stateList.map((state, index)=>{
            return (
              // <Box key={index}>
              <option value={state}>{state}</option>
              // </Box>
            )
          })}
        </Select>
        </GridItem>
        
      </Grid>
      {/* University */}
      <Grid templateColumns='repeat(3, 1fr)'  w={'full'} gap={2} my={4}>
        <GridItem colSpan={1}>
        <Text fontSize={"2xl"} fontStyle={"normal"} color={"gray.500"}>Select University</Text>
        </GridItem>
        <GridItem colSpan={2}>
        <Select onChange={handleSelectUniversity}  variant="outline" placeholder="Select University">
          {universityList.map((state, index)=>{
            return (
              // <Box key={index}>
              <option value={state}>{state}</option>
              // </Box>
            )
          })}
        </Select>
        </GridItem>
        
        
      </Grid>
      <Flex justifyContent={'end'} w={'full'}>
      <Button onClick={handleSubmit} size={'lg'} w={'30%'}  colorScheme="blue"> Submit</Button>
      </Flex>
      
    </Box>
  );
};
