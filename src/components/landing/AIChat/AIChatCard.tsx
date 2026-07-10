import ChatHeader from "./ChatHeader";
import UserMessage from "./UserMessage";
import AIMessage from "./AIMessage";
import StatusChips from "./StatusChips";

export default function AIChatCard() {
  return (
    <div className="glass-panel rounded-[40px] p-8 shadow-3xl relative overflow-hidden border border-white/20">
      <ChatHeader />

      <div className="space-y-6 h-[400px] overflow-hidden flex flex-col justify-end">
        <UserMessage />
        <AIMessage />
      </div>

      <StatusChips />
    </div>
  );
}
