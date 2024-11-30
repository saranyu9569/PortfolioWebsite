import React from "react";

function Footer() {
  return (
    <div className="h-12">
      <div className="border-t border-white-700 p-5 text-center">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Saranyu Takayama. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
