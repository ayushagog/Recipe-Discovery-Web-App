
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500 text-white">
      <div className="text-6xl animate-bounce mb-4">👨‍🍳</div>

      <h2 className="text-2xl font-semibold">Cooking up your recipes...</h2>
      <p className="mt-2 text-sm text-white/80">Please wait while we fetch the delicious dishes 🍽️</p>
    </div>
  );
}
