import React from "react";
import { useTranslations } from "next-intl";
import { Play } from "next/font/google";
import PlayButton from "@/components/PlayButton";
const page = ({ params }) => {
  //   const t = useTranslations("Modal");
  const t = useTranslations("HomePage");
  const locale = params?.locale || "en";
  return (
    <div className="bg-yellow-main h-screen py-10 m-auto">
      <div className="m-auto  rounded shadow-lg w-[400px] bg-white mb-10">
        <div className=" flex justify-between items-center px-5 py-3 bg-slate-200 rounded-t-lg">
          {/* <h2 className="text-lg font-bold"> {t("howToPlay?")}</h2> */}
        </div>
        <div className="px-5 py-4 flex flex-col gap-2">
          <p> {t("instruction")}</p>
          <li> {t("rule1")}</li>
          <li> {t("rule2")}</li>
          <li> {t("rule3")}</li>
          <li> {t("rule4")}</li>
          <h3 className="font-semibold"> {t("scoring")}</h3>
          <li> {t("point1")}</li>
          <li> {t("point2")}</li>
        </div>
      </div>
      <div className="text-center">
        <PlayButton locale={locale} label={t("Play")} />
      </div>
    </div>
  );
};

export default page;
