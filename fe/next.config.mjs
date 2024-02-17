// const {
//   PHASE_PRODUCTION_BUILD,
// } = require('next/constants')

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'standalone',
};

// module.exports = (phase) => {
// const isProd = phase === PHASE_PRODUCTION_BUILD;
export default (phase) => {
  const isProd = phase === 'phase-production-build';

  console.log(`isProd:${isProd}`);

  // Buildtime Config (Uncomment if using nginx)
  const env = {
    BE_URL: isProd ? "/api" : "http://localhost:5000"
  }

  // // Buildtime Configs (Uncomment if not using nginx)
  // const env = {
  //   BE_URL: "http://localhost:5000"
  // }


  console.log({ env, });
  console.log({ ...nextConfig, env })
  return { ...nextConfig, env };
}
