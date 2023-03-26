# Incremental Static Regeneration (ISR)

Next.js 12 버전에서 소개된 ISR 은 빌드 타임에 생성되는 정적 페이지를 재배포 할 필요 없이 생성 및 업데이트가 가능하도록 해 줍니다.
이를 통해 개선된 퍼포먼스, 보안 그리고 빌드 시간을 줄일 수 있습니다.

- 퍼포먼스: 정적 페이지는 캐싱된 페이지를 Edge 네트워크를 통해 일관되게 빠르게 제공합니다.
- 보안: ISR render function 는 페이지 request 에 접근 권한이 없기 때문에 사용자 정보가 캐싱되는 것을 방지 할 수 있습니다.
- 빌드 시간: 빌드 타임에 페이지를 생성하는 대신 request 혹은 API 를 통해 페이지 생성을 하기 때문에 어플리케이션이 커질 수록 빌드 타임을 단축 할 수 있습니다.

## ISR Render Function
Next.js 어플리케이션을 배포 할 때 ISR render function 이 edge 혹은 serverless 에서 정적 페이지를 생성 또는 업데이트 되도록 설정 할 수 있습니다.`getStaticProps` 의 `revalidate` 를 통해 Next.js 는 자동으로 ISR render function 를 생성 해 줍니다.

## ISR vs. Cache-Control Headers
둘 모두 백엔드 부하를 줄여주는데 도움을 주지만, 캐싱 및 캐시 invalidation 을 하는 방법에서 차이점이 존재합니다. ISR 은 HTTP-based caching 의 복잡한 부분을 추상화하여 간단하게 페이지 퍼포먼스와 개발자 경험을 향상시키는데 도움을 줍니다.

## 실행방법
development 환경에서는 정적 페이지도 request 마다 `getStaticProps` 및 `getStaticPaths` 를 실행하기 때문에 빌드 뒤 `yarn start` 로 서버 실행
- [페이지 이동](http://localhost:3000/ISR/posts/1) 개발자도구 네트워크 탭을 열어 페이지 요청 시 마다 Response Headers 에 `x-nextjs-cache` 를 확인하자

## Referances
https://vercel.com/docs/concepts/incremental-static-regeneration/overview
