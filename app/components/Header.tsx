"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const handleSend = () => {
    if (!isEmailValid) return;

    alert(`Email: ${email}\nMessage: ${message}`);
    setEmail("");
    setMessage("");
    setIsEmailValid(true);
    closeModal();
  };

  return (
    <div>
      <div className="flex justify-between py-2 lg:px-2">
        <div className="navbar">
          <div className="flex-1">
            <div className="flex gap-4">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <Image
                    src={`/images/cb.jpg`}
                    alt={`Avatar`}
                    width={62}
                    height={62}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a className="text-lg md:text-2xl font-bold">SR.FE</a>
              </div>
            </div>
          </div>

          <button
            onClick={openModal}
            className="relative w-32 h-10 overflow-hidden rounded-xl bg-white text-black font-bold shadow-md transition-all duration-300 group flex items-center justify-center"
          >
            <div className="absolute top-0 left-0 w-full transition-transform duration-300 group-hover:-translate-y-1/2">
              <div className="h-10 flex items-center justify-center uppercase">
                contact me
              </div>
              <div className="h-10 flex items-center justify-center uppercase">
                contact me
              </div>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black/40 text-white max-w-xl w-[90vw] rounded-xl p-6 shadow-lg flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4">Reach Out</h2>
              <p className="text-sm opacity-70 mb-6">
                Feel free to reach out and we&apos;ll get back to you as soon as
                we can.
              </p>

              <fieldset className="fieldset w-full">
                <label className="input w-full bg-black/0 border-white/10">
                  <input
                    className={`w-full bg-transparent focus:outline-none ${
                      isEmailValid ? "border-white/10" : "border-red-500"
                    }`}
                    type="email"
                    required
                    placeholder="your email here..."
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setEmail(value);
                      setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
                    }}
                  />
                </label>

                {!isEmailValid && (
                  <p className="text-xs text-red-400 mt-1">
                    Please enter a valid email address.
                  </p>
                )}

                <textarea
                  className="textarea textarea-ghost border-white/10 w-full bg-black/0 focus:bg-transparent focus:ring-0 mt-3"
                  placeholder="Feel free to reach out"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <div className="flex flex-row justify-between gap-2 pt-4">
                  <button
                    type="button"
                    onClick={handleSend}
                    className="btn btn-success w-[120px]"
                  >
                    Send Now
                  </button>
                  <button
                    onClick={closeModal}
                    className="btn btn-md btn-neutral"
                  >
                    Close
                  </button>
                </div>
              </fieldset>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
