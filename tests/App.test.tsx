import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Pizza } from '../src/utils/Types';

import MainScreen from '../src/components/MainScreen';

describe('<ContactBusinessInformation />', () => {
  beforeEach(() => {
    render(<MainScreen />);
  });

  afterEach(cleanup);

  it('renders contact information', async () => {
    expect(screen.getByText('4 fromages')).toBeInTheDocument();
    expect(screen.getByText('800')).toBeInTheDocument();
  });
});
