const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
  base: './',
  plugins: [
    createVuePlugin(/*options*/)
  ],
  resolve: {
    // https://vitejs.dev/config/#resolve-extensions
    extensions: [
      '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json',
      '.vue'
      // '.frag','.vert'
    ],
    alias: {
      '@': require('path').resolve(__dirname, '/src')
    }
  }
}
