import { TMenuItem } from "@/types";
import { PATHS } from "@/constants/path";
import { IconBolt, IconPlay } from "@/components/icons";

export const MENU_ITEMS: TMenuItem[] = [
  {
    href: PATHS.HOME,
    label: "Khu vực học tập",
    icon: <IconPlay className="size-5" />,
  },
  {
    href: PATHS.EXPLORE,
    label: "Khám phá",
    icon: <IconBolt className="size-5" />,
  },
] as const;
