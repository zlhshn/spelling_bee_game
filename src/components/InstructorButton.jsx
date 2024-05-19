"use client";
import { useRouter } from "next/navigation";

const InstructorButton = ({ locale, label }) => {
  const router = useRouter();
  const handlePlayClick = () => {
    router.push(`/${locale}/instructions`);
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

export default InstructorButton;
