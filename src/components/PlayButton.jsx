"use client";

import { useRouter } from "next/navigation";

const PlayButton = ({ locale, label }) => {
  const router = useRouter();

  const handlePlayClick = () => {
    router.push(`/${locale}/game`);
  };

  return (
    <button
      className="inline-block w-[200px] text-white bg-black px-8 py-2 rounded-3xl"
      onClick={handlePlayClick}
    >
      {label}
    </button>
  );
};

export default PlayButton;
