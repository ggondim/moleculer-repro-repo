import type { ServiceSchema } from "moleculer";

const serviceSchema: Partial<ServiceSchema> = {
	name: "mergeParams",

	actions: {
		testNotFalse: {
			mergeParams: false,
			rest: "GET /testNotFalse",
			handler(ctx) {
				return ctx.params;
			},
		},
	},
};

export default serviceSchema;
