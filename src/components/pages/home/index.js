import FooterComponent from "@/components/shared/Footer";
import NavbarComponent from "@/components/shared/Navbar";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

export default function HomePage() {
  return (
    <Box>
      <NavbarComponent />
      <Hero />
      <About />
      <Projects />
      {/*<Blog />*/}
      <Contact />
      <FooterComponent />
    </Box>
  );
}
