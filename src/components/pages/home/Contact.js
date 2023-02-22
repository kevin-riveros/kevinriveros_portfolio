import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Contact() {
  return (
    <Box pt="30px" pb="50px" id="contact" bg="#1C1C1C" color="#FFFFFF">
      <Box>
        <Container maxW="container.sm">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              className={montserrat.className}
              fontSize="26px"
              textAlign="center"
              fontWeight="900"
            >
              Get in touch
            </Text>
            <Text textAlign="center" maxW="400px" fontSize="14px" mt="40px">
              Feel free to reach out if you have any questions, think we could
              work together, or just want to connect ✌️
            </Text>
            <Link href="mailto:kevinriverosg@gmail.com?subject=Hello Kevin. I wanna work with you! 😁">
              <Button
                mt="50px"
                bg="#03d277"
                color="#000"
                border="solid 1px #03d277"
                fontSize="12px"
                borderRadius="0px"
                _hover={{
                  bg: "#03d277",
                  color: "#000",
                }}
              >
                kevinriverosg@gmail.com
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
