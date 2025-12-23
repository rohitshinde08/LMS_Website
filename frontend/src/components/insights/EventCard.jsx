export default function EventCard({ name, type, date, info, dark }) {
  return (
    <div
      className={`rounded-xl border p-6 transition hover:shadow-xl
      ${dark
        ? "bg-[#0F172A] border-white/10"
        : "bg-white border-gray-200"}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          {name}
        </h3>

        <span
          className={`text-xs px-3 py-1 rounded-full
          ${dark
            ? "bg-blue-500/10 text-blue-400"
            : "bg-blue-100 text-blue-600"}`}
        >
          {type}
        </span>
      </div>

      <p
        className={`text-sm
        ${dark ? "text-slate-400" : "text-slate-600"}`}
      >
        {info}
      </p>

      <p
        className={`mt-4 text-xs
        ${dark ? "text-slate-500" : "text-slate-400"}`}
      >
        {date}
      </p>
    </div>
  );
}
