import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FakeNav = () => {
  return (
    <>
      <nav className="flex justify-start items-center bg-blue-800 py-4 pl-28">
        <div className="flex  items-center gap-4">
          <div>
            <FaFacebook className="text-white" />
          </div>
          <div>
            <FaXTwitter className="text-white" />
          </div>
          <div>
            <FaInstagram className="text-white" />
          </div>
        </div>
        <p className="mx-4">|</p>
        <div className="flex  items-center gap-2">
          <div className="">
            <FaPhoneAlt size={13} className="text-white" />
          </div>
          <div>
            <p className="text-white">+91 9015901409</p>
          </div>
        </div>
        <p className="mx-4">|</p>
        <div className="flex  items-center gap-2">
          <div>
            <MdEmail size={13} className="text-white" />
          </div>
          <div>
            <p className="text-white">info@tripontrail.com</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FakeNav;
