'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Shield, Wrench, Brain, Layers } from 'lucide-react';
import { skills } from '@/data/portfolio';

const skillCategories = [
  { title: 'Backend Technologies', skills: skills.backend, icon: Code2, color: 'from-blue-500 to-blue-600' },
  { title: 'Frontend Technologies', skills: skills.frontend, icon: Layers, color: 'from-purple-500 to-purple-600' },
  { title: 'Databases', skills: skills.databases, icon: Database, color: 'from-green-500 to-green-600' },
  { title: 'Security & Auth', skills: skills.security, icon: Shield, color: 'from-red-500 to-red-600' },
  { title: 'Tools & DevOps', skills: skills.tools, icon: Wrench, color: 'from-orange-500 to-orange-600' },
  { title: 'AI & Machine Learning', skills: skills.machineLearning, icon: Brain, color: 'from-indigo-500 to-indigo-600' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-base md:text-lg text-gray-300 mt-4 max-w-2xl mx-auto px-4">
            A comprehensive skill set spanning backend development, frontend technologies, and cutting-edge AI/ML solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all p-6 border border-purple-500/20 hover:border-purple-500/40"
              >
                {/* Category header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-lg md:text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg text-xs md:text-sm font-semibold shadow hover:shadow-lg transition-all cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="mt-4 pt-4 border-t border-purple-500/20">
                  <span className="text-sm text-gray-400 font-semibold">
                    {category.skills.length} {category.skills.length === 1 ? 'Skill' : 'Skills'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 text-white text-center shadow-2xl"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">Continuously Learning & Growing</h3>
          <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto px-4">
            Passionate about staying at the forefront of technology. Always exploring new frameworks, tools, and best practices 
            to deliver innovative solutions and exceptional value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
