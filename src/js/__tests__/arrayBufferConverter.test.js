import { expect, test } from '@jest/globals';
import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  expect(converter.buffer).toBe(buffer);
});

test('', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const received = converter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received).toBe(expected);
});
