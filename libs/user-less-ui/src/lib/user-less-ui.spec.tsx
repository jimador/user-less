import React from 'react';
import { render } from '@testing-library/react';

import UserLessUi from './user-less-ui';

describe(' UserLessUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserLessUi />);
    expect(baseElement).toBeTruthy();
  });
});
