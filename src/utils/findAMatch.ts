export default function findAMatch<T>(data: T[], find: T, defaultValue: T) {
  const findMatch = data.find((d) => d === find);
  if (findMatch) {
    return findMatch;
  }
  return defaultValue;
}
