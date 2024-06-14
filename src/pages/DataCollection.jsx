import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import DataUploader from "../components/DataUploader";

const DataCollection = () => {
  const handleDataUpload = (data) => {
    console.log("Uploaded data:", data);
    // Process the uploaded data here
  };

  return (
    <Box p={4}>
      <Heading>Data Collection and Analysis</Heading>
      <Text mt={4}>Data will be manually generated and inputted into the platform with excel files, CSV.</Text>
      <VStack mt={4} spacing={4}>
        <DataUploader onDataUpload={handleDataUpload} />
      </VStack>
    </Box>
  );
};

export default DataCollection;