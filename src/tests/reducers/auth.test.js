import authReducer from '../../reducers/auth';

test('should logout', () => {
      const action = {
          type: "LOGOUT"
      }
    const state = authReducer({uid: '123'}, action)
    expect(state).toEqual({})
  });


  test('should clear uid,', () => {
    const action = {
        type: "LOGIN",
        uid: '1'
    }
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid)
  });