## Prepaid Cards

The follow APIs allow you to withdraw money into a prepaid card.

### Providers

wirecard_test_2


### Add a Prepaid Card

```shell
curl "https://sandbox.xfers.io/api/v3/prepaid" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{"proxy_number": "21794", "description":"John card", "provider": "wirecard_test_2"}'
```

```php

COMING SOON

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
{
   "id" : "12315",
   "proxy_number" : "21794",
   "description" : "John card",
   "provider": "wirecard_test_2"
}
```


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/prepaid`


#### Response

The prepaid card object.


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
proxy_number | string | required | The prepaid card's proxy number | 21794
provider | string | required | Prepaid card provider type | wirecard_test_2
description | string | optional | Description about this prepaid card | Sam's card


### Topup a Prepaid Card

```shell
curl "https://sandbox.xfers.io/api/v3/prepaid/CARD-ID/topup" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{"amount": 10.59}'
```

```php

COMING SOON

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
{
   "id":"319095ff12474a50ada1f2874fd1d3b2",
   "object":"charge",
   "amount":"84.52",
   "total_amount":"84.52",
   "currency":"sgd",
   "customer":"+65XXXXXXXX",
   "order_id":"XFER170113160234758",
   "description":"Load card 21794",
   "statement_descriptor":null,
   "status":"completed",
   "currency_symbol":"$",
   "currency_precision":2
}
```


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/prepaid/CARD-ID/topup`


#### Response

The completed charge object.


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | float | required | How much to topup | 9.85


### List all Prepaid Card

```shell
curl "https://sandbox.xfers.io/api/v3/prepaid" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk"
```

```php

COMING SOON

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
    "id": "554",
    "proxy_number": "444",
    "description": "helloworld",
    "provider": "wirecard_test_0"
  },
  {
    "id": "556",
    "proxy_number": "454",
    "description": "meng",
    "provider": "wirecard_test_2"
  }
]
```


#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/prepaid`


#### Response

List of prepaid cards added.


### Delete Prepaid Card

```shell
curl -X DELETE "https://sandbox.xfers.io/api/v3/prepaid/<card_id>" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk"
```

```php
COMING SOON
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
    "id": "556",
    "proxy_number": "454",
    "description": "meng",
    "provider": "wirecard_test_2"
  }
]
```

This request allow you to delete an existing prepaid card. Note that this only deletes the prepaid card stored on Xfers; the card will still work and you can add back the card anytime.

#### HTTPS Request

`DELETE https://sandbox.xfers.io/api/v3/prepaid/<card_id>`

#### Response

List of all prepaid cards belonging to user.

