const app = require('./app');
beforeEach(() => {
  let board = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
  const SIZE = 8;
  app.boardInit();
  app.playersInit();
  app.printBoard();
});
test('Test B5 move as whites', () => {
  expect(app.makeMove('B',5,'W')).toBeTruthy();
});
test('Test D5 move as whites', () => {
  expect(app.makeMove('D',5,'W')).toBeTruthy();
});
test('Test B5 and C4 move as whites', () => {
  app.makeMove('B',5,'W');
  expect(app.makeMove('C',4,'W')).toBeTruthy();
});
test('Test B6 move as whites', () => {
  expect(app.makeMove('B',6,'W')).toBeFalsy();
});