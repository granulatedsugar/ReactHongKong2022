import React, { useState } from "react";
import { Box, Heading, Text, Stack, Image, Container } from "@chakra-ui/react";

import Dish from "../Dish";
import Comments from "../Comments";
import { testimonials } from "../../data/data";

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
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          margin={10}
          onClick={() => handleClick(dish)}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${dish.image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={dish.image}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {dish.category}
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {dish.name}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                ${dish.price}
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                $5
              </Text>
            </Stack>
          </Stack>
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
