import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';

addDecorator (withKnobs);
addDecorator (storyFn =>
  <>
    <ThemeProvider>
      <CSSReset />
      {storyFn ()}
    </ThemeProvider>
  </>);
addDecorator (withKnobs);
configure (require.context ('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
