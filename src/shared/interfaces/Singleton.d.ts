export interface Singleton<T> {
  instance: T | undefined;
  getInstance(): T;
}
