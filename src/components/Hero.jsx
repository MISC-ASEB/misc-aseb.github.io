import { Title1, Body1, Button } from "@fluentui/react-components";
import Logo from "/logo.png";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#B366FF] via-[#6600FF] to-[#0066FF] text-white py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#B366FF]/50 via-[#6600FF]/50 to-[#0066FF]/50 backdrop-blur-sm"></div>
      <div className="relative max-w-6xl mx-auto text-center flex flex-col items-center">
        <img
          src={Logo}
          alt="MISC Logo"
          className="w-80 max-w-[200px] mb-4 z-10"
        />
        <Title1
          as="h2"
          block
          className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center sm:text-left"
        >
          Welcome to Microsoft Ignite Students Club
        </Title1>
        <Body1
          as="p"
          block
          className="mb-8 text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
        >
          Empowering students with cutting-edge Microsoft technologies and
          fostering innovation in the digital age
        </Body1>
      </div>
    </section>
  );
}

export default Hero;
