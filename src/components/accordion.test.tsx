import {render, fireEvent} from '@testing-library/react';
import Accordion from './accordion';

test('snapshot', () => {
  const result = render(
    <Accordion.Container>
      <Accordion.Panel label="Foo">
        <p>Fooby</p>
      </Accordion.Panel>
      <Accordion.Panel label="Bar">
        <p>Barby</p>
      </Accordion.Panel>
    </Accordion.Container>
  );

  expect(result).toMatchSnapshot();
});

test('it should not have panels displayed by default', () => {
  const {queryByText} = render(
    <Accordion.Container>
      <Accordion.Panel label="Foo">
        <p>Fooby</p>
      </Accordion.Panel>
      <Accordion.Panel label="Bar">
        <p>Barby</p>
      </Accordion.Panel>
    </Accordion.Container>
  );

  expect(queryByText('Fooby')).toBeNull();
  expect(queryByText('Barby')).toBeNull();
});

test('it should display the associated panel when clicked', () => {
  const {getByText, queryByText} = render(
    <Accordion.Container>
      <Accordion.Panel label="Foo">
        <p>Fooby</p>
      </Accordion.Panel>
      <Accordion.Panel label="Bar">
        <p>Barby</p>
      </Accordion.Panel>
    </Accordion.Container>
  );

  fireEvent.click(getByText('Bar'));

  expect(queryByText('Fooby')).toBeNull();
  expect(queryByText('Barby')).not.toBeNull();
});

test('it should display all associated panels when clicked', () => {
  const {getByText, queryByText} = render(
    <Accordion.Container>
      <Accordion.Panel label="Foo">
        <p>Fooby</p>
      </Accordion.Panel>
      <Accordion.Panel label="Bar">
        <p>Barby</p>
      </Accordion.Panel>
    </Accordion.Container>
  );

  fireEvent.click(getByText('Foo'));
  fireEvent.click(getByText('Bar'));

  expect(queryByText('Fooby')).not.toBeNull();
  expect(queryByText('Barby')).not.toBeNull();
});
