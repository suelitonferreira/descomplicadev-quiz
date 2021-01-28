import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import Head from 'next/head';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Quiz - Modelo TCP/IP [DescomplicaDev]" />
        <meta property="og:image:secure_url" content={db.bg} />
        <meta property="og:image:alt" content="Quiz-Modelo TCP/IP" />
				<meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" /> 
        <meta property="twitter:title" content="Quiz - Modelo TCP/IP [DescomplicaDev]" /> 
        <meta property="twitter:creator" content="@DescomplicaDev" /> 
        <meta property="twitter:image" content={db.bg} /> 
        <meta property="twitter:image:src" content={db.bg} /> 
        <meta property="twitter:image:alt" content="Quiz-Modelo TCP/IP"/>
        <meta property="twitter:image:width" content="800" />
        <meta property="twitter:image:height" content="600" /> 
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}