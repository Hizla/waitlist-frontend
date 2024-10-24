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
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import Image from "next/image";

const waitlistFormSchema = z.object({
  email: z.string().email(),
});

type WaitlistFormSchema = z.infer<typeof waitlistFormSchema>;
export default function HeroSection() {
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);

  const form = useForm<WaitlistFormSchema>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: { email: "" },
  });

  const { data, isPending } = useQuery({
    queryKey: ["waitlist/count"],
    queryFn: WaitlistService.getWaitlistMemberCount,
    retry: false,
  });

  const { mutate, isPending: isRegistiring } = useMutation({
    mutationFn: WaitlistService.joinWaitlist,
    onSuccess: () => {
      toast.success("You successfully joined the waitlist");
      form.reset();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message);
    },
  });
  return (
    <div className="min-h-[70vh] pt-10 md:pt-20">
      <div className="flex flex-col items-center relative z-50 sm:p-0 p-2">
        <Badge variant="secondary" className="font-ibm">
          Simple as Never
        </Badge>
        <h2 className="text-3xl md:text-5xl text-center font-bold leading-tight md:leading-snug">
          Analytics were complicated <br /> so we hit{" "}
          <span className="relative">
            <Image
              style={{
                filter: "drop-shadow(0px 1000px 0 #FFC300)",
                transform: "translateY(-1000px)",
              }}
              className="absolute -top-5 md:-top-7 left-0 w-[220%] h-[220%]"
              width={640}
              height={339}
              src="/brush-stroke.png"
              alt="Brush Stroke"
            />
            <span className="relative z-10">‘shorten’</span>{" "}
          </span>
          —now it’s a{" "}
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-t from-[#FFC300] to-[#ffdb63]">
            breeze!
          </span>
        </h2>
        <p className="text-center max-w-2xl text-muted-foreground mt-2 md:text-base text-sm">
          <span className="font-medium">Beta Members Wanted!</span> Join our
          waitlist to test our new product and enjoy free access to select paid
          features for a limited time. Be the first to explore!
        </p>
        {isPending && <Skeleton className="w-48 h-9 rounded-full mt-6" />}
        {data && (
          <div className="rounded-full h-9 flex items-center border-muted-foreground/25 bg-secondary border p-1 space-x-2 pr-2 mt-6">
            <div className="-space-x-2 flex">
              <Image
                src="/images/registered-user.png"
                className="rounded-full w-6 h-6 ring ring-secondary"
                width={24}
                height={24}
                alt="Registered User Picture"
              />
              <Image
                src="/images/registered-user-2.png"
                className="rounded-full w-6 h-6 ring ring-secondary"
                width={24}
                height={24}
                alt="Levatax Github"
              />
              <Image
                src="/images/yusufcany-github.png"
                className="rounded-full w-6 h-6 ring ring-secondary"
                width={24}
                height={24}
                alt="YusufcanY Github"
              />
            </div>
            <span className="text-muted-foreground text-sm font-medium">
              {data && data > 999 ? `${(data / 1000).toFixed(1)}K` : data}+
              People Joined
            </span>
          </div>
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(() => {
              setIsCaptchaOpen(true);
            })}
            className="flex gap-2 pt-4 mt-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      className="w-full md:w-96"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isRegistiring} type="submit" variant="dark">
              {isRegistiring && (
                <Loader2 className="w-4 h-4 animate-spin mr-1" />
              )}
              Join Waitlist
            </Button>
          </form>
        </Form>

        <div className="flex gap-2 mt-4">
          <Button size="icon" variant="outline" asChild>
            <Link href="https://github.com/hizla">
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
            </Link>
          </Button>
        </div>
      </div>
      <BackgroundBeams />
      <AnimatePresence>
        {isCaptchaOpen && (
          <HCaptchaModal
            setIsCaptchaOpen={setIsCaptchaOpen}
            onSuccess={(hcaptcha_token) => {
              mutate({
                email: form.getValues("email"),
                hcaptcha_token,
              });
              setIsCaptchaOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
