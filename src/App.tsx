/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Smartphone } from "lucide-react";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green opacity-[0.08] blur-[150px]" />

      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="mb-4 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <img src="/redsealogo.png" alt="Redsea Mart" className="h-20 w-20" />
            </div>
          </div>
          <h1 className="logo-gradient text-6xl font-extrabold tracking-[-0.04em] sm:text-[84px] leading-tight mb-2">
            Redsea Mart
          </h1>
          <p className="text-[14px] font-semibold uppercase tracking-[0.4em] text-brand-green opacity-90 mb-[60px]">
            For Ethiopians by Ethiopians
          </p>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-5 sm:flex-row justify-center items-center"
        >
          {/* App Store Button */}
          <a
            href="https://apps.apple.com/us/app/redsea-mart/id6761652439"
            target="_blank"
            rel="noopener noreferrer"
            className="group theme-btn w-[230px]"
          >
            <svg
              className="h-6 w-6 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 384 512"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-82.3-20.1-41.2.6-79.1 23.9-100.3 60.5-42.6 73.7-10.9 181.6 30.5 241.6 20.2 29.3 44.4 62.1 76.3 61.1 30.3-1.1 41.8-19.4 78.4-19.4 36.4 0 47.1 19.4 79 19.1 32.4-.3 53.6-29.3 73.6-58.5 23.1-33.8 32.6-66.5 33-68.1-1.3-.5-64.2-24.7-64.6-97.7zm-61.1-174.1c17.8-21.7 29.8-51.8 26.5-82-25.8 1.1-57 17.2-75.5 38.8-16.5 19.2-30.9 49.9-27 79.3 28.9 2.2 58.2-14.4 76-36.1z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-medium uppercase tracking-[0.05em] text-white/60 mb-0.5">
                Download on the
              </div>
              <div className="text-base font-semibold leading-tight">App Store</div>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.newusername.redsea&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="group theme-btn w-[230px]"
          >
            <svg
              className="h-6 w-6 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 512 512"
            >
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5 1.2-38.8l-2.4-2zm-160.4 81.2l-247.3 242.4 282.5-161.3-35.2-81.1z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-medium uppercase tracking-[0.05em] text-white/60 mb-0.5">
                Get it on
              </div>
              <div className="text-base font-semibold leading-tight">Google Play</div>
            </div>
          </a>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-10 left-0 right-0 text-center text-[12px] font-normal text-white/60 tracking-[0.02em]"
      >
        &copy; {new Date().getFullYear()} Redsea Mart Inc. &bull; All rights reserved.
      </motion.footer>
    </div>
  );
}
