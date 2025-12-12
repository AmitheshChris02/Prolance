import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col tablet-footer-container">
        <p className="caption text-n-4 lg:block">
          <span className="font-semibold font-serif text-xs">&copy;</span>{" "}
          <span className="text-color-1 font-medium">Prolance Technologies</span>{" "}
          {new Date().getFullYear()}. All rights reserved by us.
          <br />
          <a
            href="https://drive.google.com/file/d/1WKvcS6_0Js1aMKzZmhyvd861DWmMkvBm/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="text-n-3 hover:text-color-1 transition-colors text-xs underline"
          >
            Terms and Conditions
          </a>
        </p>

        <ul className="flex gap-5 flex-wrap sm:mr-8">
          {socials.map((social) => (
            <a
              href={social.url}
              key={social.id}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img
                src={social.iconUrl}
                alt={social.title}
                width={16}
                height={16}
                loading="lazy"
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;