'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { FaChrome } from 'react-icons/fa';

const detectBrowserAndRedirect = (browserType: string) => {
  if (browserType.includes('chrome') && !browserType.includes('edg')) {
    return 'https://chromewebstore.google.com/detail/popupword-web-%E5%BC%B9%E8%AF%8D/ajbpdbkffogndhmicjcdmdheejpfpkkf';
  } else if (browserType.includes('edg')) {
    return 'https://microsoftedge.microsoft.com/addons/detail/popupwordweb-%E5%BC%B9%E8%AF%8D/gbnabibnfclihaoaihjekjbkfobpmllb';
  } else {
    return 'https://www.popupword.com';
  }
};

const ChromeButton = ({ locale }: { locale: any }) => {
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    const browserType = navigator.userAgent.toLowerCase();
    const url = detectBrowserAndRedirect(browserType);
    setRedirectUrl(url);
  }, []);

  if (!redirectUrl) {
    return null;
  }

  return (
    <Link
      href={redirectUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Get Boilerplate"
      >
        <FaChrome />
        {locale.title}
      </Button>
    </Link>
  );
};

export default ChromeButton;