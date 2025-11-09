export default function Header() {
  return (
    <div className="flex w-full flex-col left-4 bg-white/50 px-4 py-8 z-10 border-b border-gray-200 backdrop-blur-md">
      <h1 className="text-3xl font-bold  text-gray-900">Dashboard</h1>
      <p className="text-gray-600">
        Track Bitcoin and Solana prices in real-time
      </p>
    </div>
  );
}
