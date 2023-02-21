import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Blog() {
  return (
    <Box pt="30px" pb="50px" id="blog" bg="#1C1C1C" color="#FFFFFF">
      <Box>
        <Container maxW="container.sm">
          <Text
            fontWeight="900"
            fontSize="26px"
            className={montserrat.className}
          >
            Blog 📝
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
