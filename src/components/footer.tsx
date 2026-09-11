import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">

          {/* Logo & Description */}
          <div className="md:w-1/2">
            <img src={logo} alt="logo" className="w-20" />

            <p className="mt-3 max-w-md text-xs text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-4 flex gap-3 text-xs text-gray-500">
              <a href="">GitHub</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden md:block">
            <h2 className="mb-3 text-xs font-bold">PRODUCT</h2>

            <ul className="flex flex-col gap-2 text-xs text-gray-500">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h2 className="mb-3 text-xs font-bold">COMPANY</h2>

            <ul className="flex flex-col gap-2 text-xs text-gray-500">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="hidden md:block">
            <h2 className="mb-3 text-xs font-bold">LEGAL</h2>

            <ul className="flex flex-col gap-2 text-xs text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-gray-200 pt-4 text-[10px] text-gray-400 md:flex-row md:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;