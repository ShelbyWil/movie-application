function Footer() {
    return (
        <footer className="w-full border-t border-black/10 dark:border-white/10 text-gray-400 text-sm md:text-lg">
            <div className="max-w-[1180px] mx-auto px-6 py-6 gap-4 flex flex-col sm:flex-row justify-between items-center text-sm md:justify-between text-neutral-500 dark:text-white/60">
                <span className="font-semibold tracking-tight text-neutral-700 dark:text-white/80">
                Movie<span className="text-brand-500">Find</span>
                </span>
                <div className="flex justify-center gap-6 md:gap-6">
                    <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">About</a>
                    <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">GitHub</a>
                    <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">Contact</a>
                </div>
                <p>&copy; 2026 MovieFind</p>
            </div>
        </footer>
    )
}

export default Footer