import Topics from "@/components/Topics";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const contentToExplore = [
    {
      title: "Authentication",
      content: [
        {
          title: "Sign up and sign in",
          link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#sign-up-and-sign-in",
        },
        {
          title: "Redirecting after authentication",
          link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#redirecting-after-authentication",
        },
        {
          title: "Log out",
          link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#logout",
        },
      ],
    },
    {
      title: "Organizations",
      content: [
        {
          title: "Create organizations",
          link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#create-organizations",
        },
        {
          title: "Sign in to organizations",
          link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#sign-into-organizations",
        },
      ],
    },
    {
      title: "Methods by approach",
      content: [
        {
          title: "Server side",
          link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#kinde-auth-data---server",
        },
        {
          title: "Client side",
          link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#kinde-auth-data---client",
        },
      ],
    },
  ];

  return (
    <main className="mx-auto flex h-full w-full max-w-7xl animate-fade-in-up flex-col gap-8 px-4 py-12 opacity-0 md:px-8">
      <section className="py-16">
        <h1 className="mb-12 text-center text-7xl tracking-tight">
          Your authentication is all sorted!
        </h1>
        {(await isAuthenticated()) && (
          <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-4 pt-10">
            <div className="flex w-full items-center justify-start gap-2">
              <div className="inline-flex rounded-md border border-slate-300 bg-slate-100 px-2 py-[.3em] font-mono text-sm text-black">
                id
              </div>
              <div className="inline-flex rounded-md border border-slate-200 bg-white px-2 py-[.3em] font-mono text-sm">
                {user?.id}
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-2">
              <div className="inline-flex rounded-md border border-slate-300 bg-slate-100 px-2 py-[.3em] font-mono text-sm text-black">
                email
              </div>
              <div className="inline-flex rounded-md border border-slate-200 bg-white px-2 py-[.3em] font-mono text-sm">
                {user?.email}
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-2">
              <div className="inline-flex rounded-md border border-slate-300 bg-slate-100 px-2 py-[.3em] font-mono text-sm text-black">
                given_name
              </div>
              <div className="inline-flex rounded-md border border-slate-200 bg-white px-2 py-[.3em] font-mono text-sm">
                {user?.given_name}
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-2">
              <div className="inline-flex rounded-md border border-slate-300 bg-slate-100 px-2 py-[.3em] font-mono text-sm text-black">
                family_name
              </div>
              <div className="inline-flex rounded-md border border-slate-200 bg-white px-2 py-[.3em] font-mono text-sm">
                {user?.family_name}
              </div>
            </div>
            <a
              href="https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/"
              className="button mt-4 block w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              See full Next.js docs
            </a>
          </div>
        )}
      </section>
      <hr className="my-10" />
      <section className="py-16">
        <h2 className="mb-16 text-5xl leading-none tracking-tight">
          Get started with our Next.js SDK
        </h2>
        <ul className="grid grid-cols-1 divide-x py-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {contentToExplore?.map((topic) => (
            <li key={topic?.title} className="-mx-8 flex flex-col gap-8 px-8">
              <h3 className="text-2xl">{topic.title}</h3>
              <ul className="flex flex-col gap-3">
                {topic.content?.map((content) => (
                  <li key={content.link} className="inline-flex">
                    <a
                      className="rounded-lg border border-slate-100 bg-white px-3 py-2 transition hover:border-black hover:bg-black hover:text-white"
                      href={content.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center pb-2 pt-12">
          <a
            href="https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk"
            className="button inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            See full Next.js SDK docs
          </a>
        </div>
      </section>
      <hr className="my-10" />
      <section className="py-16">
        <h2 className="mb-16 pb-6 text-5xl leading-none tracking-tight">
          Explore all you can do with Kinde
        </h2>
        <Topics />
      </section>
    </main>
  );
}
