import envVars from 'preact-cli-plugin-env-vars';

export default function (config, env, helpers) {
  envVars(config, env, helpers);

  config.module.rules.push({
    test: /\.sass$|.scss$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          // plugins: [
          //     require('postcss-import'),],
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            // plugins: [
              // 'postcss-import',
              // 'postcss-preset-env',
              // require('postcss-import'),
              // require("tailwindcss"),
              // require('autoprefixer'),
            //   purgeCSS,
            // ],
          },
        },
      },
      {
        loader: "sass-loader?sourceMap",
      },
    ],
  });
}