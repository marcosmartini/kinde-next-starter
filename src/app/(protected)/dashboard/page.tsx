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
          title: "Sign into organizations",
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
          link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#kinde-auth-data---server",
        },
      ],
    },
  ];

  return (
    <main className="mx-auto flex h-full w-full max-w-7xl flex-col gap-8 px-4 py-20 md:px-8">
      <div>
        <h1 className="mb-12 text-center text-6xl tracking-tight">
          Your authentication is all sorted!
        </h1>

        {(await isAuthenticated()) && (
          <>
            <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
              <pre className="overflow-x-auto rounded-xl border border-slate-100 bg-white p-8 text-sm">
                <code>{JSON.stringify(user, null, 2)}</code>
              </pre>
            </div>
          </>
        )}
      </div>
      <hr className="my-10" />
      <div>
        <h2 className="mb-12 text-center text-4xl leading-none tracking-tight">
          Some topics to explore
        </h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {contentToExplore?.map((topic) => (
            <li
              key={topic?.title}
              className="flex aspect-square flex-col gap-4 rounded-xl border border-slate-100 bg-white p-8"
            >
              <h3 className="text-xl">{topic.title}</h3>
              <ul className="space-y-1">
                {topic.content?.map((content) => (
                  <li key={content.link}>
                    <a
                      className="underline underline-offset-4 transition hover:opacity-70"
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
      </div>
    </main>
  );
}
