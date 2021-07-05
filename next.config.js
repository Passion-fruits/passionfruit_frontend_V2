module.exports = {
  module: {
    rules: [
        {
            test: /\.(mp3|ogg)$/,
            loader: 'file-loader', 
            options: {
               name: "assets/media/[name].[ext]?[hash]"
            }
        },
    ]
  }
}