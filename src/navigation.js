import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "tr"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });