export function getRandomNumber(min: number, max: number): number {
  const { floor, random } = Math;

  return floor(random() * (max - min + 1)) + min;
}

export function repeat<T>(func: () => T, times: number): T[] {
  return Array.from({length: times}, () => func());
}
