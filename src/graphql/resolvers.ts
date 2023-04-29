import { DateTimeScalar } from "graphql-date-scalars";
import GraphQLJSON from "graphql-type-json";
import db from "../modules/db";

const resolvers = {
    JSON: GraphQLJSON,
    DateTime: DateTimeScalar,

    Query: {
        submissions: () => {
            return db.submission.findMany({ orderBy: { submittedAt: "desc" } });
        },
    },
};

export default resolvers;
