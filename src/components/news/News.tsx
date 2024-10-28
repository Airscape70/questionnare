import { Box, Container } from "@mui/material";
import NewsCard from "./NewsCard";

export default function News() {
  return (
    <Container maxWidth="md">
      <Box>
        <NewsCard />
        <NewsCard />
      </Box>
    </Container>
  );
}