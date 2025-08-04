import { ThemeSwitcher } from "@/components/common";

const Header = () => {
  return (
    <div className="-mx-5 -mt-5 mb-5 flex h-[73px] items-center justify-between border-b border-slate-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <div></div>
      <ThemeSwitcher
        size={28}
        paddingX={5}
        paddingY={3}
        lightBg="bg-slate-100"
        darkBg="bg-zinc-800"
      />
    </div>
  );
};
export default Header;
