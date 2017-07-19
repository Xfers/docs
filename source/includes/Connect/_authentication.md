## Authentication


Xfers Connect uses a pair of API Keys and API Secret to access its APIs.

Write in to us at support@xfers.io to request for your Xfers Connect API Keys.
You will provided with a pair of keys named `X-XFERS-APP-API-KEY` and `X-XFERS-APP-SECRET-KEY`.

Xfers Connect expects the API key to be included in the "Signup/login to Xfers" and "Get User API Token" process to look like the following:

`X-XFERS-APP-API-KEY: Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg`


These keys are different from the usual API keys which you include in the `X-XFERS-USER-API-KEY` header. App Connect API keys are only used for the Xfers Connect APIs. Thus instead of `X-XFERS-USER-API-KEY: YOUR-NORMAL-USER-API-KEY` , you pass in `X-XFERS-APP-API-KEY: THE-APP-API-KEY` as the header instead.