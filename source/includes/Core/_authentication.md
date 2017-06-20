
## Authentication

> Setting API keys

```shell
# With shell, you can just pass the correct header with each request
curl "https://sandbox.xfers.io/api/v3/authorize/hello" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk');
\Xfers\Xfers::setSGSandbox();
```

```python
import xfers
xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
xfers.set_sg_sandbox()
```

```ruby
require 'xfers'

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
Xfers.set_sg_sandbox
```

```java
Xfers.apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();
```

> Make sure to replace `2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk` with your own API key.

Xfers uses API keys to allow access to the API. You can get your API key from your [Account Settings](https://sandbox.xfers.io/api_tokens) page.

Xfers expects the API key to be included in the header of all API requests to the server, like so:

`X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk`


#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/authorize/hello`


<aside class="notice">
You must replace <code>2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk</code> with your personal API key.
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

