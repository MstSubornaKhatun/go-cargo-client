import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white">

  <div className="footer max-w-7xl mx-auto p-10">

    {/* Brand Info */}
    <aside>
      <h2 className="text-2xl font-bold">
        Go<span className="text-accent">Cargo</span>
      </h2>
      <p className="mt-3 text-sm opacity-90">
        Fast, secure and reliable delivery services across the country.
        <br />
        Your trusted logistics partner.
      </p>
    </aside>

    {/* Quick Links */}
    <nav>
      <h6 className="footer-title text-white">Company</h6>
      <a className="link link-hover">About Us</a>
      <a className="link link-hover">Services</a>
      <a className="link link-hover">Coverage</a>
      <a className="link link-hover">Pricing</a>
    </nav>

    {/* Support */}
    <nav>
      <h6 className="footer-title text-white">Support</h6>
      <a className="link link-hover">Track Parcel</a>
      <a className="link link-hover">Be a Rider</a>
      <a className="link link-hover">Help Center</a>
      <a className="link link-hover">Contact</a>
    </nav>

    {/* Social */}
    <nav>
      <h6 className="footer-title text-white">Follow Us</h6>
      <div className="flex gap-4">
        <a className="hover:text-accent">Facebook</a>
        <a className="hover:text-accent">Twitter</a>
        <a className="hover:text-accent">LinkedIn</a>
      </div>
    </nav>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/20 py-4 text-center text-sm bg-[#6A0572]">
    © {new Date().getFullYear()} GoCargo. All rights reserved.
  </div>

</footer>

    );
};

export default Footer;