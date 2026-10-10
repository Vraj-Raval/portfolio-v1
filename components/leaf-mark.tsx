type LeafMarkProps = {
  className?: string;
};

export function LeafMark({ className = "" }: LeafMarkProps) {
  return <span className={`leaf-mark ${className}`} aria-hidden="true" />;
}
