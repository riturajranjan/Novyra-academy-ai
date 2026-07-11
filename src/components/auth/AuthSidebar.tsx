import Logo from "./Logo";
import FeaturePills from "./FeaturePills";
import AuthBackground from "./AuthBackground";

export default function AuthSidebar() {
  return (
    <aside className="relative hidden md:flex md:w-1/2 neural-bg overflow-hidden flex-col justify-between p-margin-desktop">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#dae2fd 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <AuthBackground />
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span
              className="material-symbols-outlined text-on-primary text-2xl"
              style={{ fontVariationSettings: '"FILL" 1' }}>
              bolt
            </span>
          </div>
          <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
            Novyra Academy AI
          </span>
        </div>
      </div>

      <Logo />
      <FeaturePills />
    </aside>
  );
}
