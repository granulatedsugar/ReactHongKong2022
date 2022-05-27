import { Container, Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import Dishes from "../../components/Dishes";
import Hero from "../../components/Hero";
import { dishes } from "../../data/data";

const Menu = () => {
  const componentDidMount = () => {
    console.log("Component did mount");
  };

  return (
    <>
      <Container maxW={"100%"} padding={"50px"}>
        <Box>
          <Heading mb={4}>Main Menu</Heading>
          <Text fontSize="xl">
            Availability may differ at different locations.
          </Text>
          <Button size="lg" colorScheme="purple" mt="24px">
            Create a free account
          </Button>
        </Box>
      </Container>

      <Container maxW={"100%"} padding={"50px"}>
        <Flex justify={"center"} wrap={"wrap"} align={"center"}>
          <Dishes key={dishes.id} dishes={dishes} />
        </Flex>
      </Container>
    </>
  );
};

export default Menu;
