'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
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
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-base md:text-lg text-gray-300 mt-4 max-w-2xl mx-auto px-4">
            I'm actively seeking opportunities in the UAE and internationally. Let's connect and discuss how I can contribute to your team!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out through any of the following channels. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all border border-purple-500/20 hover:border-purple-500/40 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4 min-w-0">
                  <div className="text-sm text-gray-400 font-semibold">Email</div>
                  <div className="text-white font-medium truncate">{personalInfo.email}</div>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-xl rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all border border-green-500/20 hover:border-green-500/40 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-400 font-semibold">Phone</div>
                  <div className="text-white font-medium">{personalInfo.phone}</div>
                </div>
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-xl rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all border border-blue-500/20 hover:border-blue-500/40 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4 min-w-0">
                  <div className="text-sm text-gray-400 font-semibold">LinkedIn</div>
                  <div className="text-white font-medium truncate">MOHAMMED-ISMAIL</div>
                </div>
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl hover:shadow-lg hover:shadow-gray-500/20 transition-all border border-gray-500/20 hover:border-gray-400/40 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4 min-w-0">
                  <div className="text-sm text-gray-400 font-semibold">GitHub</div>
                  <div className="text-white font-medium truncate">ismail-1104</div>
                </div>
              </motion.a>

              <div className="flex items-center p-4 bg-gradient-to-r from-orange-900/40 to-amber-900/40 backdrop-blur-xl rounded-xl border border-orange-500/20">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-400 font-semibold">Location</div>
                  <div className="text-white font-medium">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 text-white shadow-2xl shadow-purple-500/20">
              <Send className="w-12 h-12 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to work together?</h3>
              <p className="text-base md:text-lg opacity-90 mb-8 leading-relaxed">
                I'm currently available for full-time positions, contract work, and exciting project collaborations. 
                Particularly interested in opportunities in the UAE tech market.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Backend Development Expert</div>
                    <div className="text-sm opacity-90">Java, Spring Boot, Microservices</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Full-Stack Capabilities</div>
                    <div className="text-sm opacity-90">React, Next.js, TypeScript</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">AI/ML Experience</div>
                    <div className="text-sm opacity-90">Python, TensorFlow, YOLO</div>
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="block w-full bg-white text-purple-600 text-center py-3 md:py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Send Me an Email
              </a>
            </div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 p-6 bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-xl border border-green-500/20 rounded-xl"
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">!</span>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-green-300 mb-1">Open to Relocation</div>
                  <div className="text-sm text-green-200">
                    Ready to relocate to UAE or other international locations for the right opportunity. 
                    Valid passport and ready for immediate joining.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
