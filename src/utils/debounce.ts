let timeoutId: NodeJS.Timeout | null = null;

export const debounce = (func: Function, delay: number) => {
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
