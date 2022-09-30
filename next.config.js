module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        images: {
            domains: ['via.placeholder.com']
          }
          
    }
    return nextConfig
  }