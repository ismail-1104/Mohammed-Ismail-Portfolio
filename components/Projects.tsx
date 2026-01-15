'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Rocket, Lock, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-40 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
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
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-base md:text-lg text-gray-300 mt-4 max-w-2xl mx-auto px-4">
            Enterprise backend systems, microservices architecture, and full-stack applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/20 transition-all border border-purple-500/20 hover:border-purple-500/40"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Project image/icon area */}
                <div className={`lg:w-2/5 ${project.isInternal ? 'bg-gradient-to-br from-green-700 to-emerald-700' : 'bg-gradient-to-br from-purple-600 to-pink-600'} p-8 md:p-12 flex items-center justify-center relative overflow-hidden min-h-[300px]`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
                  </div>
                  <div className="text-center z-10">
                    {project.isInternal ? (
                      <Lock className="w-16 h-16 md:w-24 md:h-24 text-white mx-auto mb-4" />
                    ) : (
                      <Rocket className="w-16 h-16 md:w-24 md:h-24 text-white mx-auto mb-4" />
                    )}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 px-4">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-sm md:text-base text-white/80 mb-4 px-4">{project.subtitle}</p>
                    )}
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white text-purple-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base"
                      >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        View Live Project
                      </a>
                    ) : (
                      <span className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/30 text-sm md:text-base">
                        <Lock className="w-4 h-4 mr-2" />
                        Internal / Non-Public
                      </span>
                    )}
                  </div>
                </div>

                {/* Project details */}
                <div className="lg:w-3/5 p-6 md:p-8">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block px-4 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-400 rounded-full text-xs md:text-sm font-semibold">
                        {project.category}
                      </span>
                      {project.isInternal && (
                        <span className="inline-block px-4 py-1 bg-green-500/20 border border-green-400/30 text-green-400 rounded-full text-xs md:text-sm font-semibold">
                          Enterprise Project
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Case Study Format: Problem, Solution, Impact */}
                  {(project.problem || project.solution || project.impact) && (
                    <div className="mb-6 space-y-4">
                      {project.problem && (
                        <div className="border-l-4 border-red-500/50 pl-4">
                          <div className="flex items-center mb-2">
                            <AlertCircle className="w-4 h-4 text-red-400 mr-2" />
                            <h4 className="text-sm font-bold text-red-400 uppercase">Problem</h4>
                          </div>
                          <p className="text-sm text-gray-300">{project.problem}</p>
                        </div>
                      )}
                      
                      {project.solution && (
                        <div className="border-l-4 border-blue-500/50 pl-4">
                          <div className="flex items-center mb-2">
                            <Code className="w-4 h-4 text-blue-400 mr-2" />
                            <h4 className="text-sm font-bold text-blue-400 uppercase">Solution</h4>
                          </div>
                          <p className="text-sm text-gray-300">{project.solution}</p>
                        </div>
                      )}
                      
                      {project.impact && (
                        <div className="border-l-4 border-green-500/50 pl-4">
                          <div className="flex items-center mb-2">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                            <h4 className="text-sm font-bold text-green-400 uppercase">Impact</h4>
                          </div>
                          <p className="text-sm text-gray-300">{project.impact}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Features */}
                  {project.features && (
                    <div className="mb-6">
                      <h4 className="text-base md:text-lg font-bold text-white mb-3 flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-purple-400" />
                        Key Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-300">
                            <span className="text-purple-400 mr-2 font-bold flex-shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="space-y-4">
                    {Object.entries(project.technologies).map(([category, techs], i) => (
                      <div key={i}>
                        <h5 className="text-xs md:text-sm font-bold text-gray-400 uppercase mb-2">
                          {category}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {(techs as string[]).map((tech, j) => (
                            <span
                              key={j}
                              className="px-2 md:px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 rounded-lg text-xs font-semibold hover:border-purple-400/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  {project.liveLink && (
                    <div className="mt-6 pt-6 border-t border-purple-500/20">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-pink-400 font-semibold flex items-center group text-sm md:text-base"
                      >
                        <span>Visit live application</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-6 shadow-xl text-center border border-green-500/20">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">3</div>
            <div className="text-gray-300 font-semibold text-sm md:text-base">Enterprise Projects</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-6 shadow-xl text-center border border-purple-500/20">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">3</div>
            <div className="text-gray-300 font-semibold text-sm md:text-base">Live Demo Projects</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-6 shadow-xl text-center border border-blue-500/20">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">Java & Spring Boot</div>
            <div className="text-gray-300 font-semibold text-sm md:text-base">Backend Focus</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
