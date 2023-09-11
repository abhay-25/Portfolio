import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/MERN STACK ECOMMERCE WEBSITE REACT, REDUX, EXPRESS, NODE, MONGODB IN HINDI COMPLETE PROJECT - YouTube.png";
import project2 from "../../public/images/projects/Mern Stack Blood Bank App Mern Project  reactjs nodejs MongoDB express - YouTube.png";
import project3 from "../../public/images/projects/Screenshot 2023-07-18 223537.png";
import project4 from "../../public/images/projects/Screenshot 2023-07-18 224409.png";
import project5 from "../../public/images/projects/Screenshot 2023-07-18 225459.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative w-full flex items-center justify-between rounded-br-2xl rounded-3xl border 
    border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w[100%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-0">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid 
    border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Abhay|Projects page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6l xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Ecommerce Website"
                img={project1}
                summary="Explore detailed product descriptions, high-quality images, and customer reviews to make informed purchasing
decisions. Enjoy seamless and secure transactions with multiple payment options, ensuring a hassle-free shopping
experience."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Portfolio Website"
                img={project3}
                summary="The website includes a variety of sections, including: About Me, My Projects, Articles, My Skills and Experience.
It is responsive and mobile-friendly, so it can be viewed on any device."
                link="/"
                github="https://github.com/abhay-25/Portfolio"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Memories"
                img={project4}
                summary="The website includes a variety of sections, including: About Me, My Projects, Articles, My Skills and Experience.
It is responsive and mobile-friendly, so it can be viewed on any device."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Blood Bank"
                img={project2}
                summary="The objective of a blood bank full stack project is to help blood banks manage their operations more efficiently and
effectively. This can include tasks such as: Managing blood inventory, Matching donors with recipients, Tracking
donor history, Managing organisation and hospitals."
                link="https://blood-bank-72kq.onrender.com/login"
                github="https://github.com/abhay-25/Blood-Bank"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Blog App"
                img={project5}
                summary="The website includes a variety of sections, including: About Me, My Projects, Articles, My Skills and Experience.
It is responsive and mobile-friendly, so it can be viewed on any device."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">Project-3</div>
            <div className="col-span-6 sm:col-span-12">Project-4</div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;