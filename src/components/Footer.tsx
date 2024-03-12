export function Footer() {
    return (
        <footer className="bg-black h-32 flex flex-col gap-5 items-center justify-center text-white px-10 py-24">
            <div className="flex gap-4">
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Useful Links</a>
                <a href="#" className="hover:underline">FAQs</a>
                <a href="#" className="hover:underline">News</a>
                <a href="#" className="hover:underline">Careers</a>
                <a href="#" className="hover:underline">Contact Us</a>
            </div>
            <p>Design by {" "}
                <a href="https://github.com/NjugunaBrian">Zushikikato
                </a>
            </p>

        </footer>
    )
}