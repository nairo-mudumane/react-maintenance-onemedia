export default function Logo() {
  return (
    <div className="w-max m-1 flex items-center justify-center">
      <img
        src="/logo.png"
        srcSet="/logo.png"
        loading="lazy"
        alt="OneMedia SA logo"
      />
    </div>
  );
}
