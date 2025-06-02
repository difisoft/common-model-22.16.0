/**
 * Main entry point for the library
 */
import { logger } from '@/log/logger';

export interface ExampleOptions {
  name: string;
  value?: number;
}

export class Example {
  private name: string;
  private value: number;

  constructor(options: ExampleOptions) {
    this.name = options.name;
    this.value = options.value ?? 0;
    logger.info('Example instance created', { name: this.name, value: this.value });
  }

  public getName(): string {
    return this.name;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
    logger.info('Value updated', { name: this.name, oldValue: this.value, newValue: value });
  }
}

export default Example;
