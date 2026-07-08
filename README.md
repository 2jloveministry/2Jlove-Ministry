# 2Jlove Ministry Official Website v3.1

Cloudflare Pages 배포용으로 정리한 완성본입니다.

## 설치 및 로컬 확인

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## Cloudflare Pages 설정

GitHub 저장소 연결 후 아래처럼 설정하세요.

- Framework preset: `Next.js`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: 비워두기
- Node.js version: `20`

환경변수 설정이 가능하면 아래를 추가하세요.

- Variable name: `NODE_VERSION`
- Value: `20`

## 도메인 연결

배포 성공 후 Custom domains에서 아래 2개를 연결하세요.

- `2jloveministry.org`
- `www.2jloveministry.org`

## 말씀 업데이트

현재 말씀 데이터는 아래 파일에서 관리합니다.

```text
data/content.ts
```

`wordPosts` 배열에 새 말씀을 추가하면 홈페이지에 반영됩니다.

추후 Notion CMS 또는 Google Sheets CMS로 확장할 수 있습니다.
