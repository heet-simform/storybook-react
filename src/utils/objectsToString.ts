import objectsToArray from "./objectsToArray";

export default function objectsToString<T extends object>(object: T) {
  return objectsToArray(object).join(" ");
}
