export interface ExampleOptions {
    name: string;
    value?: number;
}
export declare class Example {
    private name;
    private value;
    constructor(options: ExampleOptions);
    getName(): string;
    getValue(): number;
    setValue(value: number): void;
}
export default Example;
