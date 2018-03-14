import {join} from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'GraminstaWrapper',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', include},
    ]
  }
}