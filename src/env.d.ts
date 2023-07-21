/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly DBHOST: string;
  readonly DBUSER: string;
  readonly DBPASS: string;
  readonly DATABASE: string;
  readonly DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
