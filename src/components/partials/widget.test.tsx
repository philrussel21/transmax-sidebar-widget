import {render} from '@testing-library/react';
import Widget from './widget';
import data from 'src/data/widget';

test('snapshot', () => {
  const result = render(<Widget />);

  expect(result).toMatchSnapshot();
});

test('it should show weather data by default', () => {
  const {getByText} = render(<Widget />);

  expect(getByText(data.weather.label)).toBeInTheDocument();
});

test('it should not show delayed routes by default', () => {
  const {queryByText} = render(<Widget />);

  expect(queryByText(data.delayedRoutes[0].name)).toBeNull();
  expect(queryByText(data.delayedRoutes[0].duration)).toBeNull();
  expect(queryByText(data.delayedRoutes[0].distance)).toBeNull();
});
