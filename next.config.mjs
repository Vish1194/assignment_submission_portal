// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } from 'next/constants.js';
import { createDatabaseAndCollection } from "./model/dbGenerate.js";

export default async () => {
    try {
        await createDatabaseAndCollection();
        // console.log('Created MongoDB Database, if not existed.');
    } catch (error) {
        console.log('Error creating Database.');
    }

    return {
        reactStrictMode: true,
        // Other Next.js config options...
    };
};