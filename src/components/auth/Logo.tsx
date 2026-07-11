import Image from "next/image";

interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <>
      {" "}
      <div className=" overflow-hidden  group transition-all duration-500 hover:scale-[1.02]">
        <Image
          className=" object-cover"
          alt="A high-fidelity 3D digital illustration of Dr. Nova, a sophisticated AI educator with iridescent digital skin textures. She is shown in a portrait view with a serene expression, surrounded by floating holographic data streams and soft indigo light leaks. The background is a deep obsidian void that highlights her ethereal glow, matching the premium academy's dark-mode aesthetic with vibrant purple and cyan accents."
          src="/login.png"
          height={800}
          width={800}
        />
      </div>
      <div className="space-y-stack-sm">
        <h1 className="font-display-xl text-display-xl text-on-background">
          Welcome Back 👋
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
          Continue your personalized AI learning journey with the world&apos;s
          most advanced tutoring system.
        </p>
      </div>
    </>
  );
}
