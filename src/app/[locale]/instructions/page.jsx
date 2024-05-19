import React from "react";
import { useTranslations } from "next-intl";
import PlayButton from "@/components/PlayButton";
const Page = ({ params }) => {
  const t = useTranslations("HomePage");
  const locale = params?.locale || "en";
  return (
    <div className="bg-yellow-main h-screen py-8 m-auto ">
      <div className="m-auto  rounded-lg shadow-lg w-[92%] sm:w-[400px] bg-white">
        <div className=" flex justify-between items-center text-[13px] md:text-[16px] px-5 py-3 bg-slate-200 rounded-t-lg"></div>
        <div className="px-5 py-4 flex flex-col">
          <p> {t("instruction")}</p>
          <li> {t("rule1")}</li>
          <li> {t("rule2")}</li>
          <li> {t("rule3")}</li>
          <li> {t("rule4")}</li>
          <h3 className="font-semibold"> {t("scoring")}</h3>
          <li> {t("point1")}</li>
          <li> {t("point2")}</li>
          <h3 className="font-semibold"> {t("timing")}</h3>
          <li> {t("time1")}</li>
          <li> {t("time2")}</li>
          <h3 className="font-semibold"> {t("start")}</h3>
          <li> {t("start1")}</li>
        </div>
      </div>
      <div className="text-center mt-4 mb-4">
        <PlayButton locale={locale} label={t("Play")} />
      </div>
    </div>
  );
};

export default Page;
