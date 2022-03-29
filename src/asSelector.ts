export function asSelector<T>(
  keyOrSelector: keyof T | ((item: T) => any)
) {
  return typeof keyOrSelector === "function"
    ? keyOrSelector
    : (item: T) => item[keyOrSelector];
}
