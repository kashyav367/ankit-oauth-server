import { generateKeyPairSync } from "crypto";
import fs from "fs";
import path from "path";

const certDir = path.join(process.cwd(), "cert");

if (!fs.existsSync(certDir)) {
  fs.mkdirSync(certDir);
}

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

fs.writeFileSync(
  path.join(certDir, "private.pem"),
  privateKey.export({ type: "pkcs1", format: "pem" })
);

fs.writeFileSync(
  path.join(certDir, "public.pem"),
  publicKey.export({ type: "pkcs1", format: "pem" })
);

console.log("✅ Keys generated in cert folder");