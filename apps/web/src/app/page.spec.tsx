import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './page.stories';

describe('Home', () => {
  const { Default } = composeStories(stories);

  describe('Default', () => {
    it('should render successfully', () => {
      const { baseElement } = render(<Default />);

      expect(baseElement).toBeTruthy();
    });
  });
});
