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
    <Box w="100%" bg="#1C1C1C" color="#FFFFFF">
      <Box>
        <Box bg="#181A1B">
          <Container maxW="container.lg">
            <Box display="flex" justifyContent="space-between" py="10px">
              <Box
                w="50px"
                h="50px"
                borderRadius="6px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="900"
                fontSize="22px"
              >
                KR_
              </Box>
              <Box display="flex" alignItems="center">
                <Link href="/#about">
                  <a>
                    <Text mr="20px" fontWeight="500" fontSize="14px">
                      About Me
                    </Text>
                  </a>
                </Link>
                <Link href="/#projects">
                  <a>
                    <Text mr="20px" fontWeight="500" fontSize="14px">
                      Projects
                    </Text>
                  </a>
                </Link>
                <Link href="/#blog">
                  <a>
                    <Text mr="20px" fontWeight="500" fontSize="14px">
                      Blog
                    </Text>
                  </a>
                </Link>
                <Link href="/#contact">
                  <a>
                    <Button
                      fontSize="14px"
                      bg="#03d277"
                      _hover={{ backgroundColor: "#03d277" }}
                    >
                      Contact
                    </Button>
                  </a>
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
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
              mt="100px"
              mb={["0px", "0px", "200px"]}
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
                Checkout my Ebook!
              </Button>
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
              mt={["50px", "0px", "100px"]}
              mb={["100px", "100px", "200px"]}
              display="flex"
              justifyContent={["center", "center", "flex-end"]}
            >
              <Tilt>
                <Avatar
                  src="/assets/profile.jpeg"
                  alt=""
                  name="K R"
                  bg="#c4c4c4"
                  h={["200px", "200px", "300px"]}
                  w={["200px", "200px", "300px"]}
                  mt="40px"
                  border="solid 4px #05CE78"
                />
              </Tilt>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
