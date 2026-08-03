interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
        Shine Luxury Spa
      </p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="mt-3 max-w-xl text-neutral-500">
        {description}
      </p>
    </div>
  );
}