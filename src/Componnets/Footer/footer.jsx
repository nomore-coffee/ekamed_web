import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2C69D1] text-white px-6 py-12 sm:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        {/* Left Column */}
        <div>
          <h1 className="font-bold text-lg mb-1">EKAMED</h1>
          <p className="text-sm text-white/80 mb-4">Hospital management made simple</p>
          <div className="flex gap-4 text-white text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* Right Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Product and Pricing</h4>
            <ul className="space-y-1 text-white/80">
              <li><a href="#">See all Products</a></li>
              <li><a href="#">Free Ekamed Products</a></li>
              <li><a href="#">Ekamed Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-white/80">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">My Account</h4>
            <ul className="space-y-1 text-white/80">
              <li><a href="#">Ekamed Console</a></li>
              <li><a href="#">Billing and Cost Management</a></li>
              <li><a href="#">Account Docs</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 pt-4 text-sm flex flex-col sm:flex-row justify-between text-white/70">
        <p>Copyright © 2025 EKAMED. All rights reserved.</p>
        <p>
          All Rights Reserved | <a href="#" className="underline">Terms and Conditions</a> |{" "}
          <a href="#" className="underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
