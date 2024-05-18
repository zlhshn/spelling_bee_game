
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

const SwitchLanguage = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();
  const selectValue = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
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
