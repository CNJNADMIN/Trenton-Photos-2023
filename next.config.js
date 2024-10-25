module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dvjcjbbp7/**",
      },
    ],
  },

    // Add the webpack configuration for SVG support
  webpack(config) {
    // Add a new rule for handling .svg files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Use @svgr/webpack to import SVGs as React components
    });
    return config;
  },
};
