export interface MarvelConfig {
  api: string;
  publicKey: string;
  privateKey: string;
}

export default () => ({
  marvel: {
    api: process.env.MARVEL_API,
    publicKey: process.env.MARVEL_PUBLIC_KEY,
    privateKey: process.env.MARVEL_PRIVATE_KEY,
  },
});
