import { Flex, Input, Heading, Button, useColorMode, useColorModeValue, Link } from "@chakra-ui/react";

const IndexPage = ()=>{

  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  
  return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6} textAlign="center">Log in</Heading>
          <Input placeholder="matheus@mail.com" mb={3} type="email" />
          <Input placeholder="*******"          mb={6} type="password" />
          <Button colorScheme="blue">Log in</Button>
          <Link mb={6} href="./Home">Entrar como visitante</Link>
          <Button colorScheme="purple" onClick={toggleColorMode}>
          Change theme
          </Button>
        </Flex>
      </Flex>
  )
} 

export default IndexPage