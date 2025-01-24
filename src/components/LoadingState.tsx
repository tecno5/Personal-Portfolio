export default function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin" />
        <p className="text-sm text-neutral-600">Loading...</p>
      </div>
    </div>
  );
} 