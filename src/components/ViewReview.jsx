import {
  Badge,
  Box,
  Center,
  Container,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useDebounce } from "../hooks/useDebounce";

export const ViewReview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //   {
  //     "_id": "63f2427890f449c301730944",
  //     "anonymity": true,
  //     "reviewerName": "Gulshan Kumar",
  //     "professorName": "Anil Pandey",
  //     "instituteName": "Ahmedabad University (Id: U-0122)",
  //     "instituteState": "Gujarat",
  //     "instituteCity": "patna",
  //     "researchArea": "java",
  //     "professorExpertise": "programming",
  //     "helpfullness": 3,
  //     "behaviour": 3,
  //     "youTimeSpend": "4 Years",
  //     "phdTimeToSpend": "5 Years",
  //     "msTimeToSpend": "4 Years",
  //     "recommend": "I don't know",
  //     "createdAt": "2023-02-19T15:38:32.559Z",
  //     "updatedAt": "2023-02-19T15:38:32.559Z",
  //     "__v": 0
  // }
  const debouncedSearchValue = useDebounce(searchQuery, 500);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://professor-review-server.onrender.com/reviews/search?q=${debouncedSearchValue}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearchValue]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://professor-review-server.onrender.com/reviews/`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        setReviews(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(reviews);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://professor-review-server.onrender.com/" +
          "reviews/search?q=" +
          searchQuery
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setReviews(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Box p={6} m={6} border={"1px"} borderRadius={5}>
        <Text fontSize={"3xl"}>
          Search for a Professor by Name, School, or State:
        </Text>
        <Flex gap={2} w={"50%"} my={5}>
          <InputGroup>
            <Input
              value={searchQuery}
              onChange={handleSearchQueryChange}
              variant="filled"
              placeholder="Search..."
            />
            {searchQuery !== "" && (
              <InputRightElement onClick={() => setSearchQuery("")}>
                <MdClear color="green.500" />
              </InputRightElement>
            )}
          </InputGroup>

          <IconButton
            aria-label="Search database"
            onClick={handleSearchClick}
            icon={<FiSearch />}
          />
        </Flex>
        <Box w={"500px"}>
          <Text fontSize={"sm"} fontWeight={400}>Found results: {reviews.length}</Text>
        </Box>
        <Box m={2} class="container m-2">
          <List w={"full"} h={"full"}>
            {isLoading ? (
              <Center>
                <Spinner />
              </Center>
            ) : (
              reviews &&
              reviews.length > 0 && (
                <>
                  {reviews.map((review, index) => {
                    return (
                      <List
                        display={"flex"}
                        justifyContent={"space-between"}
                        p={2}
                        my={2}
                        border={"1px solid gray"}
                        borderRadius={"10px"}
                        boxShadow={"lg"}
                        _hover={{
                          background: "rgba(215, 241, 247, 0.4)",
                        }}
                      >
                        <Box ms={2} me={"auto"}>
                          <Text as="b" fontSize={"2xl"}>
                            {review?.professorName}
                          </Text>
                          <Box
                            fontSize={"xs"}
                            lineHeight={"3"}
                            fontWeight={"semibold"}
                            color={"gray.400"}
                          >
                            <Text>Institute - {review?.instituteName} </Text>
                            <Text>
                              Institute State - {review?.instituteState}{" "}
                            </Text>
                            <Text>
                              Intitute City - {review?.instituteCity}{" "}
                            </Text>
                          </Box>
                        </Box>
                        <Flex height={"max-content"} gap={2}>
                          <Badge variant="outline" colorScheme="blue">
                            helpfullness: {review?.helpfullness}
                          </Badge>
                          <Badge variant="solid" colorScheme="cyan">
                            Recommendation: {review?.recommend}
                          </Badge>
                        </Flex>
                      </List>
                    );
                  })}
                </>
              )
            )}
            {}
          </List>
        </Box>
      </Box>
    </div>
  );
};
