import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <div className="min-h-[70vh] pt-40">
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
        <div className="flex gap-2 mt-8">
          <Input placeholder="Enter your email" className="w-96" />
          <Button variant="secondary">Join Waitlist</Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
