This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Much was copy-pasted from the official tutorial for Next.js, as little as possible though for demonstration purposes.

## Deploy on Vercel

Add an environment variable called AUTH_SECRET with the result of `openssl rand -base64 32`.

## Deploy using Open Next

```
echo "AUTH_SECRET=\"$(openssl rand -base64 32)\"" >> .env
yarn install
yarn exec sst deploy --stage prod
```
