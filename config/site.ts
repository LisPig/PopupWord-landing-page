import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const OPEN_SOURCE_URL = 'https://github.com/LisPig/PopupWord'

const baseSiteConfig = {
  name: "PopupWord",
  description:
    "A word memory learning tool with pop-up window design, whenever you open or browse the web, it will randomly display a word, so that you can practice word memory anytime and anywhere, thus helping you to constantly consolidate your vocabulary.",
  url: "https://www.popupword.com",
  //ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["PopupWord", "popupword", "弹词", "popupword-web"],
  authors: [
    {
      name: "popupword.com",
      url: "https://PopupWord.com",
      twitter: 'https://twitter.com/solo_oxy',
    }
  ],
  creator: '@solo_oxy',
  openSourceURL: 'https://github.com/LisPig/PopupWord',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'light', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    //{ name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    //{ name: 'twitter', href: "https://x.com/solo_oxy", icon: BsTwitterX },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:lowbyte1024@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://x.com/solo_oxy", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/LisPig/", icon: BsGithub },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    // { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    { name: 'weChat', href: "", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://weijunext.com/', name: 'J实验室' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://landingpage.weijunext.com/', name: 'PopupWord' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    { url: 'https://githubbio.com', name: 'Github Bio Generator' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    ogImage: `${baseSiteConfig.url}/og.jpg`,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.jpg`],
    creator: baseSiteConfig.creator,
  },
}
