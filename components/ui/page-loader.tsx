import Skeleton from "./skeleton";

export default function PageLoader() {
  return (
    <div className="animate-in fade-in duration-500">

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">

        <Skeleton className="absolute inset-0 rounded-none" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

          <div className="max-w-3xl space-y-8">

            <Skeleton className="h-10 w-56 rounded-full" />

            <Skeleton className="h-24 w-full max-w-2xl" />

            <Skeleton className="h-24 w-[90%]" />

            <Skeleton className="h-8 w-[70%]" />

            <div className="flex gap-4">

              <Skeleton className="h-14 w-52 rounded-full" />

              <Skeleton className="h-14 w-52 rounded-full" />

            </div>

          </div>

        </div>

      </section>

      {/* Featured Services */}

      <section className="mx-auto mt-24 max-w-7xl px-6">

        <Skeleton className="mb-10 h-10 w-72" />

        <div className="grid gap-8 md:grid-cols-3">

          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="space-y-5"
            >
              <Skeleton className="h-72 rounded-3xl" />

              <Skeleton className="h-6 w-40" />

              <Skeleton className="h-4 w-full" />

              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}