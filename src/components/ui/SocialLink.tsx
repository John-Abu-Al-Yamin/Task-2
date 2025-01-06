interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="text-white hover:text-green-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}