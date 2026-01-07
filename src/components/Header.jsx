import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-solid border-border-pink bg-background-light/90 backdrop-blur-md">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <header className="flex items-center justify-between whitespace-nowrap py-3">
                            <div className="flex items-center gap-3 text-slate-900">
                                <Link to="/" className="flex items-center gap-3">
                                    <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-[24px]">terminal</span>
                                    </div>
                                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Najma S</h2>
                                </Link>
                            </div>
                            <div className="hidden md:flex flex-1 justify-end gap-8">
                                <div className="flex items-center gap-6 lg:gap-9">
                                    <Link
                                        className={`text-sm font-medium leading-normal transition-colors ${isActive('/about') ? 'text-primary' : 'text-slate-600 hover:text-primary'
                                            }`}
                                        to="/about"
                                    >
                                        About Me
                                    </Link>
                                    <Link
                                        className={`text-sm font-medium leading-normal transition-colors ${isActive('/projects') ? 'text-primary' : 'text-slate-600 hover:text-primary'
                                            }`}
                                        to="/projects"
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        className={`text-sm font-medium leading-normal transition-colors ${isActive('/contact') ? 'text-primary' : 'text-slate-600 hover:text-primary'
                                            }`}
                                        to="/contact"
                                    >
                                        Contact Me
                                    </Link>
                                </div>
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Download Resume</span>
                                </button>
                            </div>
                            <div className="flex md:hidden items-center">
                                <button
                                    className="text-slate-900 p-2"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
