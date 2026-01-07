const Footer = () => {
    return (
        <footer className="w-full border-t border-solid border-border-pink bg-white py-8">
            <div className="layout-content-container flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-4 md:px-10 gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-text-main">
                        <span className="material-symbols-outlined text-primary">terminal</span>
                        <span className="text-lg font-bold">Najma S</span>
                    </div>
                    <p className="text-text-secondary text-sm">Built with clean code and pixel-perfect precision.</p>
                </div>
                <div className="flex items-center gap-6">
                    <a className="text-text-muted hover:text-primary transition-colors" href="https://linkedin.com/in/najma-s-85766136a" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <span className="material-symbols-outlined">work</span>
                    </a>
                    <a className="text-text-muted hover:text-primary transition-colors" href="#">
                        <span className="sr-only">GitHub</span>
                        <span className="material-symbols-outlined">code</span>
                    </a>
                </div>
                <p className="text-text-muted text-xs">© 2024 Najma S. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
