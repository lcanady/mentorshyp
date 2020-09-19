const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})


module.exports = {
  async redirects() {
    return [
      {
        source: '/room/',
        destination: '/room/:slug*',
        permanent: true,
      },
    ]
  },
}





// const nextEnv = require('next-env')
// const dotenvLoad = require('dotenv-load')
// dotenvLoad()
//
// const withNextEnv = nextEnv()
// module.exports = withNextEnv()

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})







