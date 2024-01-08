import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
        <div id="projects" className="mb-48">
    <div className=" m-3 text-xl font-semibold text-amber-400">
      <h1>Projects</h1>
      </div>
      <div className=" mt-11 flex justify-center">
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
          <Link target="_blank" href={"https://subscription-card.vercel.app/"}>
            <div className="shadow-lg bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center flex-col py-11 px-16 rounded-lg m-2">
              <h1>Subscription Card</h1>
              <h1 className="mt-16 h-4 flex items-center justify-center gap-4">
                <div className="">TAILWIND CSS</div>
                <div className="">NEXTJS</div>
              </h1>
            </div>
          </Link>
          <Link target="_blank" href={"https://first-app-next-six.vercel.app/"}>
            <div className="shadow-lg bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center flex-col py-11 px-16 rounded-lg m-2">
              <h1>DYNAMIC WEB</h1>
              <h1 className="mt-16 h-4 flex items-center justify-center gap-4">
                <div className="">TYPESCRIPT</div>
                <div className="">NEXTJS</div>
                <div className="">TAILWIND</div>
              </h1>
            </div>
          </Link>
          <Link target="_blank" href={"https://signup-login-page-16.vercel.app/"}>
            <div className="shadow-lg bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center flex-col py-11 px-16 rounded-lg m-2">
              <h1>LogIn/SignUp Page</h1>
              <h1 className="mt-16 h-4 flex items-center justify-center gap-4">
                <div className="">TAILWIND CSS</div>
                <div className="">NEXTJS</div>
              </h1>
            </div>
          </Link>
          <Link target="_blank" href={"https://pricing-table-khaki.vercel.app/"}>
            <div className="shadow-lg bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center flex-col py-11 px-16 rounded-lg m-2">
              <h1>PRICING TABLE</h1>
              <h1 className="mt-16 h-4 flex items-center justify-center gap-4">
                <div className="">TAILWIND CSS</div>
                <div className="">NEXTJS</div>
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
