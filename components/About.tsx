'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Target } from 'lucide-react';
import { personalInfo, education, certifications, achievements } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* For Recruiters Section */}
        {'recruiterSummary' in personalInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-green-500/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">For Recruiters</h3>
              </div>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                {personalInfo.recruiterSummary}
              </p>
            </div>
          </motion.div>
        )}

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-purple-500/20">
            <div className="text-base md:text-lg text-gray-200 leading-relaxed space-y-4">
              {personalInfo.summary.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Education</h3>
          </div>
          <div className="grid md:grid-cols-1 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{edu.degree}</h4>
                <p className="text-purple-400 font-semibold mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span className="font-semibold text-green-400">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all transform hover:scale-105 border border-purple-500/20 hover:border-purple-500/40"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-sm text-purple-400 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-400">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Key Achievements</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-l-4 border-purple-500 hover:border-pink-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all"
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{achievement.title}</h4>
                    <p className="text-sm text-gray-300 mb-3">{achievement.description}</p>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 rounded-full text-xs font-semibold">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
