"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import WaitlistService from "@/service/waitlist";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import HCaptchaModal from "./HCaptchaModal";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function HeroSection() {
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);
  const [email, setEmail] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["waitlist/count"],
    queryFn: WaitlistService.getWaitlistMemberCount,
  });

  const { mutate, isPending: isRegistiring } = useMutation({
    mutationFn: WaitlistService.joinWaitlist,
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <div className="min-h-[70vh] pt-20">
      <div className="flex flex-col items-center relative z-50">
        <Badge variant="secondary" className="font-ibm">
          Simple as Never
        </Badge>
        <h2 className="text-5xl text-center font-bold leading-snug">
          Analytics were complicated <br /> so we hit{" "}
          <span className="relative">
            <img
              style={{
                filter: "drop-shadow(0px 1000px 0 #FFC300)",
                transform: "translateY(-1000px)",
              }}
              className="absolute -top-7 left-0 w-[220%] h-[220%]"
              src="https://2.bp.blogspot.com/-CJzyIpsXrR8/VaakNgVIzeI/AAAAAAAAJv0/U0IlTFJK-Bs/s1600/2015-06-27%252525252022.10.31.png"
              alt=""
            />
            <span className="relative z-10">‘shorten’</span>{" "}
          </span>
          —now it’s a{" "}
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-t from-[#FFC300] to-[#ffdb63]">
            breeze!
          </span>
        </h2>
        <p className="text-center max-w-2xl text-muted-foreground mt-2">
          <span className="font-medium">Beta Members Wanted!</span> Join our
          waitlist to test our new product and enjoy free access to select paid
          features for a limited time. Be the first to explore!
        </p>
        {isPending ? (
          <Skeleton className="w-48 h-9 rounded-full mt-6" />
        ) : (
          <div className="rounded-full h-9 flex items-center border-muted-foreground/25 bg-secondary border p-1 space-x-2 pr-2 mt-6">
            <div className="-space-x-2 flex">
              {Array.from({ length: 3 }).map((_, index) => (
                <img
                  key={index}
                  src="https://thispersondoesnotexist.com/"
                  className="rounded-full w-6 h-6 ring ring-secondary"
                  alt=""
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm font-medium">
              {data && data > 999 ? `${(data / 1000).toFixed(1)}K` : data}+
              Peoples Joined
            </span>
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsCaptchaOpen(true);
          }}
          className="flex gap-2 pt-4 mt-2"
        >
          <Input
            placeholder="Enter your email"
            className="w-96"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button disabled={isRegistiring} type="submit" variant="dark">
            {isRegistiring && <Loader2 className="w-4 h-4 animate-spin mr-1" />}
            Join Waitlist
          </Button>
        </form>
        <div className="flex gap-2 mt-4">
          <Button size="icon" variant="outline">
            <svg
              width={24}
              height={24}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Button>
        </div>
      </div>
      <BackgroundBeams />
      <AnimatePresence>
        {isCaptchaOpen && (
          <HCaptchaModal
            setIsCaptchaOpen={setIsCaptchaOpen}
            onSuccess={(hcaptcha_token) => {
              mutate({ email, hcaptcha_token });
              setIsCaptchaOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
