export const FromPageCount = (page: number, rowsPerPage: number): number =>
  page * rowsPerPage - rowsPerPage + 1;

export const ToPageCount = (page: number, rowsPerPage: number): number =>
  page * rowsPerPage;
