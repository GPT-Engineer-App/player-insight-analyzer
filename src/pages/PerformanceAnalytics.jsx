import { Box, Heading, Text, VStack, HStack, Divider, Image } from "@chakra-ui/react";

const PerformanceAnalytics = () => {
  const playerPerformanceData = {
    statistics: {
      matchesPlayed: 45,
      goals: 13,
      assists: 22,
      passAccuracy: "85%",
      tackles: 30,
    },
    gameFootage: [
      { title: "Match 1 Highlights", videoUrl: "/path/to/video1.mp4" },
      { title: "Match 2 Highlights", videoUrl: "/path/to/video2.mp4" },
    ],
    trainingData: [
      { title: "Training Session 1", videoUrl: "/path/to/training1.mp4" },
      { title: "Training Session 2", videoUrl: "/path/to/training2.mp4" },
    ],
    skillAssessment: {
      technical: "Excellent",
      tactical: "Good",
      mental: "Strong",
      physical: "Very Good",
    },
  };

  return (
    <Box p={4}>
      <Heading>Performance Analytics</Heading>
      <Text mt={4}>Track and analyze player performance data, including statistics, game footage, and training data.</Text>
      
      <Divider my={4} />
      
      <Heading size="md">Statistics</Heading>
      <HStack mt={2} spacing={8}>
        <VStack align="start">
          <Text><strong>Matches Played:</strong> {playerPerformanceData.statistics.matchesPlayed}</Text>
          <Text><strong>Goals:</strong> {playerPerformanceData.statistics.goals}</Text>
          <Text><strong>Assists:</strong> {playerPerformanceData.statistics.assists}</Text>
        </VStack>
        <VStack align="start">
          <Text><strong>Pass Accuracy:</strong> {playerPerformanceData.statistics.passAccuracy}</Text>
          <Text><strong>Tackles:</strong> {playerPerformanceData.statistics.tackles}</Text>
        </VStack>
      </HStack>
      
      <Divider my={4} />
      
      <Heading size="md">Game Footage</Heading>
      <VStack align="start" mt={2}>
        {playerPerformanceData.gameFootage.map((footage, index) => (
          <Box key={index}>
            <Text><strong>{footage.title}</strong></Text>
            <video width="320" height="240" controls>
              <source src={footage.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Divider my={2} />
          </Box>
        ))}
      </VStack>
      
      <Divider my={4} />
      
      <Heading size="md">Training Data</Heading>
      <VStack align="start" mt={2}>
        {playerPerformanceData.trainingData.map((training, index) => (
          <Box key={index}>
            <Text><strong>{training.title}</strong></Text>
            <video width="320" height="240" controls>
              <source src={training.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Divider my={2} />
          </Box>
        ))}
      </VStack>
      
      <Divider my={4} />
      
      <Heading size="md">Skill Assessment</Heading>
      <VStack align="start" mt={2}>
        <Text><strong>Technical:</strong> {playerPerformanceData.skillAssessment.technical}</Text>
        <Text><strong>Tactical:</strong> {playerPerformanceData.skillAssessment.tactical}</Text>
        <Text><strong>Mental:</strong> {playerPerformanceData.skillAssessment.mental}</Text>
        <Text><strong>Physical:</strong> {playerPerformanceData.skillAssessment.physical}</Text>
      </VStack>
    </Box>
  );
};

export default PerformanceAnalytics;