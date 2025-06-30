import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(process.env.DATASTORY_GRAPH_URL!);

