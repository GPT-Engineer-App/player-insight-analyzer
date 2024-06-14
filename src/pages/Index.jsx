import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to the Player Performance Platform</Heading>
        <Text>Monitor and access players across various leagues and competitions.</Text>
      </VStack>
    </Container>
  );
};

export default Index;