
## Charges

The following APIs allow anyone to pay you via an internet banking transfer or credit card.

The user pays by going to the `checkout_url` returned (assuming `redirect` is set to `false`). When `redirect` is true, instead of the JSON response, Xfers will automatically redirect the request to our checkout page.

Our checkout page contains the relevant instructions for the user to login/signup and guides them to make payment. If the user already has an Xfers account with enough balance, we deduct directly from that account.


### Creating a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{ "amount": "9.99", "currency": "SGD", "redirect": "false", "notify_url": "https://mysite.com/payment_notification", "return_url": "https://mysite.com/return", "cancel_url": "https://mysite.com/cancel", "order_id": "AZ9912", "description":"unused red dress", "metadata": {"firstname":"Tianwei", "lastname":"Liu"}}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('Vsya_qc5KjiUGK3xyKRgmhb2Atir2wAyizqssRuYJYw');
\Xfers\Xfers::setSGSandbox();
try {
    $metadata = array(
      'firstname' => 'Tianwei',
      'lastname' => 'Liu'
      );
    $resp = \Xfers\Charge::create(array(
        'amount' => '9.99',
        'currency' => 'SGD',
        'notify_url' => 'https://mysite.com/payment_notification',
        'return_url' => 'https://mysite.com/return',
        'cancel_url' => 'https://mysite.com/cancel',
        'order_id' => 'AZ9912',
        'description' => 'unused red dress',
        'redirect' => 'false',
        'metadata' => $metadata
    ));
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import json
import xfers
from xfers import xfcharge
from xfers import error
xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
xfers.set_sg_sandbox()
try:
    print 'Creating charge...'
    metadata = {'firstname': 'Tianwei', 'lastname': 'Liu'}
    params = {
        'amount' : '9.99',
        'currency' : 'SGD',
        'notify_url' : 'https://mysite.com/payment_notification',
        'return_url' : 'https://mysite.com/return',
        'cancel_url' : 'https://mysite.com/cancel',
        'order_id' : 'AZ9912',
        'description' : 'unused red dress',
        'redirect': False,
        'metadata' : json.dumps(metadata)
    }
    resp = xfcharge.create(params)
    charge_id = resp['id']
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
Xfers.set_sg_sandbox

begin
  puts 'Creating charge...'
  params = {
        'amount' => '9.99',
        'currency' => 'SGD',
        'notify_url' => 'https://mysite.com/payment_notification',
        'return_url' => 'https://mysite.com/return',
        'cancel_url' => 'https://mysite.com/cancel',
        'order_id' => 'AZ9912',
        'description' => 'unused red dress',
        'redirect' => false,
        'metadata' => {'firstname'=> 'Tianwei', 'lastname'=> 'Liu'}
  }
  resp = Xfers::Charge.create params
  charge_id = resp[:id]
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
try {
    String apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";

    System.out.println("Creating a charge");
    Map<String, String> metadata = new HashMap<String, String>();
    metadata.put("firstname", "Tianwei");
    metadata.put("lastname", "Liu");

    Map<String, Object> params = new HashMap<String, Object>();
    Gson gson = new Gson();

    params.put("amount", "9.99");
    params.put("currency", "SGD");
    params.put("notify_url", "https://mysite.com/payment_notification");
    params.put("return_url", "https://mysite.com/return");
    params.put("cancel_url", "https://mysite.com/cancel");
    params.put("order_id", "AZ9912");
    params.put("description", "unused red dress");
    params.put("redirect", false);
    params.put("metadata", gson.toJson(metadata));

    Charge charge = Charge.create(params, apiKey);
    System.out.println(charge.getId());
    System.out.println(charge.getAmount());
    System.out.println(charge.getCheckoutUrl());
    System.out.println(charge.getOrderId());
    System.out.println(charge.getStatus());
    System.out.println(charge.toString());

} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "id": "contract_b840cc9fc5a359c22ed2ccef3427aacd",
  "object": "TransferContract",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "amount" : "9.99",
  "currency" : "SGD",
  "order_id" : "A012312",
  "description" : "Carousell user - Konsolidate",
  "receipt_email" : "",
  "total_amount" : "12.49",
  "fee_amount" : "0.12",
  "status" : "completed",
  "metadata" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
  },
  "transfer_info": {
    "bank_name_full": "United Overseas Bank",
    "bank_name_abbreviation": "UOB",
    "bank_account_no": "123456789",
    "bank_code": "7375",
    "swift_code": "UOVBSGSGXXX",
    "unique_id": "89898989",
    "outstanding_amount": "0"
  }
}
```


The following request will allow you to create a charge against a customer


`POST https://sandbox.xfers.io/api/v3/charges`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | float | required | How much you want to charge the customer | 9.99
currency | string | required | 3-letter ISO code for currency | SGD
order_id | string | required | Unique ref no provided by you to prevent double charging, this cannot be repeated | A012312
description | string | optional | Description of transaction for display purposes | Carousell user - Konsolidate
customer | string | optional | Customer email or phone number. If provided, only that user can use the checkout_url returned. If the customer does not exist, an account will be created for them using the email/phone number provided. An OTP will be sent to the email/phone for the user to log in | johnny@xfers.com or +65XXXXXXXX
notify_url | string | optional | URL to receive callback notifications on charge success/failure/expiration | https://mysite.com/payment_notification
return_url | string | optional | URL Xfers will redirect customer to on completion of Xfers checkout | https://mysite.com/return
cancel_url | string | optional | URL Xfers will redirect customer to on cancellation of Xfers checkout | https://mysite.com/cancel
user_api_token | string | optional | Buyer's api token obtain via Connect's get user token APIs. When this is provide, this charge will skip user auth. | NbKjcFV5XxGZ-Uf2XnxyshFcrGtoxmLms9YEgokzDRo
user_phone_no | string | optional | When this is provided, buyer will receive an OTP(one time password) from Xfers which they can provide to merchant to skip user authentication. See [Authorize a Charge](/#authorize-a-charge). | 85228000
google_auth | boolean | optional | When this is true and user_phone_no is provided, instead of phone SMS OTP, user can use Google Authenticator to do OTP. See [Authorize a Charge](/#authorize-a-charge). | Default to false
transactional_only | boolean | optional | Enables transactional charge when true. [See more info](/#transactional-charge). Only selected Xfers partners have this feature available. | Default to false
debit_only | boolean | optional | When this is true, this charge will attempt to debit from users existing balance/card on file. Status returned will be "completed" on successful debit or "cancelled" when there insufficient funds / valid card on file in user wallet. | Default to false
card_only | boolean | optional | When this is true, this charge will will attempt to take payments via credit/debit card. | Default to false
redirect | boolean | optional | When this is true, instead of the JSON response, Xfers will automatically redirect the request to our checkout page| Default to true.
hrs_to_expirations | float | optional | No of hours before this transactons will expire  | Default to 48.0 hours from now.
meta_data | string | optional | A set of key/value pairs that you can attach to a charge. It can be useful for storing additional information about the customer in a structured format. You will be provided with these metadata in your callback notification | {"firstname":"tianwei", "lastname":"liu"}
receipt_email | string | optional | The email address to send this charge's receipt. | tianwei@xfers.io
skip_notifications | boolean | optional | Setting this to true will not send transaction reminders/cancelled/expired emails/SMS. Users will still receive payment completed notification. | Default to false.

#### Create Charge Response

If a `user_api_token` is given and the user has insufficient xfers wallet balance, the response will return the `transfer_info` object containing information about the bank the user should transfer to. If multiple banks are available, the `transfer_info_array` will also be returned.

If you receive a status code of 503, please retry the request after a period of time. A "Retry-After" header is provided by the response to indicate the length of time (in seconds) before you should retry.


#### Transactional Charge (Not available yet)
A transactional charge has a bank topup tied to every charge created.
That means, if you create a charge for an item that a user has bought - say a pair of jeans costing $25.99 - the user must then topup exactly $25.99 into the bank account number returned in the response. The charge will then go through.

Any wallet balance the user has will not be used. The $25.99 topup will only go towards payment of the pair of jeans.

Set the `transactional_only` flag to `true` when creating a charge. Note that this feature is only available to selected Xfers partners.

Transactional charges are not subject to KYC limits and merchants do not have to submit KYC documents of their customers.


### Payment Notifications

After payment has been completed and verified by Xfers backend, Xfers will send a callback to the `notify_url` you provided. This is a server to server HTTPS POST and you will need to acknowledge the callback by providing a HTTP 200 status. It is important to take note that this notification can arrive at your server before or after the customer is redirected to the return_url you provided.

`POST https://mysite.com/payment_notification`

The following parameters will be part of the HTTPS POST:

Name | Type | Description | Value
---- | ---- | -------- | -----------
id | string | Xfers's transaction id unique to each transaction| contract_b840cc9fc5a359c22ed2ccef3427aacd
idempotency_id (formerly known as order_id) | string | Unique ref no provided by your during your charge call | A012312
amount | string | "12.49" | Total value for items
fees | string | "5.0" | Fees for this payment
status | string | Payment status. | "pending", "accepted", "completed", "cancelled", "expired", "refunded"
created_at | string | Date this status was created | "2019-05-15T20:04:57+08:00"

### Authorize a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>/authorize" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{"auth_code": "512312"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('Vsya_qc5KjiUGK3xyKRgmhb2Atir2wAyizqssRuYJYw');
\Xfers\Xfers::setSGSandbox();

try {
    // You must create the charge with user_phone_no param passed in
    $chargeId = '782f2a6e1b5642edb10c8b6b215c4814';
    $authCode = '213779';
    $resp = \Xfers\Charge::authorize($chargeId, $authCode);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfcharge
from xfers import error

xfers.api_key = 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
xfers.set_sg_sandbox()

try:
    charge_id = '0e140a1c251e48939d49651b57394737'
    auth_code = '123049'
    print 'Authorizing charge...'
    resp = xfcharge.authorize(charge_id, auth_code)
    print resp
except error.XfersError as e:
    print str(e)

```

```ruby
require 'xfers'

Xfers.set_api_key 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
Xfers.set_sg_sandbox

begin
  charge_id = 'your-charge-id'
  auth_code = '012414'
  puts "Authorizing charge... #{charge_id}"
  resp = Xfers::Charge.authorize charge_id, auth_code
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();

try {
    System.out.println("Authorize a charge");
    String chargeId = "236d026fb4a5457ca9f60d3b1e806bbc";
    String authCode = "482729";
    Charge charge = Charge.authorize(chargeId, authCode, apiKey);
    System.out.println(charge.toString());
} catch (Exception e) {
    e.printStackTrace();
}

```

> Response:

```json
{
  "id": "contract_b840cc9fc5a359c22ed2ccef3427aacd",
  "object": "TransferContract",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "amount" : "9.99",
  "currency" : "SGD",
  "order_id" : "A012312",
  "description" : "Carousell user - Konsolidate",
  "receipt_email" : "",
  "total_amount" : "12.49",
  "fee_amount" : "0.12",
  "status" : "accepted",
  "metadata" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
  },
  "transfer_info": {
    "bank_name_full": "United Overseas Bank",
    "bank_name_abbreviation": "UOB",
    "bank_account_no": "123456789",
    "bank_code": "7375",
    "swift_code": "UOVBSGSGXXX",
    "unique_id": "89898989",
    "outstanding_amount": "0"
  }
}
```

Authorize a previously created charge. This is an optional process that will allow buyer to skip the sign in flow on Xfers, allowing checkout to be completed on merchant site. If a correct auth_code is provided, the charge will immediately become "accepted" by the buyer.

This endpoint is only used if `user_phone_no` param was passed in during charge creation. The response will return the `transfer_info` object containing information the bank the user should transfer to. If multiple banks are available, the `transfer_info_array` will also be returned.



#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/charges/<id>/authorize`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | -------- | -----------
auth_code | string | Either auth_code or google_auth_code required | SMS OTP code provided to the buyer | 512312
google_auth_code | string | Either auth_code or google_auth_code required | Google Auth OTP code provided to the buyer.  If `google_auth_enabled` of Get Account Info is `false`, user has not enabled Google Auth with Xfers. Direct users to [Xfers 2FA setup page](https://www.xfers.io/settings_2fa) | 738844


### Cancel a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges/<CHARGE_ID>/cancel" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk"
  -X POST
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Charge::cancel("<CHARGE_ID>");
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfcharge
from xfers import error
xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
xfers.set_sg_sandbox()
try:
    print 'Cancelling charge {}...'.format('<CHARGE_ID>')
    resp = xfcharge.cancel('<CHARGE_ID>')
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
Xfers.set_sg_sandbox

begin
  charge_id = '<CHARGE_ID>'
  puts "Cancelling charge... #{charge_id}"
  resp = Xfers::Charge.cancel charge_id
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();
try {
    System.out.println("Cancelling a charge");
    Charge charge = Charge.cancel("<CHARGE_ID>", apiKey);
    System.out.println(charge.toString());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "id": "contract_b840cc9fc5a359c22ed2ccef3427aacd",
  "object": "PendingTransferContract",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "amount" : "9.99",
  "currency" : "SGD",
  "order_id" : "A012312",
  "description" : "Carousell user - Konsolidate",
  "receipt_email" : "",
  "total_amount" : "12.49",
  "fee_amount" : "0.12",
  "status" : "cancelled",
  "metadata" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
  },
  "transfer_info": {
    "bank_name_full": "United Overseas Bank",
    "bank_name_abbreviation": "UOB",
    "bank_account_no": "123456789",
    "bank_code": "7375",
    "swift_code": "UOVBSGSGXXX",
    "unique_id": "89898989",
    "outstanding_amount": "0"
  }
}
```

Cancelling a charge that has been previously created by not yet paid. To refund a paid charge, refer to [creating a refund](/#creating-a-refund).


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/charges/<CHARGE_ID>/cancel`


### Retrieve a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Charge::retrieve("<id>");
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfcharge
from xfers import error
xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
xfers.set_sg_sandbox()
try:
    print 'Retrieving charge {}...'.format('<id>')
    resp = xfcharge.retrieve('<id>')
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
Xfers.set_sg_sandbox

begin
  charge_id = '<id>'
  puts "Retrieving charge... #{charge_id}"
  resp = Xfers::Charge.retrieve charge_id
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();
 try {
    System.out.println("Retrieving a charge");
    Charge charge = Charge.retrieve("<id>", apiKey);
    System.out.println(charge.toString());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "id": "contract_b840cc9fc5a359c22ed2ccef3427aacd",
  "object": "TransferContract",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "amount" : "9.99",
  "currency" : "SGD",
  "order_id" : "A012312",
  "description" : "Carousell user - Konsolidate",
  "receipt_email" : "",
  "total_amount" : "12.49",
  "fee_amount" : "0.12",
  "status" : "completed",
  "metadata" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
  },
  "transfer_info": {
    "bank_name_full": "United Overseas Bank",
    "bank_name_abbreviation": "UOB",
    "bank_account_no": "123456789",
    "bank_code": "7375",
    "swift_code": "UOVBSGSGXXX",
    "unique_id": "89898989",
    "outstanding_amount": "0"
  }
}
```

Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request or provide the ORDER_ID that you previous provided in your create charge call, and Xfers will return the corresponding charge information. The same information is returned when creating or refunding the charge.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/charges/<CHARGE_ID or ORDER_ID>`



### List all Charges

```shell
curl "https://sandbox.xfers.io/api/v3/charges?limit=1" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\Charge::listAll(array(
    'customer' => 'XXXXXXXX',
    'limit' => '1'
));
```

```python
import xfers
from xfers import xfcharge
from xfers import error
xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
xfers.set_sg_sandbox()
try:
    print 'Listing all charges...'
    params = {
        'limit': '1'
    }
    charges = xfcharge.list_all(params)
    for charge in charges:
        print 'Charge: {}'.format(charge)
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
Xfers.set_sg_sandbox

begin
  puts 'Listing all charges...'
  params = {
      'limit'=> '5'
  }
  charges = Xfers::Charge.list_all params
  charges.each { |charge|
    puts charge
  }
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();
try {
    System.out.println("Listing charges without filter");
    List<Charge> charges = Charge.listAll(apiKey);
    for (Charge charge : charges) {
        System.out.println(charge.toString());
        List<Item> items = charge.getItems();
        for (Item item : items) {
            System.out.println(item.toString());
        }
    }

    System.out.println("Listing charges with filter");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("limit", "1");

    charges = Charge.listAll(params);
    for (Charge charge : charges) {
        System.out.println(charge.toString());
    }

} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
[
  {
  "id": "contract_b840cc9fc5a359c22ed2ccef3427aacd",
  "object": "TransferContract",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "amount" : "9.99",
  "currency" : "SGD",
  "order_id" : "A012312",
  "description" : "Carousell user - Konsolidate",
  "receipt_email" : "",
  "total_amount" : "12.49",
  "fee_amount" : "0.12",
  "status" : "completed",
  "metadata" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
  },
  "transfer_info": {
    "bank_name_full": "United Overseas Bank",
    "bank_name_abbreviation": "UOB",
    "bank_account_no": "123456789",
    "bank_code": "7375",
    "swift_code": "UOVBSGSGXXX",
    "unique_id": "89898989",
    "outstanding_amount": "0"
  }
}
]
```


Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/charges`
