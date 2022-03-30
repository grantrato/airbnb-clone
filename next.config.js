/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['./assets/', 'links.papareact.com']
  },
  env: {
    mapbox_key: 'your-key'
  }
}
