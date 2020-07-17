import React from 'react';
import { render } from '@testing-library/react';

import UserLessGqlClient from './user-less-gql-client';

describe(' UserLessGqlClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserLessGqlClient />);
    expect(baseElement).toBeTruthy();
  });
});
