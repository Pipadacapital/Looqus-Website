interface SectionLabelProps {
  children: string;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light = false, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 label-caps ${
        light ? "text-white/50" : "text-ember"
      } ${className}`}
    >
      <span className={`w-5 h-px ${light ? "bg-white/30" : "bg-ember"}`} />
      {children}
    </span>
  );
}
