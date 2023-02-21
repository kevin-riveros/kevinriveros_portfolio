import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const cardsProjects = [
  {
    url: "https://kevincodigo.com/",
    image: "/assets/card1.png",
  },
  {
    url: "https://www.riffazo.com/",
    image: "/assets/card2.png",
  },
  {
    url: "https://www.petly.la/",
    image: "/assets/card3.png",
  },
  {
    url: "",
    image: "/assets/card4.png",
  },
  {
    url: "",
    image: "/assets/card5.png",
  },
  {
    url: "",
    image: "/assets/card6.png",
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
            Projects 👨‍💻
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
                    w={["100%", "100%", "100%"]}
                    h={["100px", "100px", "100px"]}
                    backgroundColor="black.100"
                    bgImage={`url(${card.image})`}
                    bgPosition="center"
                    bgSize="cover"
                    borderRadius="10px"
                    cursor={card.url ? "pointer" : "default"}
                  />
                  <Text>
                    PROJECT {card.image} - {card.url}
                  </Text>
                </a>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
