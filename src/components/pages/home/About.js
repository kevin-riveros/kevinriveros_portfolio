import React from 'react'
import {
  Box,
  Text,
  Container,
  ListItem,
  List,
  ListIcon,
  CheckboxIcon
} from '@chakra-ui/react'
import { Montserrat } from '@next/font/google'
import { AiFillCheckSquare, AiOutlineCheck } from 'react-icons/ai'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function About () {
  return (
    <Box id='about' bg='#000E17' color='#F2F4F3'>
      <Box bg='rgba(217, 217, 217, 0.06)' pt='30px' pb='50px'>
        <Container maxW='container.sm'>
          <Text
            fontSize='26px'
            mt='20px'
            fontWeight='900'
            className={montserrat.className}
          >
            About Me 👨‍💻
          </Text>
          <Text fontSize='16px' mt='20px'>
            Hello! 👋 I’m Kevin Riveros, a Software developer based in Lima,
            Perú 🇵🇪 who enjoys building things that live on the internet. I
            develop exceptional websites and web apps that provide intuitive,
            pixel-perfect user interfaces with efficient and modern frameworks.
          </Text>
          <Text fontSize='16px' mt='20px'>
            Here are a few technologies I’ve been working with recently:
          </Text>
          <List spacing={3} mt='20px'>
            <ListItem>
              <ListIcon as={AiOutlineCheck} color='#96F550' />
              ReactJS / NextJS
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCheck} color='#96F550' />
              Javascript
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCheck} color='#96F550' />
              NodeJS
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCheck} color='#96F550' />
              Firebase
            </ListItem>
          </List>
        </Container>
      </Box>
    </Box>
  )
}
