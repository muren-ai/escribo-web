import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary/10 p-8 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/doodle-bg.png')] bg-repeat opacity-100 pointer-events-none z-0"></div>

      <div className="relative z-10 bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl max-w-lg border border-white flex flex-col items-center">
        <img src="/escribo-logo.svg" alt="Escribo" className="h-12 w-auto mb-8" />
        <p className="text-xl text-gray-600 mb-8">
          The future of connected storytelling is loading...
        </p>
        <span className="inline-block px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium">
          Coming Soon
        </span>
      </div>
    </div>
  );
}
