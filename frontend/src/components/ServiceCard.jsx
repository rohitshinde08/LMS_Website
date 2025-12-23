import { motion } from "framer-motion";

export default function ServiceCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-gray-100 rounded-xl p-8
                 shadow-sm hover:shadow-xl transition-all h-full"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}


