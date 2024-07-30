/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_OTHER_KEY: string;
  // 다른 환경 변수 env에 추가하기 이전 여기에 위의 방식과 똑같이 추가하면 됩니다.
  // ex. readonly VITE_EXAMPLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
