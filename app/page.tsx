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
          Hi, I'm Nabeel Rahman — a full-time full-stack developer, currently
          building scalable web applications and internal tools that make a real
          impact.
        </p>
        <p>
          I work across the full tech stack — from architecting robust backend
          APIs to crafting intuitive, responsive frontends. My day-to-day
          includes building new features, solving real-world issues, deploying
          scalable applications, and collaborating closely with cross-functional
          teams. I'm hands-on with modern frameworks, CMS platforms, and
          streamlined deployment workflows, delivering clean, maintainable, and
          user-focused solutions in fast-paced environments — all while
          constantly learning and pushing myself to grow..
        </p>

        <p>
          I believe in blending hard work, creativity, and purpose to craft
          meaningful digital experiences that make a lasting difference.
        </p>
      </div>
    </section>
  );
}
