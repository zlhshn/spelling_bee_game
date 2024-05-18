import { useTranslations } from "next-intl";
import BeeIcon from "../../../public/BeeIcon";
import PlayButton from "../../components/PlayButton"; 

export default function Home({ params }) {
  const t = useTranslations('HomePage');
  const locale = params?.locale || 'en';

  return (
    <main className="flex min-h-screen flex-col gap-6 items-center p-24 bg-yellow-main text-center">
      <BeeIcon />
      <p className="text-2xl text-center">
        {t('How many words can you make with 7 letters?')}
      </p>
      <PlayButton locale={locale} label={t('Play')} />
    </main>
  );
}