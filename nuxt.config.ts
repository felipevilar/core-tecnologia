// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/hints"],
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-BR",
      },
      title: "3CORE Tecnologia - Soluções de TI e Outsourcing",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Na 3CORE você encontra soluções sob medida para suporte técnico de TI e Outsourcing. Serviços de TI confiáveis para impulsionar seu negócio em todo o Brasil.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://3core.com.br/wp-content/uploads/2025/04/marca_assinatura-300x127.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },
});
