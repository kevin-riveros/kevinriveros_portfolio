import { Box, Button, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { Montserrat } from '@next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Contact () {
  return (
    <Box pt='30px' pb='50px' id='contact' bg='#000E17' color='#F2F4F3'>
      <Box>
        <Container maxW='container.sm'>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Text
              className={montserrat.className}
              fontSize='26px'
              textAlign='center'
              fontWeight='900'
            >
              Get in touch
            </Text>
            <Text
              textAlign='center'
              maxW='400px'
              fontSize='14px'
              mt='40px'
              fontWeight='500'
            >
              Feel free to reach out if you have any questions, think we could
              work together, or just want to connect ✌️
            </Text>
            <Link href='mailto:kevinriverosg@gmail.com?subject=Hello Kevin. I wanna work with you! 😁'>
              <Button mt='50px' variant='primary' borderRadius='50px'>
                kevinriverosg@gmail.com
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
