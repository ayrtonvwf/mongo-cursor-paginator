import {
  Collection, ProjectionOperators, QuerySelector,
} from 'mongodb';

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

export type Connection<T extends Object> = {
  pageInfo: PageInfo
  edges: Edge<T>[]
}

export enum PaginationOrder {
  DESC = 0,
  ASC = 1
}

export type PaginationConfig<T extends Object> = {
  source: Collection
  params: ConnectionParams
  orderField: string
  order: PaginationOrder
  query: QuerySelector<T>
  projection: ProjectionOperators
}
