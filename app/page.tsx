import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/myprofile.jpg"
          alt="Profile photo"
          className="rounded-[100px] bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Web Developer
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Hi, I’m a aspiring full-stack developer with a passion for creating innovative solutions.
        </p>
        <p> I strive to achieve excellence in both technology and personal growth by continually honing my skills and dedicating myself to my work.
        </p>
        <p> I believe in combining dedication, hard work, and my technical expertise to build solutions that truly make a difference.
        </p>
       
      </div>
    </section>
  );
}
