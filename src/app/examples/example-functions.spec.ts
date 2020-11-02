import { greet } from './example-functions';

describe('ExampleFunctions', () => {
  it('should greet', () => {
    const expectedName = 'DARLAN';
    const result = greet('DARLAN');
    expect(result).toContain(expectedName);
  });
});
