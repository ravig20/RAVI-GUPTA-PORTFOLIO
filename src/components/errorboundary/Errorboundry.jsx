import { Button, Heading, Text, VStack } from "@chakra-ui/react";

const  ErrorFallback=({error})=> {
  
    return (
      <VStack justifyContent="center" >
        <Heading>Something went wrong:</Heading>
        <Text>{error.message}</Text>
        <Button  onClick={() => window.location.reload(false)}>Try again</Button>
      </VStack>
    )
  }


export default ErrorFallback;