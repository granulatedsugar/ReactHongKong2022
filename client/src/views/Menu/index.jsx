import { Container, Flex, HStack } from "@chakra-ui/react";
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
      <Hero />
      <Container maxW={"100%"} padding={"50px"}>
        <Flex justify={"center"} wrap={"wrap"} align={"center"}>
          <Dishes key={dishes.id} dishes={dishes} />
        </Flex>
      </Container>
    </>
  );
};

export default Menu;
