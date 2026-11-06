// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // 2. Point to your source HTML file
      filename: 'index.html',        // Name of the output file in /dist
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // Looks for image files matching these extensions
        test: /\.(png|svg|jpg|jpeg|gif)$/i, 
        // Emits a separate file to the build directory and exports the URL
        type: 'asset/resource', 
        generator: {
          // Optional: Keeps your outputs organized inside an images folder
          filename: 'images/[name][ext]', 
        }
      },
    ],
  },
};
