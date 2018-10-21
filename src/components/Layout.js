import React from "react";
// import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Page } from "./Page";

export const Layout = props => (
  <Page>
    <Header />
    {props.children}
    <Footer />
  </Page>
);
