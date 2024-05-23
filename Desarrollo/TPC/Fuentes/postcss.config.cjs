module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-preset-env': {
      stage: 0, // This enables all modern CSS features
    },
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
    'postcss-pxtorem': {
      rootValue: 16, // This is the default root font-size. Adjust as needed.
      propList: ['*'], // This will convert all properties.
    },
  },
};