import FooterComponent from "@/components/shared/Footer";
import NavbarComponent from "@/components/shared/Navbar";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React, { useState } from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

export default function HomePage() {
  return (
    <Box>
      <Head>
        <title>Kevin Riveros | Software Engineer | React.js Expert ⚛️</title>
        <meta
          name="description"
          content="Hi there. I'm Kevin Riveros. Software Engineer based in Lima, Perú. Specializing in building exceptional, high-quality websites and applications."
        />
      </Head>
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
