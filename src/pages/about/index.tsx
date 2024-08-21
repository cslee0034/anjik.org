import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>안전한 직구 안직 - 소개</title>
      </Head>
      <div className="relative overflow-hidden pt-14">
        <div className="mx-auto max-w-7xl px-6 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-1xl text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              해외 직구를 더 안전하게
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                해외 쇼핑이 점점 더 보편화되고 있지만, 그 속에는 소비자가 알지
                못하는 유해 물품이 포함될 수 있는 위험이 존재합니다.
              </p>
              <p className="text-lg leading-8 text-gray-600 mt-4">
                안직(안심 직구)의 미션은 해외 직구 시 유해하거나 안전하지 않은
                제품을 쉽게 식별할 수 있도록 하여 누구나 안심하고 해외 쇼핑을
                즐길 수 있는 환경을 만드는 것입니다.
              </p>
              <p className="text-lg leading-8 text-gray-600 mt-4">
                저희의 서비스는 비영리를 목적으로 하며 모든 정보는
                한국소비자원과 서울시전자상거래센터에서 제공하는 공식 발표를
                기반으로 합니다.
              </p>
            </div>
            <Image
              alt=""
              src="https://plus.unsplash.com/premium_photo-1683121271931-669e09a55414?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              width={1280}
              height={1024}
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </>
  );
}
