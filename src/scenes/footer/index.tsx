import { BoltIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-center gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-yellowred shadow-sm">
              <BoltIcon className="h-6 w-6 text-white" />
            </div>
            <span className="font-montserrat text-lg font-black tracking-tight text-gray-500 uppercase sm:text-xl">
              Thunder <span className="text-primary-500">Athletics</span>
            </span>
          </div>
          <p className="my-5 text-sm text-gray-500">
            Thunder Athletics is dedicated to unlocking peak athletic performance
            through premier facilities, world-class coaching, and an empowering
            fitness community. Elevate your strength, endurance, and mindset with us.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Thunder Athletics. All Rights Reserved.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-montserrat font-bold text-gray-500">Quick Links</h4>
          <p className="my-3 text-sm text-gray-500 cursor-pointer hover:text-primary-500 transition">
            Membership Options
          </p>
          <p className="my-3 text-sm text-gray-500 cursor-pointer hover:text-primary-500 transition">
            Class Schedules
          </p>
          <p className="my-3 text-sm text-gray-500 cursor-pointer hover:text-primary-500 transition">
            Personal Training
          </p>
          <p className="my-3 text-sm text-gray-500 cursor-pointer hover:text-primary-500 transition">
            Facilities & Amenities
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-montserrat font-bold text-gray-500">Contact Us</h4>
          <p className="my-3 text-sm text-gray-500">
            108 Thunder Ridge Blvd, Suite 200<br />Denver, CO 80202
          </p>
          <p className="my-2 text-sm text-gray-500 font-semibold">
            Phone: +1 (555) 389-2041
          </p>
          <p className="my-2 text-sm text-gray-500 font-semibold">
            Toll-Free: +1 (800) 555-THDR
          </p>
          <p className="my-2 text-sm text-gray-500">
            Email: <a href="mailto:info@thunderathletics.com" className="hover:text-primary-500 transition">info@thunderathletics.com</a>
          </p>
          <p className="mt-3 text-xs text-gray-500">
            Mon - Fri: 5 AM - 11 PM<br />Sat - Sun: 7 AM - 9 PM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
