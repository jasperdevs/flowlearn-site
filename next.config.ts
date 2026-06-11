import createMDX from "@next/mdx";
import type { NextConfig } from "next";

// FlowLearn deploys to GitHub Pages project site at
// https://jasperdevs.github.io/flowlearn-site/, so assets are served from the
// /flowlearn-site/ subpath. Local dev serves from root. Asset URLs are prefixed
// with NEXT_PUBLIC_BASE_PATH.
const isGhPages = process.env.GITHUB_PAGES === "true";
const basePath = isGhPages ? "/flowlearn-site" : "";

// Expose basePath to client code so it can be prefixed onto public asset URLs.
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              typescript: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "removeAttrs",
                    params: {
                      attrs: "(class)",
                    },
                  },
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
  devIndicators: false,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
  },
});

export default withMDX(nextConfig);
