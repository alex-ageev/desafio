import { expect, test } from 'vitest';
import { factory } from './factory';

// Existing tests
test('creates a count function', function () {
  const count = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test('creates a count starting from 10 with a step of 5', function () {
  const count = factory(10, 5);
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});

test('defaults to start 0, step 1 when no arguments passed', function () {
  const count = factory();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test('handles negative step correctly', function () {
  const count = factory(10, -2);
  expect(count()).toBe(8);
  expect(count()).toBe(6);
});

test('handles large numbers', function () {
  const count = factory(1000, 1000);
  expect(count()).toBe(2000);
  expect(count()).toBe(3000);
});

test('handles zero step', function () {
  const count = factory(5, 0);
  expect(count()).toBe(5);
  expect(count()).toBe(5);
});

test('handles non-integer values', function () {
  const count = factory(1.5, 0.5);
  expect(count()).toBe(2.0);
  expect(count()).toBe(2.5);
});

test('handles dynamic step changes', function () {
  let count = factory(0, 1);
  expect(count()).toBe(1);
  expect(count()).toBe(2);
  count = factory(count(), 10);
  expect(count()).toBe(13);
  expect(count()).toBe(23);
});
