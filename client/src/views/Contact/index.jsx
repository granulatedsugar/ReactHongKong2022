import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { useState } from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    //TODO: Redux
  };
  console.log(inputs);

  return (
    <Container bg="#fff" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#fff"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid", color: "purple.400" }}
                        leftIcon={<MdPhone size="20px" />}
                      >
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid", color: "purple.400" }}
                        leftIcon={<MdEmail size="20px" />}
                      >
                        hello@ristorante.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid", color: "purple.400" }}
                        leftIcon={<MdLocationOn size="20px" />}
                      >
                        Burbank, California
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "purple.400", color: "#fff" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "purple.400", color: "#fff" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "purple.400", color: "#fff" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            name="name"
                            type="text"
                            size="md"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            name="email"
                            type="email"
                            size="md"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          bg={useColorModeValue("purple.400", "purple.800")}
                          color={useColorModeValue("white", "gray.800")}
                          _hover={{
                            bg: "purple.600",
                          }}
                          onClick={handleSubmit}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
