import SocialMediaLinks from "@/static/links";
import { Box, Text, Container, Avatar, Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import { Fira_Code } from "@next/font/google";

const inter = Fira_Code({
  subsets: ["latin"],
});
export default function Hero() {
  return (
    <Box w="100%" bg="#1C1C1C" color="#FFFFFF" pt="72px">
      <Box>
        <Container maxW="container.md">
          <Box
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir={["column", "column", "row"]}
          >
            <Box
              w={["100%", "100%", "50%"]}
              mt={["40px", "40px", "100px"]}
              mb={["0px", "0px", "100px"]}
            >
              <Text
                className={inter.className}
                fontWeight="300"
                fontSize="12px"
                color="#05CE78"
              >
                Hi, my name is
              </Text>
              <Text mt="10px" fontWeight="900" fontSize="40px" as="h1">
                Kevin Riveros
              </Text>
              <Text
                fontWeight="500"
                fontSize="12px"
                maxWidth="400px"
                textAlign="left"
                mt="20px"
              >
                I&apos;m a front-end engineer from Lima, Perú. I design, create
                and support websites and applications for clients and for fun. I
                love using modern technology to create exceptional user
                experiences, and always strive to create high quality products.
              </Text>
              {/**
              <Button
                mt="30px"
                bg="transparent"
                color="#03d277"
                border="solid 1px #03d277"
                fontSize="12px"
                borderRadius="0px"
                _hover={{
                  bg: "#03d277",
                  color: "#000",
                }}
              >
                Check out my Ebook!
              </Button>
               */}

              <Box display="flex" mt="20px">
                <a
                  href={SocialMediaLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    bg="transparent"
                    padding="0px"
                    margin="0px"
                    whiteSpace="unset"
                    color="gray.500"
                    _hover={{
                      bg: "transparent",
                      color: "#03d277",
                    }}
                  >
                    <Icon as={AiFillLinkedin} w="30px" h="30px" />
                  </Button>
                </a>
                <a
                  href={SocialMediaLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    bg="transparent"
                    padding="0px"
                    margin="0px"
                    whiteSpace="unset"
                    color="gray.500"
                    _hover={{
                      bg: "transparent",
                      color: "#03d277",
                    }}
                  >
                    <Icon as={AiOutlineInstagram} w="30px" h="30px" />
                  </Button>
                </a>

                <a
                  href={SocialMediaLinks.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    bg="transparent"
                    padding="0px"
                    margin="0px"
                    whiteSpace="unset"
                    color="gray.500"
                    _hover={{
                      bg: "transparent",
                      color: "#03d277",
                    }}
                  >
                    <Icon as={AiFillGithub} w="30px" h="30px" />
                  </Button>
                </a>
              </Box>
            </Box>
            <Box
              w={["100%", "100%", "50%"]}
              mt={["20px", "20px", "100px"]}
              mb={["20px", "100px", "100px"]}
              display="flex"
              justifyContent={["center", "center", "flex-end"]}
            >
              <Tilt>
                <Avatar
                  color="#05CE78"
                  bg="#05CE78"
                  src="/assets/profile.jpeg"
                  alt=""
                  name="K R"
                  h={["200px", "200px", "300px"]}
                  w={["200px", "200px", "300px"]}
                  mt="40px"
                  border="solid 4px #05CE78"
                  cursor="pointer"
                  _hover={{
                    boxShadow: "0px 0px 100px -50px #03d277",
                  }}
                />
              </Tilt>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
