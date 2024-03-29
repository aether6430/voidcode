import { Clients } from "@/components/sections/clients";
import { Container } from "@/components/container";
import { StarsIllustration } from "@/components/icons/stars";
import classNames from "classnames";
import { HeroSection } from "@/components/sections/hero";
import { USP } from "@/components/sections/usp";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HeroSection />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          "z-[-1] mask-radial-faded pointer-events-none relative my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
      <Container>
        <USP />
      </Container>
    </>
  );
}
