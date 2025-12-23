export default function TrendCard({ title, dark }) {
  return (
    <div
      className={`rounded-lg px-5 py-4 border font-medium transition cursor-default
      ${dark
        ? "bg-[#0F172A] border-white/10 text-slate-200 hover:border-blue-500 hover:text-blue-400"
        : "bg-white border-gray-200 text-slate-700 hover:border-blue-500 hover:text-blue-600"}`}
    >
      {title}
    </div>
  );
}
