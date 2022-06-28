import SmartSolutionCard from './SmartSolutionCard';

export default function Solutions({ solutions }: any) {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mx-auto max-w-2xl pb-16 lg:max-w-none">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-200">
          Solutions
        </h2>
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {solutions.map((solution: any) => (
            <SmartSolutionCard
              key={solution._id}
              slug={solution.slug}
              title={solution.title}
              excerpt={solution.excerpt}
              coverImage={solution.coverImage}
              _id={solution._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
