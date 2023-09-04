import SocialMediaLinks from '@/static/links'
import {
  Box,
  Text,
  Container,
  Avatar,
  Button,
  Icon,
  Heading
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub
} from 'react-icons/ai'
import Tilt from 'react-parallax-tilt'

export default function Hero () {
  return (
    <Box w='100%' bg='#000E17' color='#F2F4F3' pt='72px'>
      <Box>
        <Container maxW='container.md'>
          <Box
            w='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDir={['column', 'column', 'row']}
          >
            <Box
              w={['100%', '100%', '50%']}
              mt={['40px', '40px', '80px']}
              mb={['0px', '0px', '100px']}
            >
              <Heading
                mt='10px'
                fontWeight='900'
                fontSize='40px'
                as='h1'
                textAlign={['center', 'left']}
              >
                Kevin Riveros
              </Heading>
              <Text
                fontWeight='500'
                fontSize='28px'
                maxWidth='400px'
                textAlign={['center', 'left']}
                mt='10px'
              >
                Software Engineer
              </Text>
              {/**
              <Button
                mt="30px"
                bg="transparent"
                color="#96F550"
                border="solid 1px #96F550"
                fontSize="12px"
                borderRadius="0px"
                _hover={{
                  bg: "#96F550",
                  color: "#000",
                }}
              >
                Check out my Ebook!
              </Button>
               */}

              <Box
                display='flex'
                mt='20px'
                justifyContent={['center', 'flex-start']}
              >
                <a
                  href={SocialMediaLinks.linkedin}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button
                    bg='transparent'
                    padding='0px'
                    margin='0px'
                    whiteSpace='unset'
                    color='gray.500'
                    _hover={{
                      bg: 'transparent',
                      color: '#96F550'
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
                    padding='0px'
                    margin='0px'
                    whiteSpace='unset'
                    color='gray.500'
                    _hover={{
                      bg: 'transparent',
                      color: '#96F550'
                    }}
                  >
                    <Icon as={AiOutlineInstagram} w='30px' h='30px' />
                  </Button>
                </a>

                <a
                  href={SocialMediaLinks.github}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button
                    bg='transparent'
                    padding='0px'
                    margin='0px'
                    whiteSpace='unset'
                    color='gray.500'
                    _hover={{
                      bg: 'transparent',
                      color: '#96F550'
                    }}
                  >
                    <Icon as={AiFillGithub} w='30px' h='30px' />
                  </Button>
                </a>
              </Box>
            </Box>
            <Box
              w={['100%', '100%', '50%']}
              mt={['20px', '20px', '100px']}
              mb={['100px', '100px', '100px']}
              display='flex'
              justifyContent={['center', 'center', 'flex-end']}
            >
              <Tilt>
                <Avatar
                  color='black'
                  bg='black'
                  src='/assets/kevin-riveros-profile.png'
                  alt='Kevin Riveros - Software Engineer'
                  name='K R'
                  h={['200px', '200px', '300px']}
                  w={['200px', '200px', '300px']}
                  mt='40px'
                  border='solid 2px #021a2a'
                  cursor='pointer'
                  _hover={{
                    boxShadow: '0px 0px 100px -50px #024571'
                  }}
                />
              </Tilt>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
