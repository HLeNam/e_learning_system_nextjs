import { IconClock, IconEye, IconStar } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

const CourseItem = () => {
  const courseInfo = [
    {
      title: "3000",
      icon: (className?: string) => <IconEye className={className} />,
    },
    {
      title: "5.0",
      icon: (className?: string) => <IconStar className={className} />,
    },
    {
      title: "30h25p",
      icon: (className?: string) => <IconClock className={className} />,
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-gray-200/10 dark:bg-zinc-900">
      <Link href="#!" className="relative block h-[180px]">
        <Image
          src="https://images.unsplash.com/photo-1750801321923-a93fd5e5bf21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={600}
          height={400}
          className="h-full w-full rounded-lg object-cover"
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        />

        <span className="absolute top-3 right-3 z-10 inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
          New
        </span>
      </Link>
      <div className="pt-4">
        <Link href="#!" className="block">
          <h3 className="mb-3 text-lg font-bold">
            Khóa học NextJs Pro - Xây dựng E-Learning system hoàn chỉnh
          </h3>
        </Link>
        <div className="mb-5 flex items-center gap-3 text-xs text-gray-500">
          {courseInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon("size-4")}
              <span>{item.title}</span>
            </div>
          ))}

          <span className="text-primary-600 ml-auto text-base font-bold">
            799.000
          </span>
        </div>

        <Link
          href="#!"
          className="bg-primary-600 mt-10 flex h-12 w-full items-center justify-center rounded-lg font-semibold text-white"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
