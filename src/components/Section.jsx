import { motion } from "framer-motion"

export default function Section({ title, children }) {
  return (
    <motion.section className="section-content"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>{title}</h2>
      <p>{children}</p>
    </motion.section>
  )
}
