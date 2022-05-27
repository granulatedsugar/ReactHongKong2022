import React, { useState } from "react";
import { Box, Image, Badge, Container } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Dish from "../Dish";
import Comments from "../Comments";
import { testimonials } from "../../data/data";
import { Link } from "react-router-dom";

const Dishes = (dishes) => {
  const [selected, setSelected] = useState("");

  const handleClick = (dish) => {
    setSelected(dish);
  };

  console.log(selected);

  return (
    <>
      {dishes.dishes.map((dish) => (
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          m={"10px"}
          onClick={() => handleClick(dish)}
        >
          <Image src={dish.image} alt={dish.name} />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {dish.label}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {dish.category}
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              textAlign={"left"}
            >
              {dish.name}
            </Box>

            <Box textAlign={"left"}>${dish.price}</Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < dish.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {dish.review ? dish.review : "No Reviews"}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      {selected ? (
        <Container minWidth={"100%"}>
          <Dish dish={selected} />
          <Comments
            comment={testimonials.filter(
              (comment) => comment.dishId === selected.id
            )}
          />
        </Container>
      ) : (
        <Container minWidth={"100%"}></Container>
      )}
    </>
  );
};

export default Dishes;
