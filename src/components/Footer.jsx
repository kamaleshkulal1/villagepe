import { Link } from 'react-router-dom';

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

const Footer = () => {
    return (
        <footer className="bg-[#0A192F] text-white py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li><button onClick={() => scrollToSection('services')} className="hover:text-gray-400">Services</button></li>
                        <li><button onClick={() => scrollToSection('about')} className="hover:text-gray-400">About us</button></li>
                        <li><button onClick={() => scrollToSection('contact')} className="hover:text-gray-400">Contact</button></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul>
                        <li><Link to="/privacypolicy" className="hover:text-gray-400">Privacy Policy</Link></li>
                        <li><Link to="/terms-conditions" className="hover:text-gray-400">Terms & Conditions</Link></li>
                        <li><Link to="/refund-cancellation" className="hover:text-gray-400">Refund & Cancellation</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Get In Touch</h3>
                    <p>Yelgonda Guda, Shabad Rangareddy</p>
                    <p>Telangana - 509217</p>
                    <p>Email: <a href="mailto:sravan@buchipay.in" className="hover:text-gray-400">sravan@buchipay.in</a></p>
                    <p>Phone: <a href="tel:+919948130143" className="hover:text-gray-400">+91 9948130143</a></p>
                </div>

                {/* Install App */}
                <div>
                    <h3 className="font-semibold mb-4">Install App</h3>
                    <div className="flex flex-col gap-2">
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                <p>Crafted by Zeksta Technologies</p>
                <p>© 2025 Buchi Pay. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-pinterest"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
