import Link from "next/link";

import { PATHS } from "@/constants";
import { IconHome } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 w-full max-w-lg text-center">
        <div className="mb-8">
          <h1 className="from-primary-50 via-primary-600 to-primary-800 mb-4 bg-gradient-to-r bg-clip-text text-8xl font-bold text-transparent sm:text-9xl">
            404
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Trang không tồn tại
          </h2>
          <p className="text-lg leading-relaxed">
            Rất tiếc, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Có
            thể trang đã được di chuyển hoặc URL không chính xác.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={PATHS.home}
            className="bg-primary-500 text-primary-50 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium shadow-lg transition-all duration-200 hover:scale-105 hover:opacity-90"
          >
            <IconHome className="h-5 w-5" />
            Về trang chủ
          </Link>
        </div>

        <div className="bg-primary-600/20 absolute top-20 left-10 h-20 w-20 animate-pulse rounded-full blur-xl"></div>
        <div
          className="bg-primary-600/15 absolute right-10 bottom-20 h-32 w-32 animate-pulse rounded-full blur-2xl"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="bg-primary-600/20 absolute top-1/2 left-0 h-16 w-16 animate-bounce rounded-full blur-lg"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="bg-primary-600/10 absolute top-10 right-20 h-24 w-24 animate-pulse rounded-full blur-xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="bg-primary-600/25 absolute bottom-10 left-20 h-12 w-12 animate-bounce rounded-full blur-lg"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
    </div>
  );
}
