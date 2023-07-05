import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  MenuIcon,
  Text,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavbarComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="#2b2b2b"
      color="white"
      position="fixed"
      zIndex="1"
      w="100%"
      top="0px"
      left="0px"
    >
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
          <Box display={["none", "none", "flex"]} alignItems="center">
            <Link href="/#about">
              <Text mr="20px" fontWeight="500" fontSize="14px">
                About Me
              </Text>
            </Link>
            <Link href="/#projects">
              <Text mr="20px" fontWeight="500" fontSize="14px">
                Projects
              </Text>
            </Link>
            <Link href="https://www.kevincode.com/blog" target="_blank">
              <Text mr="20px" fontWeight="500" fontSize="14px">
                Blog
              </Text>
            </Link>
            <Link href="/#contact">
              <Text mr="20px" fontWeight="500" fontSize="14px">
                Contact
              </Text>
            </Link>
            <Link href="/assets/KevinRiveros-Resume-2023.pdf" target="_blank">
              <Button
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
                Resume
              </Button>
            </Link>
          </Box>
          <Box display={["flex", "flex", "none"]} alignItems="center">
            <Button
              onClick={onOpen}
              bg="transparent"
              _hover={{ bg: "transparent" }}
            >
              <Icon as={AiOutlineMenu} />
            </Button>
          </Box>
        </Box>
      </Container>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#2b2b2b" color="white">
          <DrawerCloseButton />

          <DrawerBody pt="50px">
            <Box display="flex" flexDirection="column">
              <Link href="/#about" onClick={onClose}>
                <Text mr="20px" fontWeight="500" fontSize="20px">
                  About Me
                </Text>
              </Link>
              <Link href="/#projects" onClick={onClose}>
                <Text mr="20px" fontWeight="500" fontSize="20px" mt="20px">
                  Projects
                </Text>
              </Link>
              <Link href="https://www.kevincode.com/blog" target="_blank">
                <Text mr="20px" fontWeight="500" fontSize="20px" mt="20px">
                  Blog
                </Text>
              </Link>
              <Link href="/#contact" onClick={onClose}>
                <Text mr="20px" fontWeight="500" fontSize="20px" mt="20px">
                  Contact
                </Text>
              </Link>
              <Link href="/assets/KevinRiveros-Resume-2023.pdf" target="_blank">
                <Button
                  mt="20px"
                  bg="transparent"
                  color="#03d277"
                  border="solid 1px #03d277"
                  fontSize="20px"
                  borderRadius="0px"
                  _hover={{
                    bg: "#03d277",
                    color: "#000",
                  }}
                >
                  Resume
                </Button>
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
