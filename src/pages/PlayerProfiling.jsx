import { Box, Heading, Text, Image, VStack, HStack, Divider } from "@chakra-ui/react";

const PlayerProfiling = () => {
  const playerData = {
    name: "John Doe",
    bio: "A talented midfielder with exceptional vision and passing skills.",
    image: "/path/to/player-image.jpg",
    dateOfBirth: "January 1, 1990",
    position: "Midfielder",
    height: "6'0\"",
    weight: "170 lbs",
    preferredFoot: "Right",
    currentClub: "FC Awesome",
    playingHistory: [
      { year: "2020", team: "Team A", appearances: 20, goals: 5, assists: 10 },
      { year: "2021", team: "Team B", appearances: 25, goals: 8, assists: 12 },
    ],
    performanceData: {
      matchesPlayed: 45,
      goals: 13,
      assists: 22,
      passAccuracy: "85%",
      tackles: 30,
    },
  };

  return (
    <Box p={4}>
      <Heading>{playerData.name}</Heading>
      <Text mt={2}>{playerData.bio}</Text>
      <Image src={playerData.image} alt={playerData.name} mt={4} boxSize="200px" objectFit="cover" />
      <Divider my={4} />
      <Heading size="md">Bio Data</Heading>
      <VStack align="start" mt={2}>
        <Text><strong>Date of Birth:</strong> {playerData.dateOfBirth}</Text>
        <Text><strong>Position:</strong> {playerData.position}</Text>
        <Text><strong>Height:</strong> {playerData.height}</Text>
        <Text><strong>Weight:</strong> {playerData.weight}</Text>
        <Text><strong>Preferred Foot:</strong> {playerData.preferredFoot}</Text>
        <Text><strong>Current Club:</strong> {playerData.currentClub}</Text>
      </VStack>
      <Heading size="md">Playing History</Heading>
      <VStack align="start" mt={2}>
        {playerData.playingHistory.map((history, index) => (
          <Box key={index}>
            <Text><strong>Year:</strong> {history.year}</Text>
            <Text><strong>Team:</strong> {history.team}</Text>
            <Text><strong>Appearances:</strong> {history.appearances}</Text>
            <Text><strong>Goals:</strong> {history.goals}</Text>
            <Text><strong>Assists:</strong> {history.assists}</Text>
            <Divider my={2} />
          </Box>
        ))}
      </VStack>
      <Heading size="md" mt={4}>Performance Data</Heading>
      <HStack mt={2} spacing={8}>
        <VStack align="start">
          <Text><strong>Matches Played:</strong> {playerData.performanceData.matchesPlayed}</Text>
          <Text><strong>Goals:</strong> {playerData.performanceData.goals}</Text>
          <Text><strong>Assists:</strong> {playerData.performanceData.assists}</Text>
        </VStack>
        <VStack align="start">
          <Text><strong>Pass Accuracy:</strong> {playerData.performanceData.passAccuracy}</Text>
          <Text><strong>Tackles:</strong> {playerData.performanceData.tackles}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default PlayerProfiling;