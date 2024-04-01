import { useLocation } from "react-router-dom";

import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Button,
  Text,
  Divider,
  GridItem,
  Grid,
} from "@chakra-ui/react";

export const RateProfessorForm = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [anonymity, setAnonymity] = useState(true);
  const [reviewerName, setReviewerName] = useState("");
  const [professorName, setProfessorName] = useState("");
  const [instituteName, setInstituteName] = useState(
    location.state.selectedUniversity
  );
  const [instituteState, setInstituteState] = useState(
    location.state.selectedState
  );
  const [instituteCity, setInstituteCity] = useState("");
  const [researchArea, setResearchArea] = useState("");
  const [professorExpertise, setProfessorExpertise] = useState("");
  const [helpfulness, setHelpfulness] = useState(0);
  const [behaviour, setBehaviour] = useState(0);
  const [youTimeSpend, setYouTimeSpend] = useState("");
  const [phdTimeToSpend, setPhdTimeToSpend] = useState("");
  const [msTimeToSpend, setMsTimeToSpend] = useState("");
  const [recommend, setRecommend] = useState("");

  const handleFormSubmit = async(e) => {
    
    e.preventDefault();

    const formData = {
      anonymity: anonymity === 'false'? false: true,
      reviewerName: reviewerName,
      professorName: professorName,
      instituteName: instituteName,
      instituteState: instituteState,
      instituteCity: instituteCity,
      researchArea: researchArea,
      professorExpertise: professorExpertise,
      helpfulness: helpfulness,
      behaviour: behaviour,
      youTimeSpend: youTimeSpend,
      phdTimeToSpend: phdTimeToSpend,
      msTimeToSpend: msTimeToSpend,
      recommend: recommend
    };
    setIsLoading(true);
    try {
      const response = await fetch('https://professor-review-server.onrender.com/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Review submitted successfully.");
        // Redirect or perform any other action upon successful submission
      } else {
        throw new Error('Error ' + response.status + ': ' + response.statusText);
      }
    } catch (error) {
      alert('Review could not be submitted: ' + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Text fontSize={"2xl"} color={"gray.400"}>
        Rate Your Professor
      </Text>
      <Divider my={2} />
      <Box w={"70%"} px={10} my={4}>
        <form onSubmit={handleFormSubmit}>
          <FormControl id="anonymity" my={1} display={"inline"} isRequired>
            <FormLabel>Do you want to submit an anonymous review?</FormLabel>
            <RadioGroup
              onChange={setAnonymity}
              value={anonymity}
            >
              <Stack direction="row">
                <Radio name="anonymity" value='false'>
                  No, its okay to have my identity open
                </Radio>
                <Radio name="anonymity" value='true' >
                  Yes, I want to be anonymous
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl
            id="reviewerName"
            my={1}
            isRequired
          >
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>
                  Your name? (it will be hidden if you chose to maintain
                  anonymity)
                </FormLabel>
              </GridItem>
              <GridItem>
                <Input
                  type="text"
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                />
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="professorName" my={1} isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>Professor's Name</FormLabel>
              </GridItem>
              <GridItem>
                <Input
                  type="text"
                  value={professorName}
                  onChange={(e) => setProfessorName(e.target.value)}
                />
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="instituteName" my={1} isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>Institute Name</FormLabel>
              </GridItem>
              <GridItem>
                <Input
                  type="text"
                  value={instituteName}
                  disabled
                  onChange={(e) => setInstituteName(e.target.value)}
                />
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="instituteState" my={1}  isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>Institute State</FormLabel>
              </GridItem>
              <GridItem>
                <Input
                  type="text"
                  value={instituteState}
                  disabled
                  onChange={(e) => setInstituteName(e.target.value)}
                />
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="instituteCity" my={1}  isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>Institute City</FormLabel>
              </GridItem>
              <GridItem>
                <Input
                  type="text"
                  value={instituteCity}
                  onChange={(e) => setInstituteCity(e.target.value)}
                />
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="researchArea" my={1}  isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>Research area you worked on</FormLabel>
              </GridItem>
              <GridItem>
                <Input
                  type="text"
                  value={researchArea}
                  onChange={(e) => setResearchArea(e.target.value)}
                />
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl
            id="professorExpertise"
            my={1}
            isRequired
          >
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>Area of expertise of the professor</FormLabel>
              </GridItem>
              <GridItem>
                <Input
                  type="text"
                  value={professorExpertise}
                  onChange={(e) => setProfessorExpertise(e.target.value)}
                />
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="helpfulness" my={1}  isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>
                  How helpful is the professor in providing technical feedback
                  on a research subject?
                </FormLabel>
              </GridItem>
              <GridItem>
                <Select
                  value={helpfulness}
                  onChange={(e) => setHelpfulness(parseInt(e.target.value))}
                >
                  {[...Array(6).keys()].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Select>
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="behaviour" my={1}  isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>
                  How is the behavior of the professor with his/her research
                  scholars?
                </FormLabel>
              </GridItem>
              <GridItem>
                <Select
                  value={behaviour}
                  onChange={(e) => setBehaviour(parseInt(e.target.value))}
                >
                  {[...Array(6).keys()].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Select>
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="youTimeSpend" my={1}  isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>
                  How much time have you spent working with the professor?
                </FormLabel>
              </GridItem>
              <GridItem>
                <Select
                  value={youTimeSpend}
                  onChange={(e) => setYouTimeSpend(e.target.value)}
                  placeholder="Select"
                >
                  {Array.from({ length: 11 }, (_, i) => i + 1).map((year) => (
                    <option key={year} value={`${year} Years`}>
                      {year} Years
                    </option>
                  ))}
                </Select>
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="phdTimeToSpend" my={1}  isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>
                  How much time does a PhD research scholar spend working under
                  the professor?
                </FormLabel>
              </GridItem>
              <GridItem>
                <Select
                  value={phdTimeToSpend}
                  onChange={(e) => setPhdTimeToSpend(e.target.value)}
                  placeholder="Select"
                >
                  {Array.from({ length: 8 }, (_, i) => i + 3).map((year) => (
                    <option key={year} value={`${year} Years`}>
                      {year} Years
                    </option>
                  ))}
                </Select>
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="msTimeToSpend" my={1}  isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>
                  How much time does a MS student spend working under the
                  professor?
                </FormLabel>
              </GridItem>
              <GridItem>
                <Select
                  value={msTimeToSpend}
                  onChange={(e) => setMsTimeToSpend(e.target.value)}
                  placeholder="Select"
                >
                  {[2, 3, 4, 5].map((year) => (
                    <option key={year} value={`${year} Years`}>
                      {year} Years
                    </option>
                  ))}
                </Select>
              </GridItem>
            </Grid>
          </FormControl>

          <FormControl id="recommend" my={1} isRequired>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <FormLabel>
                  Would you recommend this professor to someone to work as a
                  research scholar?
                </FormLabel>
              </GridItem>
              <GridItem>
                <Select
                  value={recommend}
                  onChange={(e) => setRecommend(e.target.value)}
                  placeholder="Select"
                >
                  {["Strong NO", "NO", "I don't know", "YES", "Strong YES"].map(
                    (option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    )
                  )}
                </Select>
              </GridItem>
            </Grid>
          </FormControl>

          <Button isLoading={isLoading} w={'200px'}  colorScheme="blue" px={6} my={4} type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};
