import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-32 px-8 md:px-16 bg-brand-black relative z-20">
            <div className="max-w-7xl mx-auto">
                {/* Section Header with Reveal */}
                <div className="flex flex-col md:flex-row mb-32 justify-between items-start md:items-end border-b border-white/10 pb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-display font-bold leading-[0.85] tracking-tight"
                    >
                        WHAT WE<br />
                        <span className="text-brand-accent">DO</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="mt-8 md:mt-0"
                    >
                        <p className="text-xl text-gray-400 max-w-md leading-relaxed text-right">
                            Combining aesthetics with architecture to build digital solutions that last.
                        </p>
                    </motion.div>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 gap-0">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative border-b border-white/10 py-16 transition-all duration-500 hover:px-8 hover:-mx-8 hover:bg-white/5 rounded-lg"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                <div className="md:w-1/3 flex items-baseline gap-6">
                                    <span className="font-mono text-brand-accent text-sm">0{service.id}</span>
                                    <h3 className="text-3xl md:text-5xl font-bold group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                                </div>

                                <div className="md:w-1/3">
                                    <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">{service.description}</p>
                                </div>

                                <div className="md:w-1/3 flex justify-start md:justify-end items-center gap-4">
                                    <div className="flex flex-wrap justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono border border-white/20 px-3 py-1 rounded-full text-white/70 bg-white/5">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:scale-110 transition-all duration-500">
                                        <ArrowUpRight className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;