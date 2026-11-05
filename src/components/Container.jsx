/** Centered 1200px content column with 16px gutters on mobile. */
export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`mx-auto w-full max-w-container px-4 sm:px-6 xl:px-0 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
