## Get User API Token

```shell
curl "https://sandbox.xfers.io/api/v3/authorize/get_token?otp=541231&phone_no=%2B6597288608&signature=bdc26373b3a78dd11dc840a1b7973f197cf34c91" \
  -H "X-XFERS-APP-API-KEY: yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ"

# You can now change the X-XFERS-USER-API-KEY to the returned user_api_token
# and make API calls on behalf of the connect user.
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setSGSandbox();
$xfers_app_api_key = 'yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ';
try {
    $resp = \Xfers\Connect::getToken(array(
        'otp' => '541231',
        'phone_no' => '+6597288608',
        'signature' => '178502abfa891b69a9a2f72192d51f5fc141f978',
        'return_url' => 'https://mywebsite.com/api/v3/account_registration/completed'
    ), $xfers_app_api_key);
    print_r($resp);

    # You can now call \Xfers\Xfers::setApiKey again to change the X-XFERS-USER-API-KEY to the returned user_api_token
    # and make API calls on behalf of the connect user.
    $user_api_token = $resp['user_api_token'];
    \Xfers\Xfers::setApiKey($user_api_token);
    $resp = \Xfers\User::retrieve();

} catch (\Xfers\Error\Api $e) {
    echo 'Caught Api exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfconnect
from xfers import xfuser
from xfers import error

xfers.set_sg_sandbox()
XFERS_APP_API_KEY = 'yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ'

try:
    print 'Getting token...'
    params = {
        'otp': '541231',
        'phone_no': '+6597288608',
        'signature': '178502abfa891b69a9a2f72192d51f5fc141f978',
        'return_url': 'https://mywebsite.com/api/v3/account_registration/completed'
    }
    resp = xfconnect.get_token(params, XFERS_APP_API_KEY)
    print resp

    # You can now set xfers.api_key again to change the X-XFERS-USER-API-KEY to the returned user_api_token
    # and make API calls on behalf of the connect user.
    xfers.api_key = resp['user_api_token']
    connected_user = xfuser.retrieve()

except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_sg_sandbox
XFERS_APP_API_KEY = 'yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ'

begin
  puts 'Getting connect token...'
  params = {
      'otp'=> '541231',
      'phone_no'=> '+6597288608',
      'signature'=> '178502abfa891b69a9a2f72192d51f5fc141f978',
      'return_url'=> 'https://mywebsite.com/api/v3/account_registration/completed'
  }
  resp = Xfers::Connect.get_token params, XFERS_APP_API_KEY
  user_api_token =  resp[:user_api_token]
  puts resp

  # You can now call Xfers.set_api_key again to change the X-XFERS-USER-API-KEY to the returned user_api_token
  # and make API calls on behalf of the connect user.

  Xfers.set_api_key user_api_token

  connect_user = Xfers::User.retrieve
  puts connect_user[:first_name]
  puts connect_user[:last_name]
  puts connect_user[:available_balance]
  puts connect_user

rescue Xfers::XfersError => e
  puts e.to_s
end

```

```java
Xfers.setSGSandbox();
String xfersAppApiKey = "AeWpKz5cdPoJFUwF53sBee_WsSoqym_hspiX3bcoB_Y";
String xfersAppSecretKey = "yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ";

try {
    System.out.println("Getting token");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("otp", "541231");
    params.put("phone_no", "+6597288608");
    params.put("return_url", "https://mywebsite.com/api/v3/account_registration/completed");
    Response response = Connect.getToken(params, xfersAppApiKey, xfersAppSecretKey);
    System.out.println(response.getMsg());
    System.out.println(response.getUserApiToken());
    System.out.println(response.getSignUpUrl());

    // You can now set Xfers.apiKey again to change the X-XFERS-USER-API-KEY to the returned user_api_token
    // and make API calls on behalf of the connect user.

    Xfers.apiKey = response.getUserApiToken();
    System.out.println("Retrieving connected user");
    User user = User.retrieve();

} catch (Exception e) {
    e.printStackTrace();
}
```

> Response

```json
  {
    "msg": "success",
    "user_api_token": "1DnsZkv3qXwKx4EAdps8AJ8jXCPsxP2sKSygMHTAFLM",
    "sign_up_url" : "https://sandbox.xfers.io/api/v3/account_registration?phone_no=%2B6597288608&token=4014d3e9f0600f78dbfabd86036de7b008f70c52"
  }
```


This API call will return the user's `user_api_token`. You should save this token in database for reuse. There is no need to go through the connect flow again for this user.

It will also return a `sign_up_url` if and ONLY IF they do not already have an Xfers account. The url can be loaded to serve a page that allow user to complete their Xfers account registration (this is optional and is only needed if the user wants to login to their Xfers Dashboard).

It will also return a `is_fully_verified` if and ONLY IF they already have an Xfers account and have completed our KYC process.

If you choose to redirect new Xfers user to the unique sign_up_url to allow them to complete their Xfers account registrations, upon successfully account registration, Xfers will redirect user back to the `return_url` specified or the default at "\<Endpoint>/api/v3/account_registration/completed". The automated SMS from Xfers will not be sent if user complete their account registration this way within 15mins.

<aside class="warning">
Remember to encode the '+' sign in your phone no during your GET request. It should be '%2B' instead of '+'
</aside>


### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/authorize/get_token?otp=541231&phone_no=%2B6597288608&signature=bdc26373b3a78dd11dc840a1b7973f197cf34c91`

### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
otp | string | required | 6 digit one-time-password send over SMS | 541231
phone_no | string | required | User mobile no | +6597288608
signature | string | required | SHA1-hex of (phone_no + OTP + APP_SECRET_KEY) | Phone Number: <input type="text" id="phone_gettoken" value="+6597288608"><br/>OTP: <input type="text" id="otp_gettoken" value="541231"><br/>Secret Key: <input type="text" id="secretkey_gettoken" value="YZngoTmcNrB2uQnYvHzd-oWEABeV5rd7xNsxkG45DkY"><br/>Signature: <span id="signature_gettoken">a972388d58c1443295cb89cc9c6f59789630a45f</span>
return_url | string | optional | Url that new user will be redirected after they completed Xfers account registration at `sign_up_url` provided. | Default "\<Endpoint>/api/v3/account_registration/completed"


<aside class="notice">
Note that the signature required here for /get_token  is different from the one for /signup_login.
</aside>

`/authorize/signup_login` - SHA1-hex of (phone_no + APP_SECRET_KEY)

`/authorize/get_token` - SHA1-hex of (phone_no + OTP + APP_SECRET_KEY)
