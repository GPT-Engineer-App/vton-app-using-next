import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function Workflow() {
  return (
    <Box p={5}>
      <Heading>Workflow Page</Heading>
      <VStack spacing={4} align="start">
        <Text fontSize="lg">Step 1: Upload your image and cloth</Text>
        <Text fontSize="lg">Step 2: Click on the "Try On" button</Text>
        <Text fontSize="lg">Step 3: View the result of the virtual try-on</Text>
        <Text fontSize="lg">Step 4: If satisfied, you can download or share the result</Text>
      </VStack>
    </Box>
  );
}

export default Workflow;
