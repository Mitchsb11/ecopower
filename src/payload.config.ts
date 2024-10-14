import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from "@payloadcms/richtext-slate"
import path from "path";
import { Produit } from "./payload/Produits";
import { Media } from "./payload/Media";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [Media, Produit],
    cors: ["*"],
    routes: {
        admin: "/admin"
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "- EcoPowerDrive",
            favicon: "/favicon.ico",
            ogImage: "/thumbnail.jpg"
        }
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: postgresAdapter({
        pool: {
            
            host: "aws-0-eu-central-1.pooler.supabase.com",
            port: 5432,
            user: "postgres.kwwubsxdmhdmcehcvwwy",
            password: "2D4Sw3A8gWhxsnTW",
            database: "postgres",
        }
    }),
    typescript: {
        outputFile: path.resolve(__dirname, "payload-types.ts")
    }
})