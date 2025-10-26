import { AuthConfig } from "convex/server";

export default {
    providers: [
        {
            domain: "https://quiet-earwig-54.clerk.accounts.dev",
            applicationID: "convex",
        },
    ]
} satisfies AuthConfig;
