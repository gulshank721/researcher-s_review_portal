import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = ({ setSelectedNav }) => {
  // const [selectedNav, setSelectedNav] = useState();

  const navList = [
    // { name: "Home", path: "/home" },
    { name: "View Reviews", path: "/view_review" },
    { name: "Submit Reviews", path: "/submit_review" },
  ];

  return (
    <Box>
      <Flex
        color={"white"}
        alignItems={"center"}
        bgColor={"blue.800"}
        justifyContent={"space-between"}
        py={4}
        px={2}
      >
        <Box>
          <Link to={'/'}>
            <Text fontFamily={"cursive"} fontSize={"2xl"} as={"b"}>
              Researchers Review System
            </Text>
          </Link>
        </Box>

        <Flex mr={"auto"} ms={10} justify={"center"}>
          {navList.map((navItem, index) => {
            return (
              <Box
                fontSize={"sm"}
                fontWeight={500}
                color={"white"}
                _hover={{
                  textDecoration: "underline",
                  color: "cyan",
                }}
                p={2}
                ms={4}
              >
                <Link to={navItem.path}>{navItem.name}</Link>
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Outlet />
    </Box>
  );
};
