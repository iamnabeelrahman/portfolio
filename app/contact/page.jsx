import Image from "next/image";

export default function ContactMe() {
  return (
    <section>
      <a href="https://x.com/IamNabeelRahman" target="_blank">
        <Image
          src="/myprofile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Contact Me
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the platforms below—I'd love to connect!        </p>
        <ul className="space-y-2">
          <li>
            <a
              href="https://github.com/iamnabeelrahman"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: iamnabeelrahman
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/iamnabeelrahman"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: Nabeel Rahman
            </a>
          <li>
            <a
              href="https://x.com/IamNabeelRahman"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter: @IamNabeelRahman
            </a>
          </li>
          <li>
            <a
              href="mailto:nabeel.r.work@gmail.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email: nabeel.r.work@gmail.com
            </a>
          </li>
          </li>
        </ul>
      </div>
    </section>
  );
}
