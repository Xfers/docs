## Refunds

The following APIs allow you to refund a charge that has previously been created and paid by your buyer. 

For bank transfer transaction, funds will be refunded to the buyer's Xfers account. The fees you were originally charged are also refunded.

For credit card (SG) transaction, refund will be done directly to the credit card account and customer will be able to see it in 5-10 business days. Once issued, credit card refund cannot be canceled.

For credit card (ID) transaction, refund is not yet available.

### Creating a Refund

```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>/refunds" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk"
  -X POST
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk');
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
xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
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

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
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
String apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
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

Please input the merchant/seller's API key for this endpoint

#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/charges/<id>/refunds`
