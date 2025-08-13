import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const icons = [
    {
      name: "simple-icons:facebook",
      url: "https://www.facebook.com/calvin.baltazar",
    },
    {
      name: "simple-icons:instagram",
      url: "https://www.instagram.com/clvn.bltzr/",
    },
    {
      name: "simple-icons:linkedin",
      url: "https://www.linkedin.com/in/clvnbltzr",
    },
    {
      name: "tabler:mail",
      url: "mailto:calvinbaltazar19@icloud.com",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full pt-4">
      <div className="flex-1">
        <div className="flex gap-2 bg-black/20 justify-center md:bg-white/0 py-2 rounded-xl mx-16 my-1  backdrop-blur-sm">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-black/20 shadow-xl flex items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
            >
              <Icon icon={item.name} className="w-6 md:w-7 h-6 md:h-7 filter" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
