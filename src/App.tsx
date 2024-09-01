// import React, { useEffect } from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import {  MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Components/HomePage';

function App() {
  return (
    <MantineProvider>
      <HomePage/>
    </MantineProvider>
  );
}

export default App;
 