import Image from "next/image";

interface AIHintProps {
  title?: string;
  message: string;
}

export default function AIHint({ title = "Dr. Nova", message }: AIHintProps) {
  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-primary/5 rounded-lg p-stack-md border border-primary/20 mb-stack-lg flex flex-col md:flex-row gap-stack-md items-start"
      id="ai-panel">
      <div className="hidden md:flex w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-primary/20 border border-primary/30 flex-shrink-0">
        <Image
          className="w-full h-full object-cover"
          alt="A circular close-up avatar of Dr. Nova, the AI teacher, with a soft neon purple glow. She has a knowledgeable yet friendly digital presence with ethereal glowing eyes and sophisticated circuitry patterns on her temple."
          src="/drnovya.jpg"
          height={100}
          width={100}
        />
      </div>
      <div>
        <span className=" text-label-md text-primary font-bold">{title}</span>
        <p
          className="text-[14px] md:text-body-md text-on-background/80 mt-1"
          id="ai-feedback">
          {message}
        </p>
      </div>
    </div>
  );
}
