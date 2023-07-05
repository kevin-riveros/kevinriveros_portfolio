import React from "react";
import {
  Box,
  Text,
  Container,
  ListItem,
  List,
  ListIcon,
  CheckboxIcon,
  Button,
  Image,
} from "@chakra-ui/react";
import { Montserrat } from "@next/font/google";
import { AiFillCheckSquare, AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";
import { HOTMART_LINK } from "@/static/links";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Ebook() {
  return (
    <Box pt="30px" pb="50px" id="about" bg="#292524" color="#FFFFFF">
      <Box>
        <Container maxW="container.lg">
          <Box
            display="flex"
            flexDirection={["column-reverse", "row", "row"]}
            alignItems="center"
            flexWrap="wrap"
          >
            <Box w={["100%", "50%", "50%"]}>
              <Text
                fontSize="26px"
                mt="20px"
                fontWeight="900"
                className={montserrat.className}
              >
                Ebook 📘
              </Text>
              <Text fontSize="14px" mb="30px" mt="30px">
                ¿Estás cansado de sentirte atrapado en el nivel junior? ¿Estás
                listo para dar el siguiente paso en tu carrera de desarrollo de
                software?
              </Text>
              <Text fontSize="14px" mb="30px">
                Te presento "Deja de ser un programador junior", el eBook
                definitivo para aquellos que buscan elevar su juego y hacerse
                notar en la industria tecnológica.
              </Text>

              <Box
                display="flex"
                flexDir="column"
                alignItems={["center", "flex-start"]}
              >
                <Link
                  href="https://www.kevincode.com/ebook/deja-de-ser-un-programador-junior"
                  target="_blank"
                >
                  <Button
                    bg="#03d277"
                    color="#000"
                    border="solid 1px #03d277"
                    fontSize="16px"
                    borderRadius="0px"
                    px="30px"
                    _hover={{
                      bg: "#03d277",
                      color: "#000",
                    }}
                  >
                    Ver libro
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              w={["100%", "50%", "50%"]}
              display="flex"
              justifyContent={["center", "flex-end"]}
              flexDirection="column"
              alignItems="center"
              pb={["50px", "0px", "0px"]}
            >
              <Image
                src="/assets/cover-book-3d.png"
                h="400px"
                w="300px"
                objectFit="contain"
              />
              <Text fontSize="14px" color="#999">
                73 páginas ‧ 2.2MB
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
