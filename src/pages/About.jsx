const About = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full max-w-[1024px] px-6 py-12 md:py-20 mx-auto">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    <div className="flex-1 flex flex-col gap-6 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit border border-primary/20">
                            <span className="material-symbols-outlined text-primary !text-sm">verified</span>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">About Me</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                            Building digital products with <span className="text-primary">passion</span> and <span className="text-primary">precision</span>.
                        </h1>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                I'm a passionate Economics graduate who discovered a love for code. I specialize in building responsive, user-focused interfaces and robust backends.
                            </p>
                            <p>
                                My journey combines analytical thinking from my economics background with technical expertise in <strong>Python</strong>, <strong>Django</strong>, and <strong>React</strong>. I build clean, efficient, and scalable web applications, always striving for excellence in design and usability.
                            </p>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                                <span className="sr-only">GitHub</span>
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
                                </svg>
                            </a>
                            <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                                <span className="sr-only">LinkedIn</span>
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="relative group w-full md:w-auto flex justify-center">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border border-gray-100 shadow-2xl">
                            <img
                                alt="Professional headshot of the developer in a modern office setting"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4t_-80gTmpVt5jYZrLq0rsgHxeQFPV9YcfQz3jeCTOotb3NngNMYQLmqGTFs7-DeSCd9vFtcp75O5V58BsTpgzWygTnoE9KiXTfS1R_Tpx-ijclGR3D_DnZ2SFw7A0u6Yhaj0AXhTNO9_Sh3QTFRPBgIqIZqor1NohgqauuwJd2i8n0PAToD196zufwOVUiCXCqoKw0B0rgSDxdT3paER2ccGIrvMXy-7k3BoWOqe47Hly3NG4tjTWsAw8KQa_Dti_EevudMX3sRJ"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Proficiency */}
            <section className="w-full bg-background-alt border-y border-pink-100">
                <div className="max-w-[1024px] mx-auto px-6 py-16">
                    <div className="flex flex-col gap-2 mb-10">
                        <h2 className="text-3xl font-bold tracking-tight">Technical Proficiency</h2>
                        <p className="text-gray-500">A look at my technical toolbox and expertise levels.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {[
                            { name: 'HTML5 & CSS3', icon: 'html', percentage: 90 },
                            { name: 'Python & Django', icon: 'terminal', percentage: 85 },
                            { name: 'JavaScript & React', icon: 'javascript', percentage: 80 },
                            { name: 'Bootstrap', icon: 'style', percentage: 85 },
                            { name: 'PHP', icon: 'php', percentage: 70 },
                            { name: 'MySQL & MongoDB', icon: 'database', percentage: 75 }
                        ].map((skill, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">{skill.icon}</span>
                                        <span className="font-medium">{skill.name}</span>
                                    </div>
                                    <span className="text-sm text-gray-400">{skill.percentage}%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                                        style={{ width: `${skill.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Tools & Platforms</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Git & GitHub', 'Docker', 'AWS', 'Figma', 'Jest', 'Webpack', 'Vercel'].map((tool, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-lg bg-white border border-pink-100 text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Education */}
            <section className="w-full max-w-[1024px] px-6 py-16 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Experience */}
                    {/* Education */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="p-2 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">school</span>
                            </span>
                            <h2 className="text-2xl font-bold">Education</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 rounded-xl border border-gray-200 bg-white hover:border-primary/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-base">B.A Economics</h3>
                                        <div className="text-sm text-gray-500">Sree Narayana College Punalur</div>
                                    </div>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-pink-50 text-gray-500">2024</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Graduated with CCPA: 7.12
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border border-gray-200 bg-white hover:border-primary/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-base">Higher Secondary</h3>
                                        <div className="text-sm text-gray-500">GOVT. HSS Vayala</div>
                                    </div>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-pink-50 text-gray-500">2021</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Completed with 81%
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border border-gray-200 bg-white hover:border-primary/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-base">High School</h3>
                                        <div className="text-sm text-gray-500">GOVT. HSS Vayala</div>
                                    </div>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-pink-50 text-gray-500">2019</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Completed with 84.4%
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Education */}

                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full px-6 py-16 bg-background-alt border-y border-pink-100">
                <div className="max-w-[1024px] mx-auto relative rounded-2xl bg-white border border-primary/20 p-8 md:p-12 overflow-hidden shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">Want to dive deeper?</h2>
                            <p className="text-gray-600 text-lg">
                                I've compiled a detailed resume covering my entire journey from HTML basics to complex Node.js and Python architectures. Download it to see how I can add value to your team.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <button className="group flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl text-lg font-bold shadow-xl shadow-primary/25 transition-all transform hover:-translate-y-1">
                                <span className="material-symbols-outlined">download</span>
                                <span>Download Resume</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
