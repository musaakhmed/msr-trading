/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['tailwindcss'],
  },
  webpack: (config) => {
    // Ensure PostCSS uses the correct Tailwind plugin
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOf) => {
          if (oneOf.use && Array.isArray(oneOf.use)) {
            oneOf.use.forEach((use) => {
              if (use.loader && use.loader.includes('postcss-loader')) {
                use.options = {
                  ...use.options,
                  postcssOptions: {
                    plugins: [
                      require('tailwindcss'),
                      require('autoprefixer'),
                    ],
                  },
                };
              }
            });
          }
        });
      }
    });
    return config;
  },
};

module.exports = nextConfig;
