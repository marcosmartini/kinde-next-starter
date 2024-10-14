import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  return (
    <main className="mx-auto grid h-full max-w-2xl place-items-center px-4 py-20 md:px-8">
      <h1>Dashboard</h1>
      {(await isAuthenticated()) && (
        <>
          <pre>
            <code>{JSON.stringify(user, null, 2)}</code>
          </pre>
        </>
      )}
    </main>
  );
}
