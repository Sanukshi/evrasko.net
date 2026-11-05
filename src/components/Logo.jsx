/** Evrasko logo (white wordmark with red mark), made for the site's dark surfaces. */
export default function Logo({ className = '' }) {
  return (
    <img
      src="/logo.svg"
      alt="Evrasko"
      width="334"
      height="92"
      className={`h-14 w-auto object-contain sm:h-16 ${className}`}
    />
  );
}
