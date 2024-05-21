import { useState } from "react";
import { Container, VStack, Text, Input, Button, Image, Spinner, Box, useToast } from "@chakra-ui/react";
import { FaUpload, FaTshirt } from "react-icons/fa";

const TryOn = () => {
  const [image, setImage] = useState(null);
  const [cloth, setCloth] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleClothUpload = (e) => {
    setCloth(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image || !cloth) {
      toast({
        title: "Error",
        description: "Please upload both an image and a cloth.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("cloth", cloth);

      const response = await fetch("https://huggingface.co/spaces/yisol/IDM-VTON/api/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.output);
      toast({
        title: "Success",
        description: "API call successful.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: `Something went wrong. Please try again. Error: ${error.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Virtual Try-On</Text>
        <Box>
          <Input type="file" accept="image/*" onChange={handleImageUpload} display="none" id="image-upload" />
          <Button as="label" htmlFor="image-upload" leftIcon={<FaUpload />} colorScheme="teal">
            Upload Image
          </Button>
        </Box>
        <Box>
          <Input type="file" accept="image/*" onChange={handleClothUpload} display="none" id="cloth-upload" />
          <Button as="label" htmlFor="cloth-upload" leftIcon={<FaTshirt />} colorScheme="teal">
            Upload Cloth
          </Button>
        </Box>
        <Button onClick={handleSubmit} colorScheme="blue" isLoading={loading}>
          Try On
        </Button>
        {loading && <Spinner />}
        {result && (
          <Box>
            <Text fontSize="xl">Result:</Text>
            <Image src={result} alt="Result" />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default TryOn;
