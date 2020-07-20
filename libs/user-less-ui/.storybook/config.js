import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

addDecorator (withKnobs);
addDecorator (storyFn =>
  <>
      {storyFn ()}
  </>);
addDecorator (withKnobs);
configure (require.context ('../src/lib', true, /\.stories\.([jt])sx?$/), module);
