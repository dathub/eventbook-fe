import { Button, Box, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleSignInNavigation = () => {
    navigate("/signin");
  };

  const handleSignUpNavigation = () => {
    navigate("/signup");
  };

  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Event Book
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            EventBook is a journal and a diary app.
            Record both moments & memories that you can look back on in the
            future, and remember the events that happened that day.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" onClick={handleSignInNavigation}>SIGN IN</Button>
            <Button variant="outlined" onClick={handleSignUpNavigation}>SIGN UP</Button>
          </Stack>
        </Container>
      </Box>
    </main>
  );
};

export default Home;
