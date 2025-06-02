import Example from './index';

describe('Example', () => {
  it('should create an instance with default value', () => {
    const example = new Example({ name: 'test' });
    expect(example.getName()).toBe('test');
    expect(example.getValue()).toBe(0);
  });

  it('should create an instance with custom value', () => {
    const example = new Example({ name: 'test', value: 42 });
    expect(example.getName()).toBe('test');
    expect(example.getValue()).toBe(42);
  });

  it('should update value', () => {
    const example = new Example({ name: 'test' });
    example.setValue(100);
    expect(example.getValue()).toBe(100);
  });
});
