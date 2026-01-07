import { useState } from 'react';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            title: 'Time Vault',
            description: 'Secure web application for managing and storing time-based confidential information. Implemented backend with Django and MySQL, ensuring strong authentication and encryption. Built a responsive front-end using React.js.',
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'Django', 'MySQL', 'Security'],
            featured: true
        },
        {
            title: 'AI Chat Companion',
            description: 'Real-time messaging application leveraging OpenAI\'s GPT-4 API. Includes streaming responses, chat history persistence, and voice-to-text input.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3arigSi7f29lSCwHyAGfeEBe6NM2EOTM4EcNx6BDtKfAmNLoWWJOv5htnTOsX9q66WgqHqBmWL3GgQaUA1WSoiVh7bODtfldr-6LRxrwmRHiWr9sKjN-gEyLwfQAkopU9vk-_KuLGU7TFeHlbRlRhjmebfM4728UudXwhfrbxILFf4gjvLlUcPPqOmDwr8vdlV1SNmPVLnwsG6bclkUELRA2b99kjTVeYjEjswHekEUSVoHVbyi0wWWyGew_Zxe93hSjrBX3yg3BJ',
            tags: ['TypeScript', 'OpenAI API', 'Node.js']
        },
        {
            title: 'Crypto Portfolio Tracker',
            description: 'A clean, responsive web app to track cryptocurrency holdings. Fetches live pricing data via WebSocket and visualizes portfolio performance over time.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN6KpMWvTKHqw7zdyJM0CTaW5Idw2h1WpoqHEuXoYTEe54Tgpp8DdzuU2t5uD3fWu-lX9CC3Et6JS-edyS6Jwau5kecabVUTHV_IAjYevIvkWXH5IjcYEEhGioT0nOrja2-S6JArJHMUW3qmmsyvqQH_D2ltqdSAAAC53hPZjzOkQk0oMMrH4DJSv5vkw59YQU0tSK9A-O4YusBbUQuPTUtQoawzdGYyhyerlR5PtJSzgi5hPnwynFpUMHj6hIE9-nQx1HK2Z8jX2W',
            tags: ['Vue.js', 'D3.js', 'Firebase']
        },
        {
            title: 'Nordic Storefront',
            description: 'A headless e-commerce storefront built with Shopify Storefront API. Focus on speed, accessibility, and a minimalist Nordic design aesthetic.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiDDfFQgZQ6hroaCSZ6kD5o5IJ1iwmzCZGfnifu2qEb92n5qCwGqIgT5mYv7800w0A4TF5aojpp0DFXI2HloKtULzOu4m8siv1-Ism4aZgvg3Xl7FU36IdALCc8cBEeezU5ODJU25XkCIzvohYlY4H9z-k0_ZV_ubxwFFroA-lfJxbV5AgozoivaXd1fFqJ6WVoyxOgarQfn3f7D32SAW7PUNtmR_QGaQnOLve5Tbhbf3G0Le1zhy2kCkPS4jJEhy0HipGlqUbAEzr',
            tags: ['Remix', 'Shopify', 'GraphQL']
        },
        {
            title: 'DevFlow VS Code Theme',
            description: 'A custom high-contrast theme for VS Code designed for long coding sessions. Includes specific syntax highlighting for JS, Python, and Rust.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2vnpsBB_4uG7wrwnLp1JkCMH_gK4_Z5SOIp9QxXxbz1TGtHSWFWgJz2lG9uQtvMfaSnlDPhP5z_OfODeB3Ba8lZKC5FCZc6sodAtztXbJYGwoipQnUaBRXsQgDjYHWXEK8Oo6k9Jcn6TixwLfw8umXfeV3S1bGvbrmt0r8mSXOXkVzuAwYDMXKknFJUsJoQB0DHX03Jn_o4HdREITNARmzYW1QqDMdSKHHP1EfrBPkgSVi2MamOEukwe1b1BtblhO6MXRLehOIccT',
            tags: ['JSON', 'Design']
        },
        {
            title: 'TaskMaster API',
            description: 'A robust RESTful API for project management tools. Handles authentication, complex permission systems, and background job processing.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAevwMpVsa0AJrP-UaHGt4S9WvcI1Kc_fmwxxb4znExeRwfo63j6bWRSHb0hkbQ99MidiqTsUpuMnVO88ZrfGUaiiiMaj2p1VbSEoKCEIH7wRnO87bgH37x7iamvDrNfyj-SwMVFgBohCoSfmWn1ANGhcEgHYF0pHUg9_WAnynNvEmCaiwcURJmvIn93KuGOT1GW74xsDqy10zfJ2P_kmh9xeLVfm8gxe7p8w13wDXMFerjbU-0Fybb3DSi8hVf0XZU1t9jZ8HU0GN1',
            tags: ['Python', 'Django', 'Docker']
        }
    ];

    const filters = ['All', 'React', 'Node.js', 'TypeScript', 'Python', 'Design Systems'];

    return (
        <>
            {/* Hero Section */}
            <section className="w-full bg-white py-8 md:py-12 border-b border-pink-100">
                <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4 md:px-10">
                    <div className="@container">
                        <div className="rounded-xl overflow-hidden relative bg-gradient-to-br from-pink-50 to-white border border-pink-100 shadow-sm">
                            <div className="absolute inset-0 z-0 opacity-40" style={{ background: 'radial-gradient(circle at top right, #fce7f3 0%, transparent 40%), radial-gradient(circle at bottom left, #fbcfe8 0%, transparent 40%)' }}></div>
                            <div className="relative z-10 flex flex-col gap-6 items-center justify-center p-8 md:p-12 text-center">
                                <div className="flex flex-col gap-3 max-w-2xl">
                                    <h1 className="text-text-main text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                                        Featured Projects
                                    </h1>
                                    <h2 className="text-text-muted text-base md:text-lg font-normal leading-relaxed">
                                        A collection of full-stack applications, experiments, and open-source contributions.
                                        Built with scalability and user experience in mind.
                                    </h2>
                                </div>
                                <div className="flex gap-4">
                                    <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-primary-hover transition-colors text-white text-sm font-bold shadow-md shadow-pink-200">
                                        View GitHub
                                    </button>
                                    <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-white border border-pink-200 hover:bg-pink-50 transition-colors text-text-main text-sm font-bold">
                                        Download Resume
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="w-full py-8">
                <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4 md:px-10">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg px-5 transition-all ${activeFilter === filter
                                    ? 'bg-primary text-white shadow-sm shadow-pink-200'
                                    : 'bg-white hover:bg-pink-50 border border-pink-200 text-text-secondary'
                                    }`}
                            >
                                <p className="text-sm font-medium">{filter}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="w-full pb-20">
                <div className="layout-content-container max-w-[1200px] mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <article key={index} className="group flex flex-col rounded-xl bg-white border border-pink-100 overflow-hidden hover:border-pink-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-1">
                                <div className="w-full aspect-video bg-cover bg-center relative" style={{ backgroundImage: `url("${project.image}")` }}>
                                    {project.featured && (
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                                            <span className="material-symbols-outlined text-sm">star</span> Featured
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-3 p-6 h-full">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-text-main text-lg font-bold leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-2.5 py-1 rounded-full bg-pink-50 border border-pink-100 text-xs text-primary font-semibold">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-50">
                                        <a className="flex items-center justify-center gap-2 rounded-lg h-10 bg-primary hover:bg-primary-hover text-white text-sm font-bold transition-colors shadow-sm shadow-pink-200" href="#">
                                            <span className="material-symbols-outlined text-[18px]">open_in_new</span> Live Demo
                                        </a>
                                        <a className="flex items-center justify-center gap-2 rounded-lg h-10 bg-white border border-pink-200 hover:bg-pink-50 text-text-secondary text-sm font-bold transition-colors" href="#">
                                            <span className="material-symbols-outlined text-[18px]">code</span> GitHub
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
