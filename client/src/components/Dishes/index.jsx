import React from "react";
import { dishes } from "../../data/data";
import { Box, Image, Badge, HStack, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Dishes = () => {
  return (
    <>
      {dishes.map((dish) => (
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          m={"10px"}
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
    </>
  );
};

export default Dishes;
