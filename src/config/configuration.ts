export interface MarvelConfig {
  api: string;
  publicKey: string;
  privateKey: string;
}

export default () => ({
  refreshHeroes: parseInt(process.env.REFRESH_HEROES) === 1,
  marvel: {
    api: process.env.MARVEL_API,
    publicKey: process.env.MARVEL_PUBLIC_KEY,
    privateKey: process.env.MARVEL_PRIVATE_KEY,
  },
});
