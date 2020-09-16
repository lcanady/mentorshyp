const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const withNextEnv = nextEnv()
module.exports = withNextEnv()

const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
dotenvLoad()


module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})







