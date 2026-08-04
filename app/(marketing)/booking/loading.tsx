export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">

      <div className="animate-pulse">

        <div className="h-12 w-80 rounded bg-neutral-200" />

        <div className="mt-4 h-6 w-96 rounded bg-neutral-100" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-72 rounded-3xl bg-neutral-200"
            />
          ))}

        </div>

      </div>

    </div>
  );
}