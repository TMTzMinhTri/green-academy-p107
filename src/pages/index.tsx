import { useSetting } from "@/contexts/settings";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const { saveSetting, setting } = useSetting();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          Material UI - Next.js example in TypeScript
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>

        <Button onClick={() => saveSetting({ ...setting, mode: "dark" })}>
          {" "}
          test
        </Button>
        <Button variant="contained" color="secondary">
          test
        </Button>
        <Button variant="contained" color="primary">
          test
        </Button>
      </Box>
    </Container>
  );
}
