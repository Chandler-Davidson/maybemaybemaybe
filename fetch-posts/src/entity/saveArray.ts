import { Connection, BaseEntity, QueryBuilder } from "typeorm";

export default async function saveArray<T extends BaseEntity>(connection: Connection, entities: Array<T>): Promise<T[]> {
  const promises = entities.map(e => connection.manager.save(e));

  return Promise.all(promises);
}