# Kinde Next.js Starter

A starter template using [Next.js](https://nextjs.org) and [Kinde](https://kinde.com) for authentication.

## Pre-requisites

### 1. Create a Kinde account

Create a [Kinde](https://app.kinde.com/register) account if you already don't have one.

### 2. Add a backend application in Kinde

1. Go to `Settings > Applications`.
2. Click the `Add application` button in the top right.
3. Give your application a name and make sure you select `Back-end web` as the application type.
4. Click `Save`.
5. In the `Quick start` screen, select `Next.js` as the technology.
6. Click `Save`.
7. Click on `Authentication` in the left sidebar menu.
8. Make sure you enabled at least one connection for your application (e.g. "Email + code")
9. Click `Save`.

### 3. Create a Vercel account

Create a [Vercel](https://vercel.com/signup) account if you already don't have one.

## Get your environment variables from Kinde

1. In Kinde, go to `Settings > Applications > [Your app] > Details`.
2. For the next step, you will need the following values under `App keys`:
   - `Domain`
   - `Client ID`
   - `Client secret`

## Deploy this template

After clicking the button below, you will need to fill-in the following environment variables to successfully deploy this template:

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmarcosmartini%2Fkinde-next-starter&env=KINDE_ISSUER_URL,KINDE_CLIENT_ID,KINDE_CLIENT_SECRET&envDescription=Environment%20variables%20needed&envLink=https%3A%2F%2Fdocs.kinde.com%2Fdeveloper-tools%2Fsdks%2Fbackend%2Fnextjs-sdk%2F%23configure-environment-variables&project-name=kinde-next-starter&repository-name=kinde-next-starter"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

- `KINDE_ISSUER_URL`: This is the `Domain` value mentioned on the step above.
- `KINDE_CLIENT_ID`: This is the `Client ID` value mentioned on the step above.
- `KINDE_CLIENT_SECRET`: This is the `Client secret` value mentioned on the step above.

## After you deploy

Before signing in or signing up, make sure to go through the checklist. Basically:

### 1. Check if an authentication method is enabled

Make sure you enabled at least one connection for your application in Kinde (e.g. "Email + code") under `Settings > Applications > [Your application] > Authentication`.

### Set callback URLs

> [!IMPORTANT]
> Make sure to replace `[your-vercel-slug]` in the code examples below with your Vercel project or team slug, but keep the `*` (asterisk).
> [More info on wild card callback URLs in Kinde](https://docs.kinde.com/get-started/connect/callback-urls/?r=search#wildcards-in-callback-urls)

1. In Kinde, go to `Settings > Applications > [Your app] > View details`.

2. Add your callback URLs in the relevant fields:

   - #### Allowed callback URLs:

   ```bash
   http://localhost:3000/api/auth/kinde_callback
   https://*[your-vercel-slug].vercel.com/api/auth/kinde_callback
   ```

   - #### Allowed logout redirect URLs:

   ```bash
   http://localhost:3000
   https://*[your-vercel-slug].vercel.com
   ```

3. Click `Save`.

## Running locally

1. Clone this repository
   ```sh
   git clone https://github.com/marcosmartini/kinde-next-starter.git
   ```
2. [Create a Kinde account](https://github.com/marcosmartini/kinde-next-starter?tab=readme-ov-file#1-a-kinde-account)
3. [Create a backend application](https://github.com/marcosmartini/kinde-next-starter?tab=readme-ov-file#1-a-kinde-account)
4. Add your callback URLs in the relevant fields for your application in Kinde:

   - #### Allowed callback URLs:

   ```bash
   http://localhost:3000/api/auth/kinde_callback
   ```

   - #### Allowed logout redirect URLs:

   ```bash
   http://localhost:3000
   ```

5. Fill in the missing environment variables in `.env.local.example`
6. Install the dependencies with `npm run install`
7. Start the development server with `npm run dev`
