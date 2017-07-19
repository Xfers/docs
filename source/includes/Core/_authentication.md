
## Authentication

> Setting API keys

```shell
# With shell, you can just pass the correct header with each request
curl "https://sandbox.xfers.io/api/v3/authorize/hello" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc');
\Xfers\Xfers::setSGSandbox();
```

```python
import xfers
xfers.api_key = 'FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc'
xfers.set_sg_sandbox()
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox
```

```java
Xfers.apiKey = "FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc";
Xfers.setSGSandbox();
```

> Make sure to replace `FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc` with your own API key.

Xfers uses API keys to allow access to the API. You can get your API key from your [Account Settings](https://sandbox.xfers.io/account_settings) page.

Xfers expects the API key to be included in the header of all API requests to the server, like so:

`X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc`


#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/authorize/hello`


<aside class="notice">
You must replace <code>FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc</code> with your personal API key.
</aside>
<aside class="warning">
All endpoints are in HTTPS. Please do not attempt to hit our endpoint in HTTP, beside failing you will also be exposing your API key in plain text!
</aside>


### Types of API Keys


Type | Version | Description  |
---- | ----------- | ------------ |
X-XFERS-APP-API-KEY | V3 | Only used for Xfers Connect
X-XFERS-USER-API-KEY| V3 | The majority of our APIs uses this
X-XFERS-USER-API-KEY | V2 (Legacy) | Our legacy V2 API keys. These are only used for our WooCommerce, Opencart and Magento plugins.

![XFERS-API-KEYS][xfers-api-keys]
[xfers-api-keys]: xfers-api-keys.png

