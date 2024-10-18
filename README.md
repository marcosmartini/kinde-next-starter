# Kinde Next.js Starter

![Composite of the project running in a browser window](https://raw.githubusercontent.com/marcosmartini/kinde-next-starter/44df1de9abb02aab34985ed9abb7e4e91b413f03/public/demo-image.png)

A starter template using [Next.js](https://nextjs.org) and [Kinde](https://kinde.com) for authentication.

## Pre-requisites

### 1. Create a Kinde account

Create a [Kinde](https://app.kinde.com/register) account if you don't already have one.

### 2. Add a back-end application in Kinde

1. Go to `Settings > Applications`.
2. Select `Add application` in the top right.
3. Give your application a name and make sure you select `Back-end web` as the application type.
4. Select `Save`.
5. In the `Quick start` screen, select `Next.js` as the technology and `Save`.
6. Select `Authentication` in the left menu.
7. Enable at least one authentication method for your application (e.g. "Email + code")
8. Then `Save`.

### 3. Create a Vercel account

Create a [Vercel](https://vercel.com/signup) account if you don't already have one.

## Get your environment variables from Kinde

1. In Kinde, go to `Settings > Applications > [Your app] > Details`.
2. Copy the following values in the `App keys` section:
   - `Domain`
   - `Client ID`
   - `Client secret`

## Deploy this template

When you click the **deploy** button below, you will be prompted to fill in the environment variables you copied previously. These are required to successfully deploy this template.

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmarcosmartini%2Fkinde-next-starter&env=KINDE_ISSUER_URL,KINDE_CLIENT_ID,KINDE_CLIENT_SECRET&envDescription=Find%20your%20application%20keys&envLink=https%3A%2F%2Fdocs.kinde.com%2Fget-started%2Fconnect%2Fgetting-app-keys%2F%&project-name=kinde-next-starter&repository-name=kinde-next-starter"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

- `KINDE_ISSUER_URL`: `Domain` value.
- `KINDE_CLIENT_ID`: `Client ID` value.
- `KINDE_CLIENT_SECRET`: `Client secret` value.

## After you deploy

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

3. Then `Save`.

## Run locally

1. Clone this repository.
   ```sh
   git clone https://github.com/marcosmartini/kinde-next-starter.git
   ```
2. [Create a Kinde account](#1-create-a-kinde-account).
3. [Create a backend application](#2-add-a-backend-application-in-kinde).
4. Make sure you enabled at least one connection for your application in Kinde (e.g. "Email + code") under `Settings > Applications > [Your application] > Authentication`.
5. Add your callback URLs in the relevant fields for your application in Kinde:

   - #### Allowed callback URLs:

   ```bash
   http://localhost:3000/api/auth/kinde_callback
   ```

   - #### Allowed logout redirect URLs:

   ```bash
   http://localhost:3000
   ```

6. Fill in the missing environment variables in `.env.local.example`
7. Install the dependencies with `npm run install`
8. Start the development server with `npm run dev`
