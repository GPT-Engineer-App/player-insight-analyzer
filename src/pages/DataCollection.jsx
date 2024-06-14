import { useState } from "react";
import { Box, Heading, Text, Input, Button, VStack } from "@chakra-ui/react";
import Papa from "papaparse";

const DataCollection = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setData(results.data);
          console.log(results.data);
        },
      });
    }
  };

  return (
    <Box p={4}>
      <Heading>Data Collection and Analysis</Heading>
      <Text mt={4}>Data will be manually generated and inputted into the platform with excel files, CSV.</Text>
      <VStack mt={4} spacing={4}>
        <Input type="file" accept=".csv" onChange={handleFileChange} />
        <Button onClick={handleFileUpload}>Upload File</Button>
      </VStack>
      {data.length > 0 && (
        <Box mt={4}>
          <Heading size="md">Parsed Data</Heading>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
};

export default DataCollection;