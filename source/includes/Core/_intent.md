## Intents

The Intent API serve two purposes.

1. It allow Xfers to generate unique transfer amount to better identity the owner of incoming transfer when non virtual account system is being used.
2. It allow developers to register for a callback notification when user fund their Xfers wallet.

<b>For user case 1:</b>

when a user is performing a top up via [GET /transfer_info](/#get-transfer-info), they might forget to enter their contact number which is needed for our system to identify them.

The Intents API solves this issue by requiring the user to transfer a unique amount to Xfers which will be used to identify them. The difference between the `unique_amount` and the actual `amount` will be very small, and Xfers provides the difference for free to the user.

Note that this only acts as a backup, and the user should enter his contact number in the comments section when doing a bank transfer whenever possible.

Example:
Jane wishes to transfer 5000 Indonesian Rupiah via `/intents`.

1. She makes a HTTP GET request to `/user/transfer_info` to get the correct Xfers bank to transfer to (we have many banks!). The response tells her to transfer to Bank Central Asia (BCA).
2. She makes a HTTP POST request to create an intent. The response tells her to make a bank transfer of 4999 to Xfers.
3. Jane makes a transfer of 4999 to Xfers BCA. Within a few minutes, Xfers detects the transfer and tops up Jane's Xfers account with 5000. Xfers absorbs the difference for free.
4. If `notify_url` is given, Xfers will send a callback to this url.

<aside class="notice">
Note the above scenario is only valid when disable_va is set to True
</aside>

<b>For user case 2:</b>

Intent can also be use a means to get callback notifications from Xfers when a user successfully fund their virtual account on Xfers.

Example:
Jane wishes to transfer 5000 Indonesian Rupiah via `/intents` to her virtual Xfers account and get a callback notification when it successful

1. She makes a HTTP POST request to create an intent with disable_va set to false(default) and provide a `notify_url`. The response will provide a list of virtual account nos she can fund her account with from a list of bank that Xfers support.
2. Jane makes a transfer of 500 to the Xfers BCA Virtual account that the intent api provide. Within a few minutes, Xfers detects the transfer and tops up Jane's Xfers account with 5000.
3. Since `notify_url` is provided, Xfers will send a callback to this url.

### Creating an Intent

```shell
curl "https://sandbox.xfers.io/api/v3/intents" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
 -H "Content-Type: application/json" \
  -d '{ "amount": "5000", "currency": "SGD", "bank": "BCA", "request_id" : "AZ0001", "notify_url" : "https://mysite.com/topup_notification"}'  
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Intent::create(array(
        'amount' => '5000',
        'currency' => 'SGD',
        'bank' => 'BCA',
        'request_id' => 'AZ0001',
        'notify_url' => 'https://mysite.com/topup_notification'
    ));
    $intentId = $resp["id"];
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfintent
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Creating intent...'
    params = {
        'amount': '5000',
        'currency': 'SGD',
        'bank': 'BCA',
        'request_id': 'AZ0001',
        'notify_url': 'https://mysite.com/topup_notification'
    }
    resp = xfintent.create(params)
    intent_id = resp['id']
    print intent_id
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Creating intent...'
  params = {
      'amount' => '5000',
      'currency' => 'SGD',
      'bank' => 'BCA',
      'request_id' => 'AZ0001',
      'notify_url' => 'https://mysite.com/topup_notification'
  }
  resp = Xfers::Intent.create params
  intent_id = resp[:id]
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Creating an intent");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("amount", "5000");
    params.put("currency", "SGD");
    params.put("bank", "BCA");
    params.put("request_id", "AZ0001");
    params.put("notify_url", "https://mysite.com/topup_notification");

    Intent intent = Intent.create(params, apiKey);
    System.out.println(intent.getId());
    System.out.println(intent.getAmount());
    System.out.println(intent.getCurrency());
    System.out.println(intent.getBankName());
    System.out.println(intent.getBankAbbrev());
    System.out.println(intent.getBankAccountNo());
    System.out.println(intent.getRequestId());
    System.out.println(intent.getNotifyUrl());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json

{
  "id": "a975f036cb4b43f3b2d1ff90040ec292",
  "request_id": "AI1001",
  "amount": "30000.0",
  "currency": "IDR",
  "unique_amount": "29999",
  "bank_abbrev": "MANDIRI",
  "bank_name": "Bank Mandiri",
  "account_name": "PT Media Indonusa",
  "bank_account_no": "8855845678901235",
  "notify_url": "https://mysite.com/topup_notification",
  "expiration_date": "2017-06-01T07:46:40Z",
  "status": "pending",
  "transfer_info_array":
  [
    {
      "bank_name_full": "Bank Central Asia",
      "bank_name_abbreviation": "BCA",
      "bank_account_no": "1063003003",
      "bank_code": "",
      "branch_code": "",
      "branch_area": "",
      "unique_id": "97266867",
      "img_src": "https://www.xfers.io/images/bankLogos/bank-logo-bca.png"
    },
    {
      "bank_name_full": "Bank Mandiri",
      "bank_name_abbreviation": "MANDIRI",
      "bank_account_no": "8855845678901235",
      "bank_code": "",
      "branch_code": "",
      "branch_area": "",
      "unique_id": "97266867",
      "img_src": "https://www.xfers.io/images/bankLogos/bank-logo-mandiri.png"
    }
  ]
}

```
The following request will allow you to create a intent for a transfer and register a callback notification once a transfer has be received or expired(all intents expires in 72 hours.)

User should be prompted to transfer `unique_amount` amount to the `bank_account_no` and `bank_name` provided.  Once the user deposits with `unique_amount`, the full amount will be credited to his account.

`POST https://sandbox.xfers.io/api/v3/intents`

<aside class="warning">
You cannot create more than 1 intents per user (previous old pending intents will automatically be cancelled).
</aside>


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | float | required | Amount that user intends to transfer | 5000
currency | string | required | 3-letter ISO code for currency(IDR/SGD)
request_id | string | required | Unique ref no provided by requester. This will need to be unique or the intent request will be considered a duplicate and ignored. | AZ0001
bank | string | optional | bank abbreviation (BCA, UOB, MANDIRI) | BCA
notify_url | string | optional | URL to receive callback notifications when transfer is received	 | https://mysite.com/payment_notification
disable_va | boolean | optional | If true, does not return a Virtual Account for this intent | Defaults to false


### Intent Notifications

After intent has been verified(transfer processed)/expired by Xfers, Xfers will send a callback to the `notify_url` you provided. This is a server to server HTTPS POST and you will need to acknowledge the callback by providing a HTTP 200 status.

`POST https://mysite.com/topup_notification`

The following parameters will be part of the HTTPS POST:

Name | Type | Description | Value
---- | ---- | -------- | -----------
intent_id | string | Xfers's id unique to each intent| 6f5f85859a51cd08c8ae113412bb72c8
request_id | string | Unique ref no provided by your during your intent call | A012312
amount | float | 3000 | Amount that user intented to transfer.
currency | string | required | 3-letter ISO code for currency(IDR/SGD)
status | string | Transfer status. | "expired" or "completed"


### Cancel a Intent

```shell
curl "https://sandbox.xfers.io/api/v3/intent/<INTENT_ID>/cancel" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
  -X POST
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Intent::cancel('<INTENT_ID>');
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfintent
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Cancelling intent {}...'.format('<INTENT_ID>')
    resp = xfintent.cancel('<INTENT_ID>')
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Cancelling intent...'
  resp = Xfers::Intent.cancel '<INTENT_ID>'
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Cancelling an intent");
    Intent intent = Intent.cancel("<INTENT_ID>", apiKey);
    System.out.println(intent.toString());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "id": "6f5f85859a51cd08c8ae113412bb72c8",
  "request_id" : "AZ0001",
  "amount" : "5000",
  "currency" : "IDR",
  "amount_to_transfer" : "4999",
  "bank_name" : "Bank Central Asia",
  "bank_abbrev" : "BCA",
  "account_name" : "Xveria Media Indonesia",
  "bank_account_no" : "0124121241",
  "notify_url" : "https://mysite.com/topup_notification",
  "expiration_date" : "2016-09-09T17:55:51Z",
  "status" : "pending"
}
```
Cancelling a intent that has been previously created by not yet completed.


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/intent/<INTENT_ID>/cancel`

### List current Intent

```shell
curl "https://sandbox.xfers.io/api/v3/intents" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\Intent::retrieve();
print_r($resp);
```

```python
import xfers
from xfers import xfintent
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Current intent...'
    intent = xfintent.retrieve()
    print 'Intent: {}'.format(intent)
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Current intent...'
  intent = Xfers::Intent.retrieve
  puts intent
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Retrieving latest intent");
    Intent intent = Intent.retrieve(apiKey);
    System.out.println(intent.getId());
    System.out.println(intent.getAmount());
    System.out.println(intent.getCurrency());
    System.out.println(intent.getBankName());
    System.out.println(intent.getBankAbbrev());
    System.out.println(intent.getBankAccountNo());
    System.out.println(intent.getRequestId());
    System.out.println(intent.getNotifyUrl());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json

{
  "id": "6f5f85859a51cd08c8ae113412bb72c8",
  "request_id" : "AZ0002",
  "amount" : "4000",
  "currency" : "IDR",
  "amount_to_transfer" : "3999",
  "bank_name" : "Bank Central Asia",
  "bank_abbrev" : "BCA",
  "account_name" : "Xveria Media Indonesia",
  "bank_account_no" : "0124121241",
  "notify_url" : "https://mysite.com/topup_notification",
  "expiration_date" : "2016-09-09T17:55:51Z",
  "status" : "pending",
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

Returns the current pending intent of the user. If multiple intents are created, only the last one is returned.

`transfer_info_array` is returned so you can display a list of all Xfers banks to transfer to.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/intents`


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
disable_va | boolean | optional | If true, does not return a Virtual Account for intent | Defaults to false