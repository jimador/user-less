import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import theme from '../chakra'

addDecorator (withKnobs);
addDecorator (storyFn =>
  <>
    <CSSReset/>
    <ThemeProvider theme={theme}>
      {storyFn ()}
    </ThemeProvider>
  </>);
addDecorator (withKnobs);
configure (require.context ('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
