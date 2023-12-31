module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/applicable-process',
        permanent: true,
      }
    ]
  }
}