const developers = [
  {
    name: "Rehan Pasha",
    github: "https://github.com/reehanpasha",
  },
  {
    name: "Sai Vivek KN",
    github: "https://github.com/DvivekD",
  },
];

export default function DeveloperCredits() {
  return (
    <section className="w-full border-t border-white/10 bg-[#080c14] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-400">
          THE PEOPLE BEHIND PRAXIS
        </p>

        <h2 className="mb-8 text-3xl font-bold">
          Built by Developers.
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {developers.map((developer) => (
            <div
              key={developer.name}
              className="rounded-2xl border border-white/10 p-7"
            >
              <h3 className="text-xl font-bold">
                {developer.name}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                PRAXIS Developer
              </p>

              <a
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-cyan-400"
              >
                View GitHub Profile ↗
              </a>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/reehanpasha/Praxis.IO"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm text-gray-400 underline"
        >
          Explore PRAXIS on GitHub ↗
        </a>
      </div>
    </section>
  );
}
