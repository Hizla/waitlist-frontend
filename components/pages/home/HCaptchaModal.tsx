import { motion } from "framer-motion";
import { LegacyRef, useRef } from "react";
import { useClickAway, useLockBodyScroll } from "@uidotdev/usehooks";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function HCaptchaModal({
  setIsCaptchaOpen,
  onSuccess,
}: {
  setIsCaptchaOpen: (value: boolean) => void;
  onSuccess: (token: string) => void;
}) {
  useLockBodyScroll();
  const captchaRef = useRef<HCaptcha | null>(null);
  const captchaWrapperRef = useClickAway(() => {
    setIsCaptchaOpen(false);
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black/25 backdrop-blur-md"
    >
      <div ref={captchaWrapperRef as LegacyRef<HTMLDivElement>}>
        <HCaptcha
          sitekey="d0c02fc4-e7de-420e-a95a-db16dde6d110"
          onVerify={(d) => {
            onSuccess(d);
            captchaRef.current?.resetCaptcha();
          }}
          ref={captchaRef}
        />
      </div>
    </motion.div>
  );
}
