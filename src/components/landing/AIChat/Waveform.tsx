export default function Waveform() {
  return (
    <div className="flex items-end gap-1 h-5">
      {[8, 16, 10, 18, 12, 6].map((height, index) => (
        <span
          key={index}
          className="w-1 rounded-full bg-cyan-400 animate-pulse"
          style={{ height }}
        />
      ))}
    </div>
  );
}
