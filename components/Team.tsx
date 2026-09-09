import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

const Team: React.FC = () => {
    const stats = [
        { icon: Users, number: '60+', label: 'Team Members' },
        { icon: Award, number: '50+', label: 'Projects Completed' },
        { icon: Globe, number: '10+', label: 'Countries Served' },
        { icon: TrendingUp, number: '2023', label: 'Founded' }
    ];

    return (
        <section id="team" className="py-32 px-8 md:px-16 bg-brand-black relative z-20">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-24 border-b border-white/10 pb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-display font-bold leading-[0.85] tracking-tight mb-8"
                    >
                        MEET THE<br />
                        <span className="text-brand-accent">TEAM</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-xl text-gray-400 max-w-2xl leading-relaxed"
                    >
                        Driven by passion, powered by expertise. Our leadership team brings decades of combined experience in technology and innovation.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-accent/50 transition-all duration-500">
                                    <Icon className="w-8 h-8 text-brand-accent mb-4" />
                                    <div className="text-5xl font-bold mb-2 font-display">{stat.number}</div>
                                    <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;
