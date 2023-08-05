import { Box } from "@mui/material";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

const MainLayout = ({ content }) => {

  return (
    <div style={{ height: "100vh" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header/>
        {content}
        <Footer />
      </Box>
    </div>
  );
};

export default MainLayout;
