## Cards (Singapore)

The following APIs allow you to add or update credit cards to a connected user (which means you have to go through our [Xfers Connect flow](/#xfers-connect) to get their `user_api_token`). You are also able to charge a credit card without creating an Xfers account for your user (see [Charge Guest Card](#charge-guest-card)) or to charge the default card belonging to a user (see [Charge Existing Card](#charge-existing-card)).


### Add a Card

```shell
curl "https://sandbox.xfers.io/api/v3/cards" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{ "user_api_token": "osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ", "credit_card_token": "tok_197O8gB8MXWbQJDjPMILsIr6", "first6": "424242", "last4": "4242"}'
```

```php

<?php
require_once('vendor/autoload.php');
\Xfers\Xfers::setApiKey('WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o');
\Xfers\Xfers::setSGSandbox();
// Get the following user_api_token from http://docs.xfers.io/#xfers-connect
// you should have one user_api_token for every user you wish to add a credit card to.
$user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ';

try {
    echo "Adding card\n";
    $params = array(
        'user_api_token' => $user_api_token,
        'credit_card_token' => 'tok_19BhBuB8MXWbQJDjkspwaL4n', // gotten from http://docs.xfers.io/#xfers-tokenize
        'first6' => '424242',
        'last4' => '4242'
    );
    $resp = \Xfers\Card::add($params);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python

import xfers
from xfers import xfcard
from xfers import error

xfers.api_key = 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
xfers.set_sg_sandbox()
# Get the following user_api_token from http://docs.xfers.io/#xfers-connect
# you should have one user_api_token for every user you wish to add a credit card to.
user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ'

try:
    print 'Adding card...'
    params = {
        'user_api_token': user_api_token,
        'credit_card_token': 'tok_19C22fB8MXWbQJDjSx4Ek9Wk',  # gotten from http://docs.xfers.io/#xfers-tokenize
        'first6': '424242',
        'last4': '4242'
    }
    resp = xfcard.add(params)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby

require 'xfers'

Xfers.set_api_key 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
Xfers.set_sg_sandbox

# Get the following user_api_token from http://docs.xfers.io/#xfers-connect
# you should have one user_api_token for every user you wish to add a credit card to.
user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ'

begin
  puts 'Adding card...'
  params = {
      'user_api_token' => user_api_token,
      'credit_card_token' => 'tok_19GiimB8MXWbQJDjF8FUIgpA', # gotten from http://docs.xfers.io/#xfers-tokenize
      'first6' => '424242',
      'last4' => '4242'
  }
  resp = Xfers::Card.add params
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java

Xfers.apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();
String user_api_token = "osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ";

try {
    System.out.println("Adding card");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("user_api_token", user_api_token);
    params.put("credit_card_token", "tok_19DrscB8MXWbQJDjXlIKkc06");
    params.put("first6", "424242");
    params.put("last4", "4242");

    Card card = Card.add(params);
    System.out.println("Added card: ");
    System.out.println(card.getCardId());
    System.out.println(card.getExpMonth());
    System.out.println(card.getExpYear());
    System.out.println(card.getCardCountry());
    System.out.println(card.getCardType());
    System.out.println(card.getLast4());
    System.out.println(card.getIsDefault());
} catch (Exception e) {
    e.printStackTrace();
}

```

> Response:

```json
{
  "card_id": "card_197O8yI7jGeCrIKDeI6SexB6",
  "last_4": "4242",
  "card_type": "Visa",
  "card_country": "US",
  "exp_yr": "2022",
  "exp_month": "3",
  "is_default": false
}
```


The following request will allow you to add a credit card to your connected user.     

`POST https://sandbox.xfers.io/api/v3/cards`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
user_api_token | string | required | Buyer’s api token obtain via Connect’s get user token API. | osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ
credit_card_token | string | required | Tokenized credit card from Xfers Tokenize | tok_197O8gB8MXWbQJDjPMILsIr6 |
first6 | string | required | First 6 digits of credit card. Returned via Xfers Tokenize | 424242
last4 | string | required | Last 4 digits of credit card. Returned via Xfers Tokenize | 4242

#### Response

An Xfers Card object.

Name | Type | Description
---- | ---- | -----------
card_id | string | The id of the card added
last_4 | string | Last 4 digits of credit card
card_type | string | Card brand. Can be Visa, American Express, MasterCard, Discover, JCB, Diners Club, or Unknown
card_country | string | Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you’ve collected
exp_yr | string | Credit card year
exp_month | string | Credit card expiry month
is_default | boolean | Is this the default card to be charged


### List Cards

```shell
curl "https://sandbox.xfers.io/api/v3/cards?user_api_token=osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ" \
-H "X-XFERS-USER-API-KEY: WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o"
```

```php
<?php
require_once('vendor/autoload.php');
\Xfers\Xfers::setApiKey('WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o');
\Xfers\Xfers::setSGSandbox();
// Get the following user_api_token from http://docs.xfers.io/#xfers-connect
// you should have one user_api_token for every user you wish to add a credit card to.
$user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ';

try {
    echo "Listing all cards\n";
    $resp = \Xfers\Card::listAll($user_api_token);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfcard
from xfers import error

xfers.api_key = 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
xfers.set_sg_sandbox()

# Get the following user_api_token from http://docs.xfers.io/#xfers-connect
# you should have one user_api_token for every user you wish to add a credit card to.
user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ'

try:
    print 'Listing all cards...'
    cards = xfcard.list_all(user_api_token)
    for card in cards:
        print 'Card: {}'.format(card)
except error.XfersError as e:
    print str(e)

```

```ruby

require 'xfers'

Xfers.set_api_key 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
Xfers.set_sg_sandbox

# Get the following user_api_token from http://docs.xfers.io/#xfers-connect
# you should have one user_api_token for every user you wish to add a credit card to.
user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ'

begin
  puts 'Listing all cards...'
  cards = Xfers::Card.list_all user_api_token
  cards.each { |card|
    puts card
  }
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java

Xfers.apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();
String user_api_token = "osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ";

try {
    System.out.println("Listing cards");
    List<Card> cards = Card.listAll(user_api_token);
    System.out.println("There are " + cards.size() + " cards");
    for (Card card : cards) {
        System.out.println(card.toString());
    }
} catch (Exception e) {
    e.printStackTrace();
}

```

> Response:

```json
[
   {
      "card_id":"card_196hygI7jGeCrIKDAwXhGcHm",
      "last_4":"4242",
      "card_type":"Visa",
      "card_country":"US",
      "exp_yr":"2022",
      "exp_month":"3",
      "is_default":true
   },
   {
      "card_id":"card_196kFHI7jGeCrIKD7HxYauMv",
      "last_4":"4444",
      "card_type":"MasterCard",
      "card_country":"US",
      "exp_yr":"2022",
      "exp_month":"5",
      "is_default":false
   }
]
```


The following request will allow you to list all credit cards added to a user

`GET https://sandbox.xfers.io/api/v3/cards`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
user_api_token | string | required | Buyer’s api token obtain via Connect’s get user token API. | osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ


### Set Default Card

```shell
curl "https://sandbox.xfers.io/api/v3/cards/<the_card_id>/set_default" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{ "user_api_token": "osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ"}'
```

```php
<?php
require_once('vendor/autoload.php');
\Xfers\Xfers::setApiKey('WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o');
\Xfers\Xfers::setSGSandbox();
// Get the following user_api_token from http://docs.xfers.io/#xfers-connect
// you should have one user_api_token for every user you wish to add a credit card to.
$user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ';

try {
    echo "Setting default card\n";
    $card_id = 'card_196iRQI7jGeCrIKDl5hrCmxE';
    $resp = \Xfers\Card::setDefault($card_id, $user_api_token);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python

import xfers
from xfers import xfcard
from xfers import error

xfers.api_key = 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
xfers.set_sg_sandbox()

# Get the following user_api_token from http://docs.xfers.io/#xfers-connect
# you should have one user_api_token for every user you wish to add a credit card to.
user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ'

try:
    print 'Setting default card'
    card_id = 'card_196kDPI7jGeCrIKDlgVDBvER'
    resp = xfcard.set_default(card_id, user_api_token)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby

require 'xfers'

Xfers.set_api_key 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
Xfers.set_sg_sandbox

# Get the following user_api_token from http://docs.xfers.io/#xfers-connect
# you should have one user_api_token for every user you wish to add a credit card to.
user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ'

begin
  puts 'Setting default card'
  card_id = 'card_196iRQI7jGeCrIKDl5hrCmxE'
  resp = Xfers::Card.set_default card_id, user_api_token
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();
String user_api_token = "osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ";

try {
    System.out.println("Setting default card");
    String cardId = "card_19C2JSI7jGeCrIKD0nVdiCHp";
    Card card = Card.setDefault(cardId, user_api_token);
    System.out.println("Default card: " + card.toString());
} catch (Exception e) {
    e.printStackTrace();
}

```

> Response:

```json
{
  "card_id": "card_197O8yI7jGeCrIKDeI6SexB6",
  "last_4": "4242",
  "card_type": "Visa",
  "card_country": "US",
  "exp_yr": "2022",
  "exp_month": "3",
  "is_default": true
}
```


The following request will allow you to set a default credit card for your connected user.

`POST https://sandbox.xfers.io/api/v3/cards/<the_card_id>/set_default`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
user_api_token | string | required | Buyer’s api token obtain via Connect’s get user token API. | osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ


### Delete Card

```shell
curl -X DELETE "https://sandbox.xfers.io/api/v3/cards/<the_card_id>" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{ "user_api_token": "osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ"}'
```

```php

<?php
require_once('vendor/autoload.php');
\Xfers\Xfers::setApiKey('WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o');
\Xfers\Xfers::setSGSandbox();
// Get the following user_api_token from http://docs.xfers.io/#xfers-connect
// you should have one user_api_token for every user you wish to add a credit card to.
$user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ';

try {
    echo "Deleting card\n";
    $card_id = 'card_196hygI7jGeCrIKDAwXhGcHm';
    $resp = \Xfers\Card::delete($card_id, $user_api_token);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfcard
from xfers import error

xfers.api_key = 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
xfers.set_sg_sandbox()

# Get the following user_api_token from http://docs.xfers.io/#xfers-connect
# you should have one user_api_token for every user you wish to add a credit card to.
user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ'

try:
    print 'Deleting card'
    card_id = 'card_19BhF9I7jGeCrIKD1ICQ6snN'
    resp = xfcard.delete(card_id, user_api_token)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby

require 'xfers'

Xfers.set_api_key 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
Xfers.set_sg_sandbox

# Get the following user_api_token from http://docs.xfers.io/#xfers-connect
# you should have one user_api_token for every user you wish to add a credit card to.
user_api_token = 'osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ'

begin
  puts 'Deleting card'
  card_id = 'card_19C2JSI7jGeCrIKD0nVdiCHp'
  resp = Xfers::Card.delete card_id, user_api_token
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end

```

```java

Xfers.apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();
String user_api_token = "osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ";

try {
    System.out.println("Deleting card");
    String cardId = "card_196kDPI7jGeCrIKDlgVDBvER";
    Card card = Card.delete(cardId, user_api_token);
    System.out.println("Deleted card: " + card.toString());
    System.out.println(card.getCardId());
    System.out.println(card.getDeleted());
} catch (Exception e) {
    e.printStackTrace();
}

```

> Response:

```json
{
  "card_id": "card_197O8yI7jGeCrIKDeI6SexB6",
  "deleted": true
}
```


The following request will allow you to delete your user's credit card.

`DELETE https://sandbox.xfers.io/api/v3/cards/<the_card_id>`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
user_api_token | string | required | Buyer’s api token obtain via Connect’s get user token API. | osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ

### Charge Guest Card

```shell
curl "https://sandbox.xfers.io/api/v3/credit_card_charges/charge_card_guest" \
  -H "Content-Type: application/json" \
  -d '{ "txn_id": "<charge_id>", "credit_card_token":"tok_197O8gB8MXWbQJDjPMILsIr6", "first6": "424242", "last4": "4242"}'
```

```php

<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setSGSandbox();

try {
    echo "Charge guest card\n";
    $chargeId = '051ac2fe464d45b19ec736cf04d66653'; // you must create a charge first
    $params = array(
        'txn_id' => $chargeId,
        'credit_card_token' => 'tok_19BhUlB8MXWbQJDjOrDecHN6', // gotten from http://docs.xfers.io/#xfers-tokenize
        'first6' => '424242',
        'last4' => '4242'
    );
    $resp = \Xfers\Card::chargeGuest($params);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python

try:
    print 'Charge guest card'
    charge_id = 'f0fbdd1c16b44deba3f15cc11a29fefc'  # you must create a charge first
    params = {
        'txn_id': charge_id,
        'credit_card_token': 'tok_19C5hlB8MXWbQJDjT6HAsM3A',  # gotten from http://docs.xfers.io/#xfers-tokenize
        'first6': '424242',
        'last4': '4242'
    }
    resp = xfcard.charge_guest(params)
    print resp
except error.XfersError as e:
    print str(e)

```

```ruby

begin
  puts 'Charge guest card'
  charge_id = '54539f543f33456a98495bda4bc33abe'
  params = {
      'txn_id' => charge_id,
      'credit_card_token' => 'tok_19GijKB8MXWbQJDjKCniMsgn', # gotten from http://docs.xfers.io/#xfers-tokenize
      'first6' => '424242',
      'last4' => '4242'
  }
  resp = Xfers::Card.charge_guest params
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end

```

```java

try {
    System.out.println("Charge guest card");
    String chargeId = "ae9647515a234b95919ce5dbd6e073e8";
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("txn_id", chargeId);
    params.put("credit_card_token", "tok_19DrtcB8MXWbQJDjjTYpBAsJ");
    params.put("first6", "424242");
    params.put("last4", "4242");
    Response res = Card.chargeGuest(params);
    System.out.println("Charge guest card success " + res.getSuccess());
    System.out.println("Charge guest card return url " + res.getReturnUrl());
    System.out.println("Charge guest card response " + res.toString());
} catch (Exception e) {
    e.printStackTrace();
}

```

> Response:

```json
{
  "success": true,
  "return_url": "https://www.yoursite.com"
}
```


The following request will allow you to charge a newly obtained credit card token from [Xfers Tokenize](/#xfers-tokenize). This credit card charge is not linked to any user, so you
will not be able to save the token for reuse. Note that each credit card token can only be used once - either charge it directly with this endpoint, or add the token to a user.

One use case is to be able to charge a credit card without the user having to go through OTP, since no Xfers account needs to be created (usually because it is a guest user on your platform and you want to speed up the checkout process).

No API key authentication is needed. Instead, we will only charge a card if a valid charge id is found together with a valid credit card token.

`POST https://sandbox.xfers.io/api/v3/credit_card_charges/charge_card_guest`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
txn_id | string | required | The id of the created charge | b840cc9fc5a359c22ed2ccef3427aacd
credit_card_token | string | required | Tokenized credit card from Xfers Tokenize | tok_197O8gB8MXWbQJDjPMILsIr6
first6 | string | required | First 6 digits of credit card | 424242
last4 | string | required | Last 4 digits of credit card | 4242


### Charge Existing Card

```shell
curl "https://sandbox.xfers.io/api/v3/credit_card_charges/charge_card" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{ "txn_id": "<charge_id>"}'
```

```php

<?php
require_once('vendor/autoload.php');
\Xfers\Xfers::setApiKey('WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o');
\Xfers\Xfers::setSGSandbox();

try {
    echo "Charge existing card\n";
    // You must add a credit card with Xfers\Card::add before this
    $chargeId = 'ae9647515a234b95919ce5dbd6e073e8'; // you must create a charge with user_api_token of your user passed in
    $resp = \Xfers\Card::chargeExisting($chargeId);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}

```

```python

import xfers
from xfers import xfcard
from xfers import error

xfers.api_key = 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
xfers.set_sg_sandbox()

try:
    print 'Charge existing card'
    # You must add a credit card with xfcard.add before this
    charge_id = '59290c99da0044b398445c24a63d5cf7'  # you must create a charge first with user_api_token of your user
    resp = xfcard.charge_existing(charge_id)
    print resp
except error.XfersError as e:
    print str(e)

```

```ruby

require 'xfers'

Xfers.set_api_key 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
Xfers.set_sg_sandbox

begin
  puts 'Charge existing card'
  charge_id = '9cfaac1c8d8a47d18540a87f4c1e711b'
  resp = Xfers::Card.charge_existing charge_id
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end

```

```java
Xfers.apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();
String user_api_token = "osEdbc8uzxY5vaXA-oe-7E86sVWCYTCVPuHQyFQ-uPQ";

try {
    System.out.println("Charge existing card");
    String chargeId = "3115641fa59e45f1b31e0f60f059b3ef";
    Response res = Card.chargeExisting(chargeId);
    System.out.println("Charge existing card success " + res.getSuccess());
    System.out.println("Charge existing card return url " + res.getReturnUrl());
    System.out.println("Charge existing card response " + res.toString());
} catch (Exception e) {
    e.printStackTrace();
}

```

> Response:

```json
{
  "success": true,
  "return_url": "https://www.yoursite.com"
}
```


The following request will allow you to charge a user with his existing default card. Before this, the Charge must be created with `user_api_token` of your user passed in.

`POST https://sandbox.xfers.io/api/v3/credit_card_charges/charge_card`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
txn_id | string | required | The id of the created charge | b840cc9fc5a359c22ed2ccef3427aacd

