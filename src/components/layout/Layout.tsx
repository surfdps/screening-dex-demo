import React, { useState } from "react";
import { styled, Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import Notifications from "../Notifications";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%"
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
  width: "100%",
  overflow: "hidden" // Prevent horizontal scrolling
}));

const Layout = () => {
  const theme = useTheme();
  
  // Custom container style that fixes margin issues on all screens
  const containerStyle = {
    padding: "0px !important",
    width: "100%",
    maxWidth: "100%",
    overflowX: "hidden",
    marginLeft: 0,
    marginRight: 0
  };
  
  return (
    <MainWrapper>
      <PageWrapper>
        <Header />
        <Box sx={containerStyle}>
          <Outlet />
          {Notifications()}
        </Box>
        <Footer />
      </PageWrapper>
    </MainWrapper>
  );
};

export default Layout;
