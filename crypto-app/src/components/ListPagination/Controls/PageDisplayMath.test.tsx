import { FromPageCount, ToPageCount } from './PageDisplayMath';

it('get lower bound row number on a page with given number of rows per page', () => {
  expect(FromPageCount(3, 10)).toEqual(21);
  expect(FromPageCount(2, 5)).toEqual(6);
  expect(FromPageCount(10, 10)).toEqual(91);
  expect(FromPageCount(50, 10)).toEqual(491);
  expect(FromPageCount(75, 10)).toEqual(741);
  expect(FromPageCount(1, 1)).toEqual(1);
  expect(FromPageCount(33, 33)).toEqual(1057);
});

it('get upper bound row number on a page with given number of rows per page (a * b)', () => {
  expect(ToPageCount(3, 10)).toEqual(30);
  expect(ToPageCount(2, 5)).toEqual(10);
  expect(ToPageCount(10, 10)).toEqual(100);
  expect(ToPageCount(50, 10)).toEqual(500);
  expect(ToPageCount(75, 10)).toEqual(750);
  expect(ToPageCount(1, 1)).toEqual(1);
  expect(ToPageCount(33, 33)).toEqual(1089);
});
