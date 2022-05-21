import { Container, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Dishes from "../../components/Dishes";
import Hero from "../../components/Hero";

const Menu = () => {
  const componentDidMount = () => {
    console.log("Component did mount");
  };

  console.log(componentDidMount());
  return (
    <>
      <Hero />
      <Container maxW={"100%"} padding={"50px"}>
        <Flex justify={"center"} wrap={"wrap"} align={"center"}>
          <Dishes />
        </Flex>
      </Container>
    </>
  );
};

export default Menu;
