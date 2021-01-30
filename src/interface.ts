import { MongoClient } from 'mongodb';

export type ForwardConnectionParams = {
  first: number
  after?: string|null|undefined
}

export type BackwardsConnectionParams = {
  last: number
  before?: number|null|undefined
}

export type ConnectionParams = ForwardConnectionParams | BackwardsConnectionParams;

export type Edge<T> = {
  cursor: string
  node: T
}

export type PageInfo = {
  hasPreviousPage: boolean
  hasNextPage: boolean
  startCursor: string|null
  endCursor: string|null
}

export type Connection<T> = {
  pageInfo: PageInfo
  edges: Edge<T>[]
}

export enum PaginationOrder {
  DESC = 0,
  ASC = 1
}

export type PaginationConfig = {
  client: MongoClient
  params: ConnectionParams
  orderField: string
  order: PaginationOrder
}

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
