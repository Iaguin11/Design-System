import { dirname, join } from "path";
module.exports = {
  "stories": [
    "../src/stories/**/*.mdx",
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx"
  ],

  "addons": [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "@storybook/addon-a11y",
  ],

  "framework": {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  "features": {
    "storyStoreV7": true
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/Design-System/'
    }

    return config
  },

  docs: {
    autodocs: true
  }
}

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}