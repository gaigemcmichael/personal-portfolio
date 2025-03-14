import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../types";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      {/* Motion container for smooth animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-secondary dark:bg-black-secondary rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0.5 right-2.5 text-gray-500 hover:text-gray-light dark:text-gray-primary dark:hover:text-white text-xl"
        >
          &times;
        </button>

        {/* Project Content */}
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          width={400}
          height={250}
          className="rounded-md mb-4 w-full"
        />
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{project.descriptionLong}</p>
      </motion.div>
    </div>
  );
}
