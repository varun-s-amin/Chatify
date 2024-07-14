import {
  Box,
  Container,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Img,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/auth/login";
import Signup from "../components/auth/signup";
import logo from "../ChatiFy.png"; // Adjust the path accordingly

const homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        padding={3}
        bg={"#373A40"}
        width="100%"
        margin="30px 0 10px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Img
          src={logo}
          margin="10"
          padding="0"
          display="flex"
          justifyContent="center"
          alt="Chatify"
        />
      </Box>

      <Box
        Box
        d="flex"
        justifyContent="center"
        padding={3}
        bg={"#373A40"}
        width="100%"
        margin="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%" color="whitesmoke">
              Login
            </Tab>
            <Tab width="50%" color="whitesmoke">
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default homepage;
