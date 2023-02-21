import FooterComponent from "@/components/shared/Footer";
import { Box } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <About />
      <Projects />
      {/*<Blog />*/}
      <Contact />
      <FooterComponent />
    </Box>
  );
}
