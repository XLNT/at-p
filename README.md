# 🅿️ at-p

**Hella out of date for both urbit-ob and now's platform—if you're interested in using this open an issue and I'll update it.**

This is a super simple typescript microservice that exposes urbit's at-p encoding as a REST API.

I did this because I don't feel like re-writing it in other languages and microservices are ~~cool~~.

## Deploy

It's a normal nodejs microserver and/or dockerfile, so run something like (making sure to change your username in the package.json)

```bash
yarn run build
yarn run docker-build
docker run -p 3000:3000 shrugs/at-p:latest
```

## Usage

### POST `/to/{galaxy,star,planet}`

Input:

```json
{
  "ids": [1, 2, 3]
}
```

Output:

```json
{
  "ids": ["dozzod-doznec", "dozzod-dozbud", "dozzod-dozwes"]
}
```

### POST `/isAddress`

Input:

```json
{
  "id": "dozzod-doznec"
}
```

Output:

```json
{
  "res": true
}
```
