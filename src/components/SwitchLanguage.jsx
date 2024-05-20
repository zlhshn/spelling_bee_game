"use client";

import { useRouter, usePathname } from "../navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

const SwitchLanguage = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();
  const pathname = usePathname();
  const selectValue = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale,
      });
    });
  };

  return (
    <select
      onChange={selectValue}
      disabled={isPending}
      defaultValue={localActive}
    >
      <option value="en">English</option>
      <option value="tr">Turkish</option>
    </select>
  );
};

export default SwitchLanguage;