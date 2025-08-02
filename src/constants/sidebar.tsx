import { TMenuItem } from "@/types";
import {
  IconBolt,
  IconPlay,
  IconOrder,
  IconUsers,
  IconStudy,
  IconComment,
} from "@/components/icons";
import { PATHS } from "@/constants/path";

export const MENU_ITEMS: TMenuItem[] = [
  {
    href: PATHS.home,
    label: "Khám phá",
    icon: <IconPlay className="size-5" />,
  },
  {
    href: PATHS.study,
    label: "Khu vực học tập",
    icon: <IconStudy className="size-5" />,
  },
  {
    href: PATHS.manageCourse,
    label: "Quản lý khóa học",
    icon: <IconBolt className="size-5" />,
  },
  {
    href: PATHS.manageMember,
    label: "Quản lý thành viên",
    icon: <IconUsers className="size-5" />,
  },
  {
    href: PATHS.manageOrder,
    label: "Quản lý đơn hàng",
    icon: <IconOrder className="size-5" />,
  },
  {
    href: PATHS.manageComment,
    label: "Quản lý bình luận",
    icon: <IconComment className="size-5" />,
  },
] as const;
