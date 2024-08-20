import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* 기본 메타 태그 */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO 관련 메타 태그 */}
        <title>안전한 직구 안직</title>
        <meta
          name="description"
          content="알리익스프레스, 테무, 쉬인 등의 직구 제품에서 발견된 유해물질 정보를 통해 안전한 쇼핑을 위한 가이드를 제공합니다."
        />
        <meta
          name="keywords"
          content="직구, 유해물질, 알리 유해물질, 테무 유해물질, 쉬인 유해물질, 직구 위험 제품,"
        />

        {/* Open Graph 태그 (SNS 공유 최적화) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="알리, 테무, 쉬인 직구 제품 유해물질 정보"
        />
        <meta
          property="og:description"
          content="알리익스프레스, 테무, 쉬인 등의 직구 제품에서 발견된 유해물질 정보를 확인하세요."
        />
        <meta property="og:url" content="https://www.anjik.org/lock.jpg" />
        <meta property="og:image" content="https://www.anjik.org/lock.jpg" />
        <meta property="og:site_name" content="직구 유해물질 정보" />

        {/* Twitter 카드 메타 태그 */}
        <meta name="twitter:card" content="https://www.anjik.org/lock.jpg" />
        <meta
          name="twitter:title"
          content="알리, 테무, 쉬인 직구 제품 유해물질 정보"
        />
        <meta
          name="twitter:description"
          content="알리, 테무, 쉬인 등의 직구 제품에서 발견된 유해물질 정보를 제공합니다."
        />
        <meta name="twitter:image" content="https://www.anjik.org/lock.jpg" />

        {/* Canonical URL (중복 콘텐츠 방지) */}
        <link rel="canonical" href="https://www.anjik.org" />

        {/* Robots.txt 설정을 통해 검색 엔진 크롤링 제어 */}
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
