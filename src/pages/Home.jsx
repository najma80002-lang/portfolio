const Home = () => {
    return (
        <>
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="@container">
                            <div className="flex flex-col-reverse gap-6 py-10 @[864px]:flex-row @[864px]:items-center">
                                <div className="flex flex-col gap-6 flex-1 @[864px]:pr-10">
                                    <div className="flex flex-col gap-4 text-left">
                                        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl text-slate-900">
                                            Hello, I'm Najma S <br />
                                            <span className="text-primary">Python Web Developer</span>
                                        </h1>
                                        <h2 className="text-base font-normal leading-relaxed text-slate-600 max-w-[600px]">
                                            Energetic and adaptable Economics graduate with hands-on experience in Python-based web development and modern frontend technologies.
                                        </h2>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary-dark transition-all text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25">
                                            <span className="truncate">View My Work</span>
                                        </button>
                                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-secondary hover:bg-pink-100 transition-all text-pink-700 text-base font-bold leading-normal tracking-[0.015em]">
                                            <span className="truncate">Get in Touch</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                                        <p className="text-sm font-medium text-slate-500">Available for new opportunities</p>
                                    </div>
                                </div>
                                <div className="w-full @[864px]:w-1/2 flex justify-center @[864px]:justify-end">
                                    <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                                        <div
                                            className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform hover:scale-105 duration-700"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEjCKO6jIVomuSAqgcSCp69kNv8UpIKJNDOw0ebJnFRt3QpfBgRr2kJazcMG2oJyLeHkkOOEdf95u0gw8eI3vLhb6g3AvjMWmPP76V3j3APp79WcJBA2aX5OQtDSgdTlm5f9HWnCxAOufhcSdtfmt37_kq5dGZXY4pl776k6OOJEft2OQm_DAkDvWbNWy_d_9K0YuNNX6AQX2Me0hn7yHTAfnlQ8NOQT-wPDRZ3z1IOXBOXb5kboZrnLwQYu_jY6410pVwLWK5BVQC")' }}
                                        >
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="layout-container flex h-full grow flex-col bg-secondary border-y border-border-pink">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-col gap-10 py-10 @container">
                            <div className="flex flex-col gap-4">
                                <h2 className="tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl max-w-[720px] text-slate-900">
                                    Tech Stack
                                </h2>
                                <p className="text-base font-normal leading-normal max-w-[720px] text-slate-600">
                                    Tools and technologies I use to bring creative ideas to life on the web.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="flex flex-1 gap-4 rounded-xl border border-border-pink bg-white p-6 flex-col hover:border-primary/50 transition-colors group">
                                    <div className="text-primary group-hover:scale-110 transition-transform origin-left">
                                        <span className="material-symbols-outlined text-[32px]">html</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-bold leading-tight text-slate-900">Frontend</h3>
                                        <p className="text-slate-600 text-sm font-normal leading-relaxed">React, TypeScript, Tailwind CSS, Next.js</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-4 rounded-xl border border-border-pink bg-white p-6 flex-col hover:border-primary/50 transition-colors group">
                                    <div className="text-primary group-hover:scale-110 transition-transform origin-left">
                                        <span className="material-symbols-outlined text-[32px]">dns</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-bold leading-tight text-slate-900">Backend</h3>
                                        <p className="text-slate-600 text-sm font-normal leading-relaxed">Node.js, Express, Python, Django</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-4 rounded-xl border border-border-pink bg-white p-6 flex-col hover:border-primary/50 transition-colors group">
                                    <div className="text-primary group-hover:scale-110 transition-transform origin-left">
                                        <span className="material-symbols-outlined text-[32px]">database</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-bold leading-tight text-slate-900">Database</h3>
                                        <p className="text-slate-600 text-sm font-normal leading-relaxed">PostgreSQL, MongoDB, Redis</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-4 rounded-xl border border-border-pink bg-white p-6 flex-col hover:border-primary/50 transition-colors group">
                                    <div className="text-primary group-hover:scale-110 transition-transform origin-left">
                                        <span className="material-symbols-outlined text-[32px]">cloud_queue</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-bold leading-tight text-slate-900">DevOps</h3>
                                        <p className="text-slate-600 text-sm font-normal leading-relaxed">Docker, AWS, CI/CD pipelines</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
