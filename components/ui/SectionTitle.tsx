type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>

      <h2 className="text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-6 text-lg text-gray-600 ${
          centered ? "mx-auto max-w-3xl" : "max-w-3xl"
        }`}>
          {subtitle}
        </p>
      )}

    </div>
  );
}