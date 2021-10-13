import { FromPageCount, ToPageCount } from './PageDisplayMath';

it('get lower bound row number on a page with given number of rows per page', () => {
  expect(FromPageCount(3, 10)).toEqual(21);
  expect(FromPageCount(2, 5)).toEqual(6);
});

it('get upper bound row number on a page with given number of rows per page', () => {
  expect(ToPageCount(3, 10)).toEqual(30);
  expect(ToPageCount(2, 5)).toEqual(10);
});
