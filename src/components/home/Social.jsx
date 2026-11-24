const Social = () => {
  const socialLinks = [
    {
      href: "https://github.com/Amirhossein-Mirzaee",
      label: "GitHub",
      icon: "uil-github-alt",
    },
    {
      href: "https://t.me/amirhossein_mirzaee",
      label: "Telegram",
      icon: "uil-telegram",
    },
    {
      href: "mailto:amir2021zx@gmail.com",
      label: "Email",
      icon: "uil-envelope",
    },
  ];

  return (
    <div className="flex items-center gap-5 lg:flex-col lg:gap-7">
      {socialLinks.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-xl text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
        >
          <i className={`uil ${icon}`} />
        </a>
      ))}
    </div>
  );
};

export default Social;
