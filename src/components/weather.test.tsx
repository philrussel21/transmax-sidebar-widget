import {render} from '@testing-library/react';
import {icons} from 'src/library/types';
import Weather from './weather';

const testData = {
  label: 'Test',
  temperature: 32,
  dateTime: '2024-03-09T04:55:47.005Z',
};

test('snapshots', () => {
  for (const iconType of icons) {
    const result = render(<Weather {...testData} icon={iconType} />);

    expect(result).toMatchSnapshot();
  }
});
