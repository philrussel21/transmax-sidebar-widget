import {render} from '@testing-library/react';
import {IconType} from 'src/library/types';
import Forecast from './forecast';

const testData = [
  {
    label: 'Test 1',
    value: '20',
  },
  {
    label: 'Test 2',
    value: '20',
  },
];

const testDataWithMeta = {
  label: 'Test 3',
  value: '30',
  meta: 'kmh',
};

const testDataWithIcon = {
  label: 'Test 4',
  value: '35',
  icon: 'sunny' as IconType,
};

test('snapshot', () => {
  const result = render(<Forecast items={testData} />);

  expect(result).toMatchSnapshot();
});

test('snapshot - with meta', () => {
  const result = render(<Forecast items={[...testData, testDataWithMeta]} />);

  expect(result).toMatchSnapshot();
});

test('snapshot - with icon', () => {
  const result = render(<Forecast items={[...testData, testDataWithIcon]} />);

  expect(result).toMatchSnapshot();
});
