import {render} from '@testing-library/react';
import DelayedRoute from './delayed-route';
import {statuses} from 'src/library/types';

const testData = {
  name: 'Test Route',
  via: ['Via Route 1', 'Via Route 2'],
  distance: 20,
  duration: 25,
};

test('snapshot', () => {
  for (const status of statuses) {
    const result = render(<DelayedRoute {...testData} status={status} />);

    expect(result).toMatchSnapshot();
  }
});
