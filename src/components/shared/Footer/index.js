import SocialMediaLinks from '@/static/links'
import { Box, Button, Text, Container, Icon } from '@chakra-ui/react'
import React from 'react'

import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub
} from 'react-icons/ai'

export default function FooterComponent () {
  return (
    <Box bg='#000E17' color='#F2F4F3'>
      <Box bg='rgba(217, 217, 217, 0.06)' py='20px'>
        <Container maxW='container.lg'>
          <Box display='flex' mt='40px' justifyContent='center' pb='50px'>
            <a
              href={SocialMediaLinks.linkedin}
              target='_blank'
              rel='noreferrer'
            >
              <Button
                bg='transparent'
                color='white'
                _hover={{
                  bg: 'transparent',
                  color: 'primary.500'
                }}
              >
                <Icon as={AiFillLinkedin} w='30px' h='30px' />
              </Button>
            </a>
            <a
              href={SocialMediaLinks.instagram}
              target='_blank'
              rel='noreferrer'
            >
              <Button
                bg='transparent'
                color='white'
                _hover={{
                  bg: 'transparent',
                  color: 'primary.500'
                }}
              >
                <Icon as={AiOutlineInstagram} w='30px' h='30px' />
              </Button>
            </a>
            {/*
              <a href={SocialMediaLinks.youtube} target="_blank" rel="noreferrer">
              <Button
                bg="transparent"
                color="white"
                _hover={{
                  bg: "transparent",
                  color: "#96F550",
                }}
              >
                <Icon as={AiFillYoutube} w="30px" h="30px" />
              </Button>
            </a>
            <a href={SocialMediaLinks.github} target="_blank" rel="noreferrer">
              <Button
                bg="transparent"
                color="white"
                _hover={{
                  bg: "transparent",
                  color: "#96F550",
                }}
              >
                <Icon as={AiFillGithub} w="30px" h="30px" />
              </Button>
            </a>
              */}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
