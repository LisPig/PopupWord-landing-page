"use client";
import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
const ChromeButton = dynamic(() => import('@/components/home/ChromeButton'), {
  ssr: false, // 禁用服务器端渲染
});
const Hero = ({ locale, CTALocale, ChromeLocale }: { locale: any; CTALocale: any; ChromeLocale: any }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      >
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center">
          <h1>
            {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
            {/* {siteConfig.description} */}
            {locale.description}
          </p>
        </section>
      </motion.div>
      <div className="flex justify-center space-x-4 mt-8">
        <CTAButton locale={CTALocale}></CTAButton>
        <ChromeButton locale={ChromeLocale}></ChromeButton>
      </div>
    </>
  );
};

export default Hero;
