import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
    modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
    microCMS: {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
    },
    tailwindcss: {
        config: {
            content: [],
            plugins: [tailwindTypography],
        },
    },
});
