const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const mode = process.env.NODE_ENV || 'development'
const dev = mode === 'development'
const prod = mode === 'production'

module.exports = {
  entry: {
    bundle: [`./resources/js/app.js`]
  },
  resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
  output: {
    path: path.resolve(__dirname, `public/js`),
    filename: `[name].js`,
		chunkFilename: `[name].[id].js`
  },
  mode,
  module: {
    rules: [
      {
        test: /\.(svelte|html)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            dev,
            emitCss: true,
            hydratable: false,
            hotReload: false
          }
        }
      },
      {
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                require('postcss-nested'),
                require('tailwindcss'),
                require('autoprefixer')
              ]
            }
          }
				]
			}
    ]
  },
  plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	devtool: prod ? false: 'source-map'
}
