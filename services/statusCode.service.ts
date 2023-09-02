import type { ServiceSchema } from "moleculer";

const serviceSchema: Partial<ServiceSchema> = {
	name: "statusCodeTest",

	actions: {
		testNotFound: {
			rest: "GET /testNotFound",
			handler(ctx) {
				ctx.meta.$statusCode = 404;
			},
		},
	},
};

export default serviceSchema;
