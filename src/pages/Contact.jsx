const Contact = () => {
    return (
        <main className="flex-grow flex items-center justify-center px-6 py-12 lg:py-24 bg-gradient-to-br from-background-light to-white">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-primary border border-pink-200">
                            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            Available for work
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                            Let's build something <span className="text-primary underline decoration-wavy decoration-2 underline-offset-4">amazing</span>.
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                            I'm currently open to new opportunities. Whether you have a question about my stack, a project proposal, or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>
                    <div className="space-y-4 py-4">
                        <div className="flex items-center gap-4 text-slate-700">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-pink-100 text-primary">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</p>
                                <a className="text-base font-medium hover:text-primary transition-colors" href="mailto:najma80002@gmail.com">najma80002@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-slate-700">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-pink-100 text-primary">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</p>
                                <p className="text-base font-medium">Kollam, Kerala, India</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-slate-700">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-pink-100 text-primary">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</p>
                                <p className="text-base font-medium">(+91) 8113988392</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-pink-100">
                        <p className="mb-4 text-sm font-medium text-slate-500">Find me on</p>
                        <div className="flex gap-4">
                            <a className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 transition-all hover:border-primary hover:bg-primary hover:text-white hover:-translate-y-1 shadow-sm" href="https://linkedin.com/in/najma-s-85766136a" target="_blank" rel="noopener noreferrer">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="relative overflow-hidden rounded-2xl bg-white border border-pink-100 shadow-xl shadow-pink-100/50 p-6 sm:p-8 md:p-10">
                        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
                        <form action="#" className="relative z-10 flex flex-col gap-6" method="POST">
                            <div className="flex flex-col md:flex-row gap-6">
                                <label className="flex flex-col flex-1 group">
                                    <span className="mb-2 text-sm font-semibold text-slate-700">Your Name</span>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-pink-400">
                                            <span className="material-symbols-outlined text-[20px]">person</span>
                                        </div>
                                        <input
                                            className="form-input w-full rounded-lg border border-slate-200 bg-secondary pl-11 pr-4 py-3.5 text-base text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm focus:bg-white"
                                            placeholder="Jane Doe"
                                            type="text"
                                        />
                                    </div>
                                </label>
                                <label className="flex flex-col flex-1 group">
                                    <span className="mb-2 text-sm font-semibold text-slate-700">Email Address</span>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-pink-400">
                                            <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                                        </div>
                                        <input
                                            className="form-input w-full rounded-lg border border-slate-200 bg-secondary pl-11 pr-4 py-3.5 text-base text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm focus:bg-white"
                                            placeholder="jane@example.com"
                                            type="email"
                                        />
                                    </div>
                                </label>
                            </div>
                            <label className="flex flex-col flex-1 group">
                                <span className="mb-2 text-sm font-semibold text-slate-700">Your Message</span>
                                <textarea
                                    className="form-textarea w-full rounded-lg border border-slate-200 bg-secondary p-4 text-base text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary min-h-[160px] resize-y transition-all shadow-sm focus:bg-white"
                                    placeholder="Tell me about your project, needs, or timeline..."
                                ></textarea>
                            </label>
                            <div className="flex justify-end pt-2">
                                <button
                                    className="group relative flex w-full md:w-auto min-w-[160px] items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-pink-200 transition-all hover:bg-primary-dark hover:shadow-pink-300 active:scale-[0.98]"
                                    type="button"
                                >
                                    <span className="material-symbols-outlined text-[22px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">send</span>
                                    <span>Send Message</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
