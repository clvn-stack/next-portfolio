"use client";
import React from "react";
import { useState } from "react";
import { Handshake, Folder, Download } from "lucide-react";

const Record = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "tab1",
      label: "Hedy PH",
      title: "Senior Front-End Developer",
      date: "Sept 2021 - March 2025",
      items: [
        "Creating Landing pages (HTML, JS, CSS, Bootstrap, ReactJS)",
        "Creating and maintaining configurator for Chevrolet, Cadillac and GMC",
        "Creating Emailers (EDMS)",
      ],
    },
    {
      name: "tab2",
      label: "Zoek Inc",
      title: "Web Designer / Team Lead",
      date: "May 2018 - SEPT 2021",
      items: [
        "Designing Website (Wx) based on Client request",
        "Appling SEO and Analytics",
        "Quality Assurance before pushing the site on live",
      ],
    },
    {
      name: "tab3",
      label: "OCC",
      title: "Web Designer / Web Developer",
      date: "APR 2016 - MAR 2018",
      items: [
        "Designing Website (PSD Format)",
        "Convert PSD to working HTML (Responsive)",
        "Appling SEO and Analytics",
      ],
    },
  ];
  return (
    <div className=" py-4 px-4 md:px-0">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="tabs tabs-border bg-black/20 rounded-2xl p-2">
            {tabs.map((tab, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name="my_tabs"
                  className={`tab ${activeTab === index ? "tab-active" : ""}`}
                  aria-label={tab.label}
                  onChange={() => setActiveTab(index)}
                />
                <div className="tab-content border-black/0 rounded-xl bg-black/0 p-4">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                    <div className="font-bold text-xl">{tab.title}</div>
                    <div className="font-bold text-sm text-purple-400">
                      {tab.date}
                    </div>
                  </div>
                  <div className="py-4">
                    <ul className="text-sm leading-6 text-purple-300 list-disc pl-5">
                      {tab.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
            <a
              href="mailto:calvinbaltazar19@icloud.com"
              target="_blank"
              className="p-6 bg-black/30 hover:bg-black/50 rounded-lg flex flex-col gap-2 items-center hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <span className="flex flex-row items-center gap-2">
                <Handshake className="w-12 h-12 text-white" />
              </span>
              <span className="font-bold text-xl text-center text-purple-400">
                Let&apos;s Work Together
              </span>
              <div className="desc text-sm text-center">
                I&apos;m open to freelance or full-time frontend roles.
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              className="p-6 bg-black/30 hover:bg-black/50 rounded-lg flex flex-col gap-2 items-center hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <span className="flex flex-row items-center gap-2">
                <Folder className="w-12 h-12 text-white" />
              </span>
              <span className="font-bold text-xl text-center text-purple-400">
                Have a Project?
              </span>
              <div className="desc text-sm text-center">
                Let&apos;s bring your idea to life — contact me.
              </div>
            </a>
            <a
              href="/calvinbaltazar.pdf"
              target="_blank"
              className="p-6 bg-black/30 hover:bg-black/50 rounded-lg flex flex-col gap-2 items-center hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <span className="flex flex-row items-center gap-2">
                <Download className="w-12 h-12 text-white" />
              </span>
              <span className="font-bold text-xl text-center leading-tight text-purple-400">
                Download My Resume
              </span>
              <div className="desc text-sm text-center">
                Grab the PDF and check my experience.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
