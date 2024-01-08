import Link from "next/link";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-screen mb-16 flex items-center justify-center"
    >
      <div className="bg-white p-4 w-fit grid grid-cols-1 md:grid-cols-2 rounded-md shadow-2xl ">
        <div>
          <h1 className="text-2xl font-sans">Contact</h1>
          <h1 className="mt-3 w-60">
            You can email me at{" "}
            <Link
              href={"mailto:abdurrahmanakbar99@gmail.com"}
              className="hover:underline"
            >
              abdurrahmanakbar99@gmail.com
            </Link>{" "}
            or fill the form
          </h1>
          <h1 className="bg-gray-400 w-fit p-3 rounded-md text-white text-sm">
            Connect with me
          </h1>
          <span className="flex gap-3 mt-3">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/abdur-rahman-akbar-84a71028b/"}
            >
              <h1>
                <RxLinkedinLogo size={30} />
              </h1>
            </Link>
            <Link target="_blank" href={"https://github.com/abdur-rahman16"}>
              <h1>
                <FaGithub size={30} />
              </h1>
            </Link>
          </span>
        </div>
        {/* form */}
        <div className="grid grid-cols-1">
          <form
            action="https://formspree.io/f/xbjnjdvz"
            method="POST"
            className="grid"
          >
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className="p-3 m-3 rounded-md outline-none border-b border-black"
              required
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="p-3 m-3 rounded-md outline-none border-b border-black"
              required
            />
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="p-3 m-3 rounded-md outline-none border-b border-black"
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="p-3 m-3 h-40 rounded-md outline-none border-b border-black"
              required
            ></textarea>
            <button className="bg-blue-500 p-3 rounded-md w-fit px-16 m-auto hover:bg-blue-600 text-white font-semibold">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
