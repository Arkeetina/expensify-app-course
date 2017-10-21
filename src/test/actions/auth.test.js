import { login, logout } from '../../actions/auth';

test('should generate start login action object', () => {
  const action = login('ififif');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'ififif'
  });
});

test('should generate start logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});