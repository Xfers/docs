
## Cards (Indonesia)


### Charge Guest Card

```shell
curl "https://sandbox-id.xfers.com/api/v3/credit_card_charges/charge_card_guest" \
  -H "Content-Type: application/json" \
  -d '{ "txn_id": "<charge_id>", "card_name": "Visnu", "card_type": "V", "card_no": "4137180300023783", "card_cvc": "666", "expiry_month": "01", "expiry_year": "2021", "save_card": true}'
```

```php

<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setIDSandbox();

try {
    echo "Charge guest card\n";
    $chargeId = '051ac2fe464d45b19ec736cf04d66653'; // you must create a charge first
    $params = array(
        'txn_id' => $chargeId,
        'card_name' => 'Visnu',
        'card_type' => 'V',
        'card_no' => '4137180300023783',
        'card_cvc' => '666',
        'expiry_month' => '01',
        'expiry_year' => '2021',
        'save_card' => true
    );
    $resp = \Xfers\Card::chargeGuest($params);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python


```

```ruby


```

```java


```

> Response:

```json
{
  "success": true
}
```

> Error response format (Display to users the param "msg"):

```json
{
  "error": "Sorry, your card is invalid and we are unable to accept your card. Please try with another card.",
  "err_code": "5518",
  "msg": "The credit card information entered is incomplete/invalid. Please confirm your credit card details and submit again."
}
```


No API key authentication is needed. Instead, we will only charge a card if a valid charge id is found together with valid credit card details.

`POST https://sandbox-id.xfers.com/api/v3/credit_card_charges/charge_card_guest`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
txn_id | string | required | The id of the created charge | b840cc9fc5a359c22ed2ccef3427aacd
card_name | string | required | Name as on credit card | Visnu
card_type | string | required | MasterCard = M Visa = V | V
card_no | string | required | Credit card number | 4137180300023783
card_cvc | string | required | Card CVC | 123
expiry_month | string | required | 2 digits month | 01
expiry_year | string | required | 4 digits year | 2021
save_card | boolean | optional | Whether to save card. Default false. Cards saved can be retrieved with List Cards API | true

#### Invalid Card
For invalid test card, use `card_type = M` and `card_no =  4137180300023784`


### Charge Existing Card

```shell
curl "https://sandbox-id.xfers.com/api/v3/credit_card_charges/charge_card" \
  -H "Content-Type: application/json" \
  -d '{ "txn_id": "<charge_id>", "token": "47B23760-3073-490D-8AAA-548E83CD29F4"}'
```

```php

<?php
require_once('vendor/autoload.php');
\Xfers\Xfers::setIDSandbox();

try {
    echo "Charge existing card\n";
    $chargeId = 'ae9647515a234b95919ce5dbd6e073e8';
    $token = '47B23760-3073-490D-8AAA-548E83CD29F4';
    $resp = \Xfers\Card::chargeExisting($chargeId, $token);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}

```

```python


```

```ruby

```

```java

```

> Response:

```json
{
  "success": true
}
```


The following request will allow you to charge a user with his existing card. Before this, retrieve the token using List Card API.

No API key authentication is needed. Instead, we will only charge a card if a valid charge id is found together with valid credit card details.


`POST https://sandbox-id.xfers.com/api/v3/credit_card_charges/charge_card`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
txn_id | string | required | The id of the created charge | b840cc9fc5a359c22ed2ccef3427aacd
token | string | required | The credit card token | 47B23760-3073-490D-8AAA-548E83CD29F4


### Delete Card

```shell
curl -X DELETE "https://sandbox-id.xfers.com/api/v3/cards/<token>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json"
```

```php

<?php
require_once('vendor/autoload.php');
\Xfers\Xfers::setApiKey('WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o');
\Xfers\Xfers::setIDSandbox();

try {
    echo "Deleting card\n";
    $token = '3A27AAC0-7569-4A63-8E22-E7EB2155504C';
    $resp = \Xfers\Card::delete($token);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python

```

```ruby

```

```java


```

> Response:

```json
{
  "token": "3A27AAC0-7569-4A63-8E22-E7EB2155504C",
  "deleted": true
}
```


The following request will allow you to delete your user's credit card.

`DELETE https://sandbox-id.xfers.com/api/v3/cards/<card_token>`


### List Cards

```shell
curl "https://sandbox-id.xfers.com/api/v3/cards?customer=hello@xfers.io" \
-H "X-XFERS-USER-API-KEY: WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o"
```

```php

<?php
require_once('vendor/autoload.php');
\Xfers\Xfers::setApiKey('WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o');
\Xfers\Xfers::setIDSandbox();

try {
    echo "Listing all cards\n";
    $customer = "hello@xfers.io";
    $resp = \Xfers\Card::listAll($customer);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}


```

```python
COMING SOON
```

```ruby
COMING SOON
```

```java
COMING SOON

```

> Response:

```json
[
   {
      "card_number_partial":"123456xxx4444",
      "card_type":"V",
      "card_name":"John Tan",
      "token":"7AEC1AE2-8B66-490D-9DAE-CB8CBF3326E0"
   },
   {
      "card_number_partial":"777777xxx4444",
      "card_type":"M",
      "card_name":"John Tan",
      "token":"7AZZZZZZ-8B66-490D-9DAE-CB8CBF3326E0"
   }
]
```


The following request will allow you to list all credit cards added to a user

`GET https://sandbox-id.xfers.com/api/v3/cards?customer=hello@xfers.io`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
customer | string | required | To identify the customer. Either phone number or email | john@gmail.com


#### Response

Card types:

MasterCard = M
Visa = V
JCB = J
Amex = A

