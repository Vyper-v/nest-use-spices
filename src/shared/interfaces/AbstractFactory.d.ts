export interface AbstractFactory<T> {
  createClass(): T;
}
