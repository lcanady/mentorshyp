const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})


// const nextEnv = require('next-env')
// const dotenvLoad = require('dotenv-load')
// dotenvLoad()
//
// const withNextEnv = nextEnv()
// module.exports = withNextEnv()

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})







