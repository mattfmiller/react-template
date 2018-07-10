import dummyReducer from './../../src/reducers/dummy-reducer';

describe('dummyReducer', () => {

  test('Temporary dummy test: dummyReducer returns empty object', () => {
    expect(dummyReducer({}, {type: 'DUMMY_ACTION'})).toEqual({});
  });

});
