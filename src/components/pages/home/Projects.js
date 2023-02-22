import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const cardsProjects = [
  {
    url: "",
    image: "/assets/riffazo1.png",
    title: "Riffazo",
    description:
      "This is a raffle website. Im responsible for the development of the web application, maintenance, and implementation of new functionalities. ",
    stack: "React js, Next js, Node, AWS, Styled Components.",
  },
  {
    url: "",
    image: "/assets/mc3.png",
    title: "Minerclass",
    description:
      "Minerclass is a comprehensive learning management system designed specifically for the mining industry. The platform offers a wide range of training courses and resources to help mining professionals acquire the skills and knowledge they need to succeed in their careers. From safety training to technical skills development.",
    stack: "React js, Javascript, Chakra UI, Typescript, Redux.",
  },
  {
    url: "",
    image: "/assets/ud3.png",
    title: "Udocz",
    description:
      "This is an education Startup that aims to help students with study materials such as books, notes, and solved test. I was responsible for maintaining the web and implementing new functionalities.",
    stack: "React js, Ruby on Rails, Node, Next, AWS, Postgress, Elasticsearch",
  },
  {
    url: "",
    image: "/assets/pt1.png",
    title: "Petly",
    description:
      "Petly is a pet-focused company dedicated to improving the lives of pets and their owners. With a mission to provide high-quality and innovative pet products, Petly offers a range of solutions for pet care, including food, toys, and accessories.",
    stack: "React js, Next js, Heroku, Firebase, Postgress.",
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
                      <Text fontSize="12px" mt="10px" fontWeight="300">
                        {card.description}
                      </Text>
                      <Text fontSize="12px" mt="10px" fontWeight="500">
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
