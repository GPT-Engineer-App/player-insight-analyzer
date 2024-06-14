import { Box, Heading, Text, VStack, Divider } from "@chakra-ui/react";

const VideoAnalysis = () => (
  <Box p={4}>
    <Heading>Video Analysis</Heading>
    <Text mt={4}>Analyze game footage to identify areas of improvement and provide feedback.</Text>
    
    <Divider my={4} />
    
    <Heading size="md">Opponent Analysis</Heading>
    <VStack align="start" mt={2}>
      <Text><strong>Defensive Phase:</strong> Analyze the defensive strategies and formations used by opponents.</Text>
      <Text><strong>Attacking Transitions:</strong> Evaluate how opponents transition from defense to attack.</Text>
      <Text><strong>Attacking Phase:</strong> Study the attacking patterns and strategies of opponents.</Text>
      <Text><strong>Defensive Transitions:</strong> Assess how opponents transition from attack to defense.</Text>
      <Text><strong>Set-pieces (Offensive/Defensive):</strong> Analyze set-piece routines and effectiveness.</Text>
      <Text><strong>Goals:</strong> Review goals scored by opponents.</Text>
      <Text><strong>Goals Conceded:</strong> Examine goals conceded by opponents.</Text>
      <Text><strong>Chances Created:</strong> Identify key chances created by opponents.</Text>
      <Text><strong>Passing Pattern Analysis:</strong> Study the passing patterns and sequences of opponents.</Text>
      <Text><strong>Build-ups:</strong> Analyze how opponents build up their plays from the back.</Text>
    </VStack>
    
    <Divider my={4} />
    
    <Heading size="md">Team Analysis</Heading>
    <VStack align="start" mt={2}>
      <Text><strong>Defensive Phase:</strong> Analyze the defensive strategies and formations used by the team.</Text>
      <Text><strong>Attacking Transitions:</strong> Evaluate how the team transitions from defense to attack.</Text>
      <Text><strong>Attacking Phase:</strong> Study the attacking patterns and strategies of the team.</Text>
      <Text><strong>Defensive Transitions:</strong> Assess how the team transitions from attack to defense.</Text>
      <Text><strong>Set-pieces (Offensive/Defensive):</strong> Analyze set-piece routines and effectiveness.</Text>
      <Text><strong>Goals:</strong> Review goals scored by the team.</Text>
      <Text><strong>Goals Conceded:</strong> Examine goals conceded by the team.</Text>
      <Text><strong>Chances Created:</strong> Identify key chances created by the team.</Text>
      <Text><strong>Passing Pattern Analysis:</strong> Study the passing patterns and sequences of the team.</Text>
      <Text><strong>Build-ups:</strong> Analyze how the team builds up their plays from the back.</Text>
    </VStack>
    
    <Divider my={4} />
    
    <Heading size="md">Training Analysis</Heading>
    <VStack align="start" mt={2}>
      <Text><strong>Customized Training Plans:</strong> Create and review customized training plans.</Text>
      <Text><strong>Training Videos:</strong> Analyze training session videos to assess performance.</Text>
      <Text><strong>Training Outputs:</strong> Evaluate the outputs and effectiveness of training sessions.</Text>
    </VStack>
  </Box>
);

export default VideoAnalysis;