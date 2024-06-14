import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            Home
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/player-profiling" color="white" mx={2}>
            Player Profiling
          </Link>
          <Link as={RouterLink} to="/performance-analytics" color="white" mx={2}>
            Performance Analytics
          </Link>
          <Link as={RouterLink} to="/performance-analytics" color="white" mx={2}>
            Performance Analytics
          </Link>
          <Link as={RouterLink} to="/video-analysis" color="white" mx={2}>
            Video Analysis
          </Link>
          <Link as={RouterLink} to="/data-collection" color="white" mx={2}>
            Data Collection
          </Link>
          <Link as={RouterLink} to="/user-experience" color="white" mx={2}>
            User Experience
          </Link>
          <Link as={RouterLink} to="/security-privacy" color="white" mx={2}>
            Security & Privacy
          </Link>
          <Link as={RouterLink} to="/integration" color="white" mx={2}>
            Integration
          </Link>
          <Link as={RouterLink} to="/scalability-maintenance" color="white" mx={2}>
            Scalability & Maintenance
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;