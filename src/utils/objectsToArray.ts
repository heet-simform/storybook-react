export default function objectsToArray<T extends object>(object: T) {
  let result: string[] = [];

  Object.values(object).forEach((value) => {
    if (typeof value === "string") {
      result = [...result, value];
    } else if (
      typeof value === "object" &&
      !Array.isArray(value) &&
      value !== null
    ) {
      result = [...result, ...objectsToArray(value)];
    }

    return "";
  });

  return result;
}
