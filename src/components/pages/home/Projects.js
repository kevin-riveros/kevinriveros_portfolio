import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const cardsProjects = [
  {
    url: "",
    image: "/assets/riffazo1.png",
    title: "Riffazo",
    description: "",
    stack: "React, Node, Next, AWS",
  },
  {
    url: "",
    image: "/assets/mc3.png",
    title: "Minerclass",
    description: "",
    stack: "React, Node, Next, AWS",
  },
  {
    url: "",
    image: "/assets/ud3.png",
    title: "Udocz",
    description: "",
    stack: "React, Node, Next, AWS",
  },
  {
    url: "",
    image: "/assets/pt1.png",
    title: "Petly",
    description: "",
    stack: "React, Node, Next, AWS",
  },
];

export default function Projects() {
  return (
    <Box pt="30px" pb="50px" id="projects" bg="#1C1C1C" color="#FFFFFF">
      <Box>
        <Container maxW="container.sm">
          <Text
            fontWeight="900"
            fontSize="26px"
            className={montserrat.className}
          >
            Projects 🚀
          </Text>
          <Box
            display="grid"
            gridTemplateColumns={["1fr", "1fr", "1fr"]}
            gridGap="10px"
            mt="30px"
          >
            {cardsProjects.map((card) => {
              return (
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!card.url) {
                      e.preventDefault();
                    }
                  }}
                  key={card.url + card.image}
                >
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    mb={["20px", "20px", "20px"]}
                    pb={["20px", "20px", "20px"]}
                    borderBottom="solid 1px #636363"
                  >
                    <Box w={["100%", "100%", "50%"]}>
                      <Box
                        h={["180px", "180px", "150px"]}
                        w="100%"
                        maxWidth={["unset", "unset", "300px"]}
                        backgroundColor="black.100"
                        bgImage={`url(${card.image})`}
                        bgPosition="center"
                        bgSize="cover"
                        borderRadius="10px"
                        cursor={card.url ? "pointer" : "default"}
                      />
                    </Box>
                    <Box
                      w={["100%", "100%", "50%"]}
                      px={["0px", "0px", "20px"]}
                      mt={["20px", "20px", "unset"]}
                    >
                      <Text fontWeight="900" fontSize="18px" color="#03d277">
                        Project: {card.title}
                      </Text>
                      <Text fontSize="12px" mt="10px">
                        {card.description}
                      </Text>
                      <Text fontSize="12px" mt="10px">
                        Tech stack: {card.stack}
                      </Text>
                    </Box>
                  </Box>
                </a>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
