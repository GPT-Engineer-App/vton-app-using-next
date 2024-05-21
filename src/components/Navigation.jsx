import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Flex as="nav" p="4" bg="teal.500" color="white">
      <Box>
        <Button as={Link} to="/" variant="link" color="white" mr="4">
          Home
        </Button>
        <Button as={Link} to="/tryon" variant="link" color="white">
          Try On
        </Button>
      </Box>
    </Flex>
  );
}

export default Navigation;
