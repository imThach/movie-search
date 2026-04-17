const Navbar = ({ onHomeClick, showBackBtn, onBack }) => (
    <nav className="fixed top-0 w-full h-18 bg-[#000]/90 backdrop-blur-md border-b border-slate-800 z-50 px-8 py-2 flex items-center shadow-2xl">
        <div className="w-12 flex-shrink-0 flex items-center z-10">
            {showBackBtn && (
                <button
                    onClick={onBack}
                    className="text-white hover:text-yellow-400 text-4xl transition-all active:scale-90"
                    title="Quay lại danh sách"
                >
                    ❮
                </button>
            )}
        </div>

        <div onClick={onHomeClick} className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-2 cursor-pointer">
            <div className="inline-block bg-[#f5c518] text-black font-black px-3 py-1 rounded-md text-4xl tracking-tighter">
                IMDb
            </div>
        </div>
    </nav>
);

export default Navbar;