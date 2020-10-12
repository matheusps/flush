module.exports = {
  "stories": [
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: false,
      docs: false,
      actions: false
    }
  }]
}