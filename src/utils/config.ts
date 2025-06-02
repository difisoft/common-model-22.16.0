export function getEnvStr(name: string, defaultValue: string = ''): string {
  const result: string | undefined = process.env[name];
  return result == null || result === '' ? defaultValue : result;
}

export function getEnvArr(name: string, defaultValue: string[] = []): string[] {
  const result: string | undefined = process.env[name];
  return result == null || result === '' ? defaultValue : result.split(';');
}

export function getEnvNum(name: string, defaultValue: number = 0): number {
  const result: string | undefined = process.env[name];
  return result == null || result === '' ? defaultValue : Number(result);
}

export function getEnvJson<T>(name: string, defaultValue: T): T {
  const result: string | undefined = process.env[name];
  return result == null || result === '' ? defaultValue : JSON.parse(result);
}

export function getEnvBool(name: string, defaultValue: boolean): boolean {
  const result: string | undefined = process.env[name];
  if (result == null || result === '') {
    return defaultValue;
  }

  if (
    result.toLowerCase() === 'y' ||
    result.toLowerCase() === 'yes' ||
    result.toLowerCase() === 'true'
  ) {
    return true;
  }

  if (
    result.toLowerCase() === 'n' ||
    result.toLowerCase() === 'no' ||
    result.toLowerCase() === 'false'
  ) {
    return false;
  }
  throw Error(`Config env is not a boolean type: ${name}. Result is ${result}`);
}
