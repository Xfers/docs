
## Charges

The following APIs allow anyone to pay you via an internet banking transfer or credit card.

The user pays by going to the `checkout_url` returned (assuming `redirect` is set to `false`). When `redirect` is true, instead of the JSON response, Xfers will automatically redirect the request to our checkout page.

Our checkout page contains the relevant instructions for the user to login/signup and guides them to make payment. If the user already has an Xfers account with enough balance, we deduct directly from that account.


### Creating a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{ "amount": "9.99", "currency": "SGD", "redirect": "false", "notify_url": "https://mysite.com/payment_notification", "return_url": "https://mysite.com/return", "cancel_url": "https://mysite.com/cancel", "order_id": "AZ9912", "description":"unused red dress", "shipping": "2.50", "tax": "0.0", "items" : [{"description":"Red dress Size M","price":9.99,"quantity":1,"name":"Red dress"}], "meta_data": {"firstname":"Tianwei", "lastname":"Liu"}}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('Vsya_qc5KjiUGK3xyKRgmhb2Atir2wAyizqssRuYJYw');
\Xfers\Xfers::setSGSandbox();
try {
    $items = array();
    $item =  array(
      'description' => 'Red dress Size M',
      'price' => '9.99',
      'quantity' => '1',
      'name' => 'Red dress'
    );
    array_push($items, $item);

    $meta_data = array(
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
        'shipping' => '2.50',
        'redirect' => 'false',
        'tax' => '0.0',
        'items' => json_encode($items),
        'meta_data' => $meta_data
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
    items = [{'description': 'Red dress size M', 'price': '9.99', 'quantity': '1', 'name': 'Red dress'}]
    meta_data = {'firstname': 'Tianwei', 'lastname': 'Liu'}
    params = {
        'amount' : '9.99',
        'currency' : 'SGD',
        'notify_url' : 'https://mysite.com/payment_notification',
        'return_url' : 'https://mysite.com/return',
        'cancel_url' : 'https://mysite.com/cancel',
        'order_id' : 'AZ9912',
        'description' : 'unused red dress',
        'shipping' : '2.50',
        'redirect': False,
        'tax' : '0.0',
        'items' : json.dumps(items),
        'meta_data' : json.dumps(meta_data)
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
        'shipping' => '2.50',
        'tax' => '0.0',
        'redirect' => false,
        'items' => [{'description' => 'Red dress Size M', 'price' => '9.99', 'quantity' => 1, 'name' => 'Red dress'}],
        'meta_data' => {'firstname'=> 'Tianwei', 'lastname'=> 'Liu'}
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
    Vector<Map<String, String>> items = new Vector<Map<String, String>>();
    Map<String, String> item = new HashMap<String, String>();
    item.put("description", "Red dress Size M");
    item.put("price", "9.99");
    item.put("quantity", "1");
    item.put("name", "Red dress");
    items.add(item);

    Map<String, String> meta_data = new HashMap<String, String>();
    meta_data.put("firstname", "Tianwei");
    meta_data.put("lastname", "Liu");

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
    params.put("shipping", "2.50");
    params.put("tax", "0.0");
    params.put("items", gson.toJson(items));
    params.put("meta_data", gson.toJson(meta_data));

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
  "id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "object" : "charge",
  "amount" : 9.99,
  "bank_unique_amt": 9.99,
  "currency" : "SGD",
  "customer" : "",
  "order_id" : "A012312",
  "capture" : true,
  "description" : "Carousell user - Konsolidate",
  "items" : [
    {
      "description": "Red Dress Size M",
      "name": "Red dress",
      "quantity": "1.00",
      "price": 9.99,
      "item_id": ""
    }
  ],
  "statement_descriptor" : "",
  "receipt_email" : "",
  "shipping" : 2.50,
  "tax" : 0.00,
  "total_amount" : 12.49,
  "fees" : 0.12,
  "status" : "pending",
  "meta_data" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
  },
  "transfer_info": {
    "bank_name_full": "Oversea-Chinese Banking Corporation Limited",
    "bank_name_abbreviation": "OCBC",
    "bank_account_no": "646004424001",
    "bank_code": "7339",
    "branch_code": "646",
    "branch_area": "Jurong East",
    "unique_id": "89898989",
    "outstanding_amount": {
      "total": 9.99,
      "total_txn": 9.99,
      "bank_unique_amt": 9.99,
      "bank_discount": 0.0
    }
  },
  "transfer_info_array": [
    {
      "bank_name_full" : "Bank Central Asia",
      "bank_name_abbreviation" : "BCA",
      "bank_account_no" : "1063003003",
      "bank_code" : "",
      "branch_code" : "",
      "branch_area" : "",
      "unique_id" : "97288607",
      "img_src": "https://xfers.com/bank-logo-bca.png"
    },
    {
      "bank_name_full" : "Bank Mandiri",
      "bank_name_abbreviation" : "MANDIRI",
      "bank_account_no" : "1190006792749",
      "bank_code" : "",
      "branch_code" : "",
      "branch_area" : "",
      "unique_id" : "97288607",
      "img_src": "https://xfers.com/bank-logo-mandiri.png"    
    },
    {
      "bank_name_full" : "Bank Negara Indonesia",
      "bank_name_abbreviation" : "BNI",
      "bank_account_no" : "8000067885",
      "bank_code" : "",
      "branch_code" : "",
      "branch_area" : "",
      "unique_id" : "97288607",
      "img_src": "https://xfers.com/bank-logo-bni.png"    
    }    
  ]
}
```


The following request will allow you to create a charge against a customer.     

`POST https://sandbox.xfers.io/api/v3/charges`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | float | required | Total value for items, excluding taxes and shipping fees | 9.99
currency | string | required | 3-letter ISO code for currency | SGD
order_id | string | required | Unique ref no provided by you to prevent double charging, this cannot be repeated | A012312
description | string | optional | Description of transaction for display purposes | Carousell user - Konsolidate
customer | string | optional | Customer email or phone number. If provided, only that user can use the checkout_url returned. If the customer does not exist, an account will be created for them using the email/phone number provided. An OTP will be sent to the email/phone for the user to log in | johnny@xfers.com or +6597288608
notify_url | string | optional | URL to receive callback notifications on charge success/failure/expiration | https://mysite.com/payment_notification
return_url | string | optional | URL Xfers will redirect customer to on completion of Xfers checkout | https://mysite.com/return
cancel_url | string | optional | URL Xfers will redirect customer to on cancellation of Xfers checkout | https://mysite.com/cancel
user_api_token | string | optional | Buyer's api token obtain via Connect's get user token APIs. When this is provide, this charge will skip user auth. | NbKjcFV5XxGZ-Uf2XnxyshFcrGtoxmLms9YEgokzDRo
user_phone_no | string | optional | When this is provided, buyer will receive an OTP(one time password) from Xfers which they can provide to merchant to skip user authentication. See [Authorize a Charge](/#authorize-a-charge). | 85228000
transactional_only | boolean | optional | Enables transactional charge when true. [See more info](/#transactional-charge). Only selected Xfers partners have this feature available. | Default to false
debit_only | boolean | optional | When this is true, this charge will attempt to debit from users existing balance/card on file. Status returned will be "completed" on successful debit or "cancelled" when there insufficient funds / valid card on file in user wallet. | Default to false
card_only | boolean | optional | When this is true, this charge will will attempt to only take payments via credit/debit card. | Default to false
absorb_card_fees | boolean | optional | When this is true, seller will not pass on the additional fees involved in card processing back on to buyer(as convenience fees) | Default to false
enquiry_only | boolean | optional | When this is true, this charge will not be processed but a standard response will be provided. This is usually used for testing purposes or for pre-fetching charge information like fees. | Default to false
redirect | string | optional | When this is true, instead of the JSON response, Xfers will automatically redirect the request to our checkout page| Default to true.
items | string | optional | A JSON array of item with attributes 'description, name, price, quantity'. [See more info](/#item-hash). | "[{"description":"Red dress Size M","price":9.99,"quantity":1,"name":"Red dress"}]"
shipping | float | optional | Shipping fees | Default to 0.0
tax | float | optional | tax in $  | Default to 0.0
hrs_to_expirations | float | optional | No of hours before this transactons will expire  | Default to 48.0 hours from now.
meta_data | string | optional | A set of key/value pairs that you can attach to a charge. It can be useful for storing additional information about the customer in a structured format. You will be provided with these meta_data in your callback notification | {"firstname":"tianwei", "lastname":"liu"}
receipt_email | string | optional | The email address to send this charge's receipt. | tianwei@xfers.io
skip_notifications | boolean | optional | Setting this to true will not send transaction reminders/cancelled/expired emails/SMS. Users will still receive payment completed notification. | Default to false.

#### Create Charge Response

If a `user_api_token` is given and the user has insufficient xfers wallet balance, the response will return the `transfer_info` object containing information about the bank the user should transfer to. If multiple banks are available, the `transfer_info_array` will also be returned.

Xfers might use a `bank_unique_amt` to help in identifying the bank transfer in case the user forgets to enter his contact number in the comments section. This is a random amount with very small difference from actual amount(a few cents) which Xfers will absorb. However this is only to be used as a backup; the user should always enter his contact number.

If you receive a status code of 503, please retry the request after a period of time. A "Retry-After" header is provided by the response to indicate the length of time (in seconds) before you should retry.

The table below explains some of these attributes:

key | meaning
---- | ------ |
bank_unique_amt | This is the amount user should use to transfer to the bank.
unique_id | The contact number of the user. This should be entered in the comments section of your bank when doing a bank transfer.
total_txn | Total value of your payable transactions.
total | total_txn - available Xfers balance of user.
bank_discount | total - bank_unique_amt


#### item hash
You can provide itemized receipt for your customer by giving use informations with regards to each of them in the `items` field as a json array of hash.

The below is the list of attribute supported in the hash.

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
description | string | required | Total value for items | Red dress Size M
name | string | required | Total value for items | Red dress
price | float | required | Total value for items | 9.99
quantity | float | required | Total value for items | 1.0
item_id | string | optional | Total value for items | AXA0012

<aside class="warning">
The subtotal of all the item MUST be equal to the `amount` field you provided or Xfers will reject your charge.
</aside>

#### meta data

You can use the `meta_data` parameter to attach json data. This is useful for storing additional structured information about the charge. As an example, you could store your user's first name, last name or any corresponding unique identifier from your system a Xfers charge.

The description and meta_data you specify is returned in API responses.

When a charge get cancelled, additional information might be provided in the meta_data field with key 'error_code' and 'error_message'.

key | value | meaning
---- | ---- | ------ |
error_code | 'KYC_ERROR' | User has some issues with their Xfers' account validation.
error_code | 'KYC_MULTI' | Transfers from multiple bank account detected, user needs to contact Xfers for account validation.
error_code | 'KYC_LIMIT' | User has reached the daily limit for their purchases.
error_code | 'KYC_UNAVAILABLE' | Xfers has yet to receive KYC information for this user.
error_code | 'INSUFFICIENT_FUND' | This is returned when a charge via user_api_token was unable to be process due to insufficient account balance.
error_code | 'INVALID_CARD' | This is returned when a charge via user_api_token was unable to be process due to a the lack of a valid card on file.

<aside class="notice">
You should always provide customer's firstname and lastname information whenever you can as it would help us detecting fraudulence charges or user who have made an mistaken in their bank transfer.
</aside>

#### Transactional Charge
A transactional charge has a bank topup tied to every charge created.
That means, if you create a charge for an item that a user has bought - say a pair of jeans costing $25.99 - the user must then topup exactly $25.99 into the bank account number returned in the response. The charge will then go through.

Any wallet balance the user has will not be used. The $25.99 topup will only go towards payment of the pair of jeans. 

Set the `transactional_only` flag to `true` when creating a charge. Note that this feature is only available to selected Xfers partners.

Transactional charges are not subject to KYC limits and merchants do not have to submit KYC documents of their customers.

### Payment Cancellation

If customer cancels the transaction during Xfers' checkout flow, he will be redirected back to the `cancel_url` you provided. The `order_id` you provided in the charge call will also be part of the GET request as shown:

`GET https://mysite.com/cancel?order_id=<order_id>`


### Payment Response

After the customer has completed the transaction on Xfers website, he will be redirected back to the `return_url` you provided. The `order_id` you provided in the charge call will also be part of the GET request as shown:

`GET https://mysite.com/return?order_id=<order_id>`

<aside class="warning">
Please take note that at this point, payment may or may not have been completed and verified. You should wait on receiving our payment notification server call before releasing your goods/services.
</aside>

### Payment Notifications

After payment has been completed and verified by Xfers backend, Xfers will send a callback to the `notify_url` you provided. This is a server to server HTTPS POST and you will need to acknowledge the callback by providing a HTTP 200 status. It is important to take note that this notification can arrive at your server before or after the customer is redirected to the return_url you provided.

`POST https://mysite.com/payment_notification`

The following parameters will be part of the HTTPS POST:

Name | Type | Description | Value
---- | ---- | -------- | -----------
txn_id | string | Xfers's transaction id unique to each transaction| b840cc9fc5a359c22ed2ccef3427aacd
order_id | string | Unique ref no provided by your during your charge call | A012312
total_amount | float | 12.49 | Total value for items
currency | string | 3-letter ISO code for currency | SGD
status | string | Payment status. | "cancelled" or "paid" or "expired"
meta_data | string | meta data previous provided in your charge call. | "{'first_name' : 'Tianwei', 'last_name' : 'Liu'}"

### Verification of Notifications

```shell
curl "https://sandbox.xfers.io/api/v3/charges/<txn_id>/validate" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{"total_amount": "24.99", "currency": "SGD", "order_id": "A012312", "status": "paid"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Charge::validate("<txn_id>", array(
        'order_id' => 'A012312',
        'total_amount' => '24.99',
        'status' => 'paid',
        'currency' => 'SGD'
    ));
    print_r($resp);
} catch (\Xfers\Error\Api $e) {
    echo 'Caught Api exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfcharge
from xfers import error
xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
xfers.set_sg_sandbox()
try:
    params = {
        'order_id': 'A012312',
        'total_amount': '24.99',
        'status': 'paid',
        'currency': 'SGD'
    }
    print 'Validating charge {}...'.format(charge_id)
    resp = xfcharge.validate(charge_id, params)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
Xfers.set_sg_sandbox

begin
  params = {
      'currency'=> 'SGD',
      'order_id'=> 'A012312',
      'total_amount'=> '24.99',
      'status'=> 'paid'
  }
  puts "Validating charge... #{charge_id}"
  resp = Xfers::Charge.validate charge_id, params
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();

try {
    System.out.println("Validating a charge");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("total_amount", "19.99");
    params.put("currency", "SGD");
    params.put("order_id", "A012312");
    params.put("status", "paid");
    String message = Charge.validate("<txn_id>", params, apiKey);
    System.out.println(message);
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "msg": "VERIFIED"
}
```

After receiving a payment notification from Xfers, you should do verification with Xfers to confirm that that it did indeed originate from Xfers. The post parameters must include all the fields in the payment notification that was sent from Xfers to you.

Xfers will response with HTTP 200 status and a JSON string { "msg": "VERIFIED" } if the notification is valid or a JSON string { "msg": "INVALID" } when its not.


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/charges/<id>/validate`

#### URL Parameters

Name | Type | Description | Value
---- | ---- | -------- | -----------
order_id | string | Unique ref no provided by your during your charge call | A012312
total_amount | float | 12.49 | Total value for items
currency | string | 3-letter ISO code for currency | SGD
status | string | Payment status. | "cancelled", "paid", "expired", ...


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
  "id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "object" : "charge",
  "amount" : 9.99,
  "currency" : "SGD",
  "customer" : "",
  "order_id" : "A012312",
  "capture" : true,
  "shipment_date" : "2015-07-02T06:26:51Z",
  "settlement_date" : "2015-07-05T06:26:51Z",
  "description" : "Carousell user - Konsolidate",
  "items" : [
    {
      "description": "Red Dress Size M",
      "name": "Red dress",
      "quantity": "1.00",
      "price": 9.99,
      "item_id": ""
    }
  ],
  "statement_descriptor" : "",
  "receipt_email" : "",
  "shipping" : 2.50,
  "tax" : 0.00,
  "total_amount" : 12.49,
  "status" : "accepted",
  "meta_data" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
  },
   "transfer_info": {
    "bank_name_full": "Oversea-Chinese Banking Corporation Limited",
    "bank_name_abbreviation": "OCBC",
    "bank_account_no": "646004424001",
    "bank_code": "7339",
    "branch_code": "646",
    "branch_area": "Jurong East",
    "unique_id": "89898989",
    "outstanding_amount": {
      "total": 9.99,
      "total_txn": 9.99,
      "bank_unique_amt": 9.99,
      "bank_discount": 0.0
    }
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
auth_code | string | Required | PIN code provided to the buyer | 512312


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
  "id": "6fa51cd08c8ae115f858593412bb72c8",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "object" : "charge",
  "amount" : 9.99,
  "currency" : "SGD",
  "customer" : "",
  "order_id" : "A012312",
  "capture" : true,
  "description" : "Carousell user - Konsolidate",
  "items" : [
    {
      "description": "Red Dress Size M",
      "name": "Red dress",
      "quantity": "1.00",
      "price": 9.99,
      "item_id": ""
    }
  ],
  "statement_descriptor" : "",
  "receipt_email" : "",
  "shipping" : 2.50,
  "tax" : 0.00,
  "total_amount" : 12.49,
  "status" : "cancelled",
  "meta_data" : {
    "key1":"value1",
    "key2": "value2"
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
  "id": "730eba1ec6d34f64dc68a0081c5006dc",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "object" : "charge",
  "amount" : 9.99,
  "bank_unique_amt": 9.99,
  "currency" : "SGD",
  "customer" : "",
  "order_id" : "A012312",
  "capture" : true,
  "shipment_date" : "2015-07-02T06:26:51Z",
  "settlement_date" : "2015-07-05T06:26:51Z",
  "description" : "Carousell user - Konsolidate",
  "items" : [
    {
      "description": "Red Dress Size M",
      "name": "Red dress",
      "quantity": "1.00",
      "price": 9.99,
      "item_id": ""
    }
  ],
  "statement_descriptor" : "",
  "receipt_email" : "",
  "shipping" : 2.50,
  "tax" : 0.00,
  "total_amount" : 12.49,
  "status" : "completed",
  "meta_data" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
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
    'customer' => '97288608',
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
    "id": "730eba1ec6d34f64dc68a0081c5006dc",
    "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
    "notify_url" : "https://mysite.com/payment_notification",
    "return_url" : "https://mysite.com/return",
    "cancel_url" : "https://mysite.com/cancel",
    "object" : "charge",
    "amount" : 9.99,
    "currency" : "SGD",
    "customer" : "",
    "order_id" : "A012312",
    "cash_on_delivery" : true,
    "capture" : true,
    "shipment_date" : "2015-07-02T06:26:51Z",
    "settlement_date" : "2015-07-05T06:26:51Z",    
    "description" : "Carousell user - Konsolidate",
    "items" : [
      {
        "description": "Red Dress Size M",
        "name": "Red dress",
        "quantity": "1.00",
        "price": 9.99,
        "item_id": ""
      }
    ],
    "statement_descriptor" : "",
    "receipt_email" : "",
    "shipping" : 2.50,
    "tax" : 0.00,
    "total_amount" : 12.49,
    "status" : "completed",
    "meta_data" : {
      "firstname":"Tianwei",
      "lastname": "Liu"
    }
  }
]
```


Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/charges`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
customer | string | optional | Only return charges for the customer specified by this customer ID. | 97288608
status (Coming soon) | string | optional | status of the charge to return | pending
ending_before | string | optional | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. | 7364dc68a000eba1ec6d34f81c5006dc
limit | integer | optional | A limit on the number of objects to be returned. Limit can range between 1 and 50 items. | Default to 10
starting_after | string | optional | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. | 7ba1ec6d34f64dc68a030e081c5006dc
