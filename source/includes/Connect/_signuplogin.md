## Signup/login to Xfers

```shell
curl "https://sandbox.xfers.io/api/v3/authorize/signup_login"\
  -H "X-XFERS-APP-API-KEY: yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ"\
  -H "Content-Type: application/json" \
  -d '{"phone_no" : "+6597288608", "signature" : "178502abfa891b69a9a2f72192d51f5fc141f978"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setSGSandbox();
$xfers_app_api_key = 'yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ';
try {
    $resp = \Xfers\Connect::authorize(array(
        'phone_no' => '+6597288608',
        'signature' => '178502abfa891b69a9a2f72192d51f5fc141f978'
    ), $xfers_app_api_key);
    print_r($resp);
} catch (\Xfers\Error\Api $e) {
    echo 'Caught Api exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfconnect
from xfers import error

xfers.set_sg_sandbox()
XFERS_APP_API_KEY = 'yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ'

try:
    print 'Authorizing connect...'
    params = {
        'phone_no': '+6597288608',
        'signature': '178502abfa891b69a9a2f72192d51f5fc141f978'
    }
    resp = xfconnect.authorize(params, XFERS_APP_API_KEY)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_sg_sandbox
XFERS_APP_API_KEY = 'yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ'

begin
  puts 'Authorizing connect...'
  params = {
      'phone_no'=> '+6597288608',
      'signature'=> '178502abfa891b69a9a2f72192d51f5fc141f978'
  }
  resp = Xfers::Connect.authorize params, XFERS_APP_API_KEY
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.setSGSandbox();
String xfersAppApiKey = "yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ";
String xfersAppSecretKey = "178502abfa891b69a9a2f72192d51f5fc141f978";

try {
    System.out.println("Authorizing");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("phone_no", "+6597288608");
    Response response = Connect.authorize(params, xfersAppApiKey, xfersAppSecretKey);
    System.out.println(response.getMsg());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response

```json
  {
    "msg": "success"
  }
```

This API call will attempt to login(existing user) or signup a new user.

An SMS with a OTP will be send to that number which must be used for [get_token](/#get-user-api-token) api call.

### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/authorize/signup_login`


### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
phone_no | string | required | User mobile no | +6597288608
signature | string | required | SHA1 of phone_no + APP_SECRET_KEY  | Phone Number: <input type="text" id="phone_signup" value="+6597288608"><br/>Secret Key: <input type="text" id="secretkey_signup" value="YZngoTmcNrB2uQnYvHzd-oWEABeV5rd7xNsxkG45DkY"><br/>Signature: <span id="signature_signup">178502abfa891b69a9a2f72192d51f5fc141f978</span>
