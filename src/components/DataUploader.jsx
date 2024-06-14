import React, { useState } from 'react';
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import Papa from 'papaparse';

const DataUploader = ({ onDataUpload }) => {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileType(e.target.files[0].name.split('.').pop());
  };

  const handleUpload = () => {
    if (fileType === 'csv') {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          onDataUpload(results.data);
        },
      });
    } else if (fileType === 'xlsx' || fileType === 'xls') {
      // Handle Excel file parsing here
      // You can use a library like SheetJS (xlsx) to parse Excel files
    } else {
      alert('Unsupported file type');
    }
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <VStack spacing={4}>
        <Input type="file" onChange={handleFileChange} />
        <Button onClick={handleUpload} colorScheme="blue">
          Upload
        </Button>
        {file && <Text>Selected file: {file.name}</Text>}
      </VStack>
    </Box>
  );
};

export default DataUploader;