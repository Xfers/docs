## Payouts

Xfers Payout allows you transfer money between Xfers Wallets with your Xfers balance via their phone no or email address. You need to have sufficient available balance in your account to cover the amount + fees required for the payout.

### Creating a Payout

```shell
curl "https://sandbox.xfers.io/api/v3/payouts" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"amount": "150.00", "invoice_id": "AZ0001", "descriptions": "Payment for Rent for July", "recipient": "+6597288608"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Payout::create(array(
        'amount' => '150.00',
        'invoice_id' => 'AZ0001',
        'descriptions' => 'Payment for Rent for July',
        'recipient' => '+6597288608'
    ));
    print_r($resp);
    echo $resp["id"] . "\n";
    echo $resp["recipient"] . "\n";
    echo $resp["invoice_id"] . "\n";
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught invalid request exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfpayout
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Creating payout...'
    params = {
        'amount': '150.00',
        'invoice_id': 'AZ0001',
        'descriptions': 'Payment for Rent for July',
        'recipient': '+6597288608'
    }
    resp = xfpayout.create(params)
    payout_id = resp['id']
    print payout_id
    print resp['recipient']
    print resp['invoice_id']
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Creating payout...'
  params = {
      'amount' => '150.00',
      'invoice_id' => 'AZ0001',
      'descriptions' => 'Payment for Rent for July',
      'recipient' => '+6597288608'
  }
  resp = Xfers::Payout.create params
  payout_id = resp[:id]
  puts resp[:recipient]
  puts resp[:invoice_id]
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Creating a payout");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("amount", "150.00");
    params.put("invoice_id", "AZ0001");
    params.put("recipient", "+6597288608");
    params.put("descriptions", "Payment for Rent for July");

    Payout payout = Payout.create(params,apiKey);
    payoutId = payout.getId();
    System.out.println(payout.getId());
    System.out.println(payout.getRecipient());
    System.out.println(payout.getAmount());
    System.out.println(payout.getCurrency());
    System.out.println(payout.getDescriptions());
    System.out.println(payout.getBank());
    System.out.println(payout.getBankAccountNo());
    System.out.println(payout.getCreatedDate());
    System.out.println(payout.getCompletedDate());
    System.out.println(payout.getStatus());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "id": "6fa51cd08c8ae115f858593412bb72c8",
  "recipient" : "+6597288608",
  "invoice_id" : "AZ0001",
  "amount" : 150.00,
  "currency" : "SGD",
  "descriptions" : "Payment for Rent for July",
  "bank" : "DBS",
  "bank_account_no" : "XXX-XXX-6091",
  "created_date" : "2015-07-01T19:01:25Z",
  "completed_date" : "",
  "status" : "completed"
}
```

The following request will allow you to make a payout to the recipient.


`POST https://sandbox.xfers.io/api/v3/payouts`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | float | required | Total value for items. | 150.00
invoice_id | string | required | Unique ref no provided by merchant. This will need to be unique or the payout request will be considered a duplicate and ignored. | AZ0001
recipient | string | optional (either recipient or user_api_token required) | Email or Mobile Phone No of the recipient for this payout. | +659728860
user_api_token | string | optional (either recipient or user_api_token required) | user’s api token obtain via Connect’s get user token APIs. When this is provided, it will replace the recipient param as the payout target |
currency | string | optional | 3-letter ISO code for currency | Default to 'SGD'
descriptions | string | optional | A short description for this payout. This will be part of the email/SMS that the recipient will be receiving from Xfers. | Payment for Rent for July
no_expire | boolean | optional | Set this to true so this payout will not expire | Default to false

##### Payout Response Status

The below are the possible response status and their meaning.

Name | Description
---- | ------------
completed  | Payout has been completed. Existing Xfers user and payout has been credited to his account.


### Retrieve a Payout

```shell
curl "https://sandbox.xfers.io/api/v3/payouts/<id>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Payout::retrieve("<id>");
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught invalid request exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfpayout
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Retrieving payout {}...'.format('<id>')
    resp = xfpayout.retrieve('<id>')
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Retrieving payout...'
  resp = Xfers::Payout.retrieve '<id>'
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
 try {
    System.out.println("Retrieving a payout");
    Payout payout = Payout.retrieve("<id>", apiKey);
    System.out.println(payout.toString());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "id": "6fa51cd08c8ae115f858593412bb72c8",
  "recipient" : "+6597288608",
  "invoice_id" : "AZ0001",
  "amount" : 150.00,
  "currency" : "SGD",
  "descriptions" : "Payment for Rent for July",
  "bank" : "DBS",
  "bank_account_no" : "XXX-XXX-6091",
  "created_date" : "2015-07-01T19:01:25Z",
  "completed_date" : "",
  "status" : "completed"
}
```

Retrieves the details of a payout that has previously been created. Supply the unique payout ID that was returned from your previous request, and Xfers will return the corresponding payout information.


#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/payouts/<id>`

The below is a list of payout status and their respective meanings.

##### Payout Status

Name | Description
---- | ------------
completed  | Payout has been completed.
cancelled  | Payout has been cancelled.


### List all Payouts

```shell
curl "https://sandbox.xfers.io/api/v3/payouts?limit=1" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\Payout::listAll(array(
    'limit' => '1'
));
print_r($resp);
```

```python
import xfers
from xfers import xfpayout
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Listing all payouts...'
    params = {
        'recipient': '+6597288608'
    }
    payouts = xfpayout.list_all(params)
    for payout in payouts:
        print 'Payout: {}'.format(payout)
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Listing all payouts...'
  params = {
      'recipient'=> '+6597288608'
  }
  payouts = Xfers::Payout.list_all params
  payouts.each { |payout|
    puts payout
  }
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    System.out.println("Listing payouts");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("recipient", "+6597288608");
    List<Payout> payouts = Payout.listAll(params, apiKey);
    for (Payout payout : payouts) {
        System.out.println(payout.getId());
        System.out.println(payout.getInvoiceId());
        System.out.println(payout.getRecipient());
        System.out.println(payout.getAmount());
        System.out.println(payout.getCurrency());
        System.out.println(payout.getDescriptions());
        System.out.println(payout.getBank());
        System.out.println(payout.getBankAccountNo());
        System.out.println(payout.getCreatedDate());
        System.out.println(payout.getCompletedDate());
        System.out.println(payout.getStatus());
    }
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
[
  {
    "id": "6fa51cd08c8ae115f858593412bb72c8",
    "recipient" : "+6597288608",
    "invoice_id" : "AZ0001",
    "amount" : 150.00,
    "currency" : "SGD",
    "descriptions" : "Payment for Rent for July",
    "bank" : "DBS",
    "bank_account_no" : "XXX-XXX-6091",
    "created_date" : "2015-07-01T19:01:25Z",
    "completed_date" : "",
    "status" : "completed"
  }
]
```

Returns a list of payouts you've previously created. The payouts are returned in sorted order, with the most recent charges appearing first.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/payouts`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
recipient | string | optional | Only return charges for the recipient(email for phone no) specified by this recipient ID. | +6597288608
ending_before | string | optional | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. | 6fa51cd08c8ae115f858593412bb72c8
limit | integer | optional | A limit on the number of objects to be returned. Limit can range between 1 and 50 items. | Default to 10
starting_after | string | optional | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. | 6fa51cd08c8ae115f858593412bb72c8

