import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaAndroid } from 'react-icons/fa';

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="https://github.com/LisPig/PopupWord"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Get Boilerplate"
      >
        <FaAndroid />
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
