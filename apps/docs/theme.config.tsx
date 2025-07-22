import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>📚 SaaS Monorepo Docs</span>,
  project: {
    link: "https://github.com/your-org/saas-monorepo",
  },
  docsRepositoryBase: "https://github.com/your-org/saas-monorepo/tree/main/apps/docs",
  footer: {
    text: "SaaS Monorepo Documentation",
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  search: {
    placeholder: "Search documentation...",
  },
};

export default config;