module.exports = {
  // 프로젝트의 루트 디렉토리를 설정
  root: true,
  // 환경 설정: 브라우저와 ES2020 환경을 사용
  env: { browser: true, es2020: true },
  // ESLint 확장 설정
  extends: [
    'eslint:recommended', // ESLint의 추천 규칙을 사용
    'plugin:@typescript-eslint/recommended', // TypeScript ESLint 플러그인의 추천 규칙을 사용
    'plugin:react-hooks/recommended', // React Hooks 규칙을 사용
    'plugin:react/recommended', // React 추천 규칙을 사용
    'plugin:prettier/recommended', // 프리티어 설정과 겹치는거 관리
  ],
  // ESLint가 무시할 파일 및 디렉토리
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'], // 빌드 결과물, 설정 파일 및 node_modules 디렉토리 무시
  // 파서 설정: TypeScript를 파싱
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX 구문을 인식
    },
    ecmaVersion: 2020, // ECMAScript 2020 문법을 지원
    sourceType: 'module', // 모듈 시스템 사용 (import/export)
  },
  // 플러그인 설정
  plugins: ['react-refresh', '@typescript-eslint'],
  // 규칙 설정
  rules: {
    // React Refresh 플러그인의 only-export-components 규칙을 비활성화
    'react-refresh/only-export-components': 'off',
    // var 사용을 경고
    'no-var': 'warn',
    // 동등 연산자 사용을 경고
    eqeqeq: 'warn',
    // React prop-types 규칙을 비활성화 (TypeScript 사용 시 prop-types 필요 없음)
    'react/prop-types': 0,
    // 불필요한 세미콜론을 에러로 표시
    'no-extra-semi': 'error',
    // 사용되지 않는 변수를 비활성화 (TypeScript 규칙으로 대체)
    'no-unused-vars': 'off',
    // TypeScript 사용되지 않는 변수를 경고로 표시
    '@typescript-eslint/no-unused-vars': ['warn'],
    // 콘솔 사용을 비활성화
    'no-console': 'off',
    // 기본 내보내기를 선호하는 규칙을 비활성화
    'import/prefer-default-export': 'off',
    // React Hooks 의존성 배열 검사 규칙을 경고로 표시
    'react-hooks/exhaustive-deps': 'warn',
    // JSX 요소에 key 속성을 경고로 표시
    'react/jsx-key': 'warn',
    // JSX 파일에서 React를 스코프 내에 두는 규칙을 비활성화 (React 17 이상에서 불필요)
    'react/react-in-jsx-scope': 0,
    // 파일 확장자에 따라 JSX를 허용하는 규칙을 에러로 표시
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'prettier/prettier': 'off',
  },
  // React 설정
  settings: {
    react: {
      version: 'detect', // 설치된 React 버전을 자동으로 감지
    },
  },
};
