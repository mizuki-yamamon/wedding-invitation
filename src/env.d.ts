/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GROOM_NAME_EN: string
  readonly VITE_BRIDE_NAME_EN: string
  readonly VITE_GROOM_NAME_JP: string
  readonly VITE_BRIDE_NAME_JP: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
