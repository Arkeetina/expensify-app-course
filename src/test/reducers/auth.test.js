import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const uid = '3455';
  const action = {
    type: 'LOGIN',
    uid
  };

  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
})

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({uid: 'fff'}, action);
  expect(state).toEqual({});
});