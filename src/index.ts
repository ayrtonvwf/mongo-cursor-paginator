import {Connection, PaginationConfig} from "./interface";

export * from './interface';

export const paginate = async <T extends Object>(config: PaginationConfig): Promise<Connection<T>> => {
  return {
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      endCursor: null,
      startCursor: null
    },
    edges: []
  }
}
