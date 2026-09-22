# Vercel + Supabase deployment

## 1) Create Supabase project
Create a free Supabase project, open SQL Editor, and run `supabase/schema.sql`.

## 2) Deploy to Vercel
Import this folder/repository into Vercel. The included `vercel.json` sends `/api/*` to the serverless Express function and serves the existing website files.

## 3) Vercel Environment Variables
Add these in Project Settings -> Environment Variables:
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- ADMIN_PIN
- VAPID_SUBJECT
- VAPID_PUBLIC_KEY
- VAPID_PRIVATE_KEY

Redeploy after saving environment variables.

## 4) Push notifications
Generate VAPID keys once with `npx web-push generate-vapid-keys`, then put the keys in Vercel. The public key is also stored in Admin Settings for browser subscription.

## 5) Important
Do not put `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_PIN`, or `VAPID_PRIVATE_KEY` into frontend JavaScript or GitHub. They must stay as Vercel server environment variables.
