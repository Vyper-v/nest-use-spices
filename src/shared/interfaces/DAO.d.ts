export interface DAO<T, ID = number | string, O> {
  create(data: T): O;
  findAll(): O[];
  findOne(id: ID): O;
  update(id: ID, data: T): O;
  remove(id: ID): O;
}
