export default function BlogCard({ blog, dark }) {
  return (
    <div
      className={`rounded-xl overflow-hidden border transition hover:shadow-xl
      ${dark
        ? "bg-[#0F172A] border-white/10"
        : "bg-white border-gray-200"}`}
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-6">
        <span className="text-sm text-blue-400">
          {blog.category}
        </span>

        <h3 className="mt-2 text-lg font-semibold">
          {blog.title}
        </h3>

        <p className="mt-3 text-sm text-slate-400">
          {blog.description}
        </p>

        <p className="mt-4 text-xs text-slate-500">
          {blog.date}
        </p>
      </div>
    </div>
  );
}
