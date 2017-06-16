## Refunds

The following APIs allow you to refund a charge that has previously been created and paid by your buyer. Funds will be refunded to the buyer's Xfers account. The fees you were originally charged are also refunded.

### Creating a Refund

```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>/refunds" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
  -X POST
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Charge::refund("<id>");
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfcharge
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    charge_id = '<id>'
    print 'Refunding charge {}...'.format(charge_id)
    resp = xfcharge.refund(charge_id)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  charge_id = '<id>'
  puts "Refunding charge... #{charge_id}"
  resp = Xfers::Charge.refund charge_id
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Refunding a charge");
    Charge charge = Charge.refund("<id>", apiKey);
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
  "status" : "refunded",
  "meta_data" : {
    "key1":"value1",
    "key2": "value2"
  }
}
```

When you create a new refund, you must specify a charge to create it on.

Creating a new refund will refund a charge that has previously been created and paid but not yet refunded. Funds will be refunded to the buyer Xfers account available balance. The fees you were originally charged are also refunded.

#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/charges/<id>/refunds`
