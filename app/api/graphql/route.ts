import { resolvers } from "../../../graphql/resolver/index";
import { typeDefs } from "../../../graphql/schemas/userSchema";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import connect from "../../../graphql/database/db";

connect();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req: any) => ({ req }),
});

export { handler as GET, handler as POST };
