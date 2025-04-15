export default function Footer() {
    return (
        <footer>
            <div className="flex-grow px-0 mx-10 md:mx-auto max-w-6xl pb-16">
                <h1 className="text-3xl font-bold">
                    <span className="text-[var(--main-col)]">Arka</span>Nesia.
                </h1>
                <p className="text-[var(--gray-col)] mt-2">
                    Bukan cuma destinasi, ArkaNesia bawa kamu menyelami warisan budaya dan tradisi yang penuh arti.
                </p>
            </div>

            <div className="bg-[var(--main-col)] text-[var(--light-col)] font-semibold text-center py-6">
                Copyright {new Date().getFullYear()} - All rights reserved • Arkanesia
            </div>
        </footer>
    )
}