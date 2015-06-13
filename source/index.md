---
title: Xfers API Reference

language_tabs:
  - shell

toc_footers:
  - <a href='https://www.xfers.io/account_registration'>Sign Up for a Developer Key</a>
  - <a href="mailto:support@xfers.io">Need help? Email us</a>

includes:
  - errors

search: true
---

<!--- Xfers User API Section -->

# Introduction

The **Xfers Core API** provides a set of simple RESTFUL APIs to allow businesses to 
integrate internet banking and credit card payments(coming soon) into your business or applications. 

You will make use of the Xfers Core API to manage your own account programmatically. 

**Xfers Connect** is for accepting payments on behalf of others, think of this as a super user that can manage and 
create accounts on the behalf of others. 


# APIs endpoints

Xfers provides a **dedicated sandbox environment** where you can simulate an incoming bank transfer for testing purposes. 
Note that this feature will not be available in production mode. 

For testing purposes, we highly recommend that your head over to [sandbox.xfers.io](https://sandbox.xfers.io) and create a sandbox account.

While in testing mode, point to our sandbox API endpoint at:

`https://sandbox.xfers.io/api/v3`

To switch to production, point to our production API endpoint at:

`https://www.xfers.io/api/v3`

<aside class="notice">
Sandbox and Production are two separate environments. Please ensure your register for an account at EACH environment and use their individual API Key.
</aside>

<aside class="notice">
All the examples code in this document will be pointing to our sandbox endpoint.
</aside>

Note that all API calls are done through HTTPS, please do not attempt to hit our endpoint via HTTP, as you will also be 
exposing your API key in plain text.

# Xfers Core

The **Xfers Core API** provides a set of simple RESTFUL APIs to allow businesses to 
integrate internet banking and credit card payments(coming soon) into your business or applications. 

You will make use of the Xfers Core API to manage your own account pragmatically. 

## Authentication

> Simple Authentication Ping Test

```shell
# With shell, you can just pass the correct header with each request
curl "https://sandbox.xfers.io/api/v3/hello"
  -H "X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67"
```

> Make sure to replace `f0ca588df6e8400a98a7e522390fad67` with your own API key.

Xfers uses API keys to allow access to the API. You can get your API key from your [Account Settings](https://sandbox.xfers.io/account_settings) page.

Xfers expects the API key to be included in the header of all API requests to the server, like so:

`X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67`

> The above command returns JSON structured like this on success:

```json
  {
    "msg": "Hello world"
  }
```


<aside class="notice">
You must replace <code>f0ca588df6e8400a98a7e522390fad67</code> with your personal API key.
</aside>
<aside class="warning">
All endpoints are in HTTPS. Please do not attempt to hit our endpoint in HTTP, beside failing you will also be exposing your API key in plain text!
</aside>

## User Account

The account info API supports querying and making changes to a User's account.

### Get Account Info

```shell
curl "https://sandbox.xfers.io/api/v3/user"
  -H "X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67"
```

> Response:

```json
{
  "available_balance": "50.00",
  "ledger_balance" : "250.00",
  "credit_card_rate" : "3.5",
  "credit_card_fee" : "NA",
  "bank_transfer_fee" : "0.45",
  "first_name" : "wenbin",
  "last_name" : "Tay",
  "phone_no" : "+6597288608",
  "bank_accounts" : [
    {
       "id" : "12312",
       "account_no" : "039-312-3432-3",
       "account_type" : "POSB-SAVING",
       "bank_abbrev" : "DBS",
       "verified" : true,
       "amt_1" : "0.12",
       "amt_2" : "0.09"
    },
    {
       "id" : "12315",
       "account_no" : "129-880-1251-1",
       "account_type" : "OCBC-SAVING-PLUS",
       "bank_abbrev" : "OCBC",
       "verified" : false,
       "amt_1" : "0.02",
       "amt_2" : "0.17"
    }
  ]
}
```

This endpoint return information related to your account such as available balance, ledger balance, 
name and bank account information.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user`


## Bank Account

The follow APIs allow you to add or update your bank account info.

### Support banks

Logo | Bank Name | Abbreviation | 
---- | ---- | ---- |
![DBS][dbs]| Development Bank of Singapore | DBS |
![POSB][posb]| Post Office Saving Bank | DBS |
![UOB][uob]| United Oversea Bank | UOB |
![MBB][mbb]| Malaysia Banking BHD | MBB |
![OCBC][ocbc]| Oversea-Chinese Banking Corporation Limited | OCBC |
![CITI][citi]| Citibank Singapore | CITI |
![SCB][scb]| Standard Chartered Bank | SCB |
![CIMB][cimb]| CIMB Bank Berhad | CIMB |
![HSBC][hsbc]| Hong Kong and Shanghai Banking Corporation| HSBC |

[dbs]: bank-logo-30px-dbs.png
[posb]: bank-logo-30px-posb.png
[uob]: bank-logo-30px-uob.png
[mbb]: bank-logo-30px-mbs.png
[citi]: bank-logo-30px-citi.png
[scb]: bank-logo-30px-scb.png
[cimb]: bank-logo-30px-cimb.png
[ocbc]: bank-logo-30px-ocbc.png
[hsbc]: bank-logo-30px-hsbc.png

### Add Bank Account

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account"
  -H "X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67"
  -H "Content-Type: application/json"
  -d "account_no=03931234323"
  -d "bank=DBS"
```

> Response:

```json
{
  "success" : true,
  "bank_account" : [
    {
      "id" : "12312",
      "account_no" : "039-312-3432-3",
      "bank_abbrev" : "DBS",
      "verified" : true,
      "amt_1" : "0.12",
      "amt_2" : "0.09"
    },
    {
      "id" : "12315",
      "account_no" : "129-880-1251-1",
      "bank_abbrev" : "OCBC",
      "verified" : false,
      "amt_1" : "0.02",
      "amt_2" : "0.17"
    }
  ]
}
```

This request will add a new bank account to this Xfers account. You will be able to withdraw your Xfers balances to these account(s).


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/user/bank_account`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
account_no | string | optional | bank account no | 03931234323
bank | string | optional | bank abbreviation (Refer to [supported banks](http://xfers.github.io/docs/#supported-banks)) | DBS


### Update Bank Account

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>"
  -H "X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67"
  -H "Content-Type: application/json"
  -X PUT
  -d "account_no=03931234323"
  -d "bank=DBS"
```

> Response:

```json
{
  "success" : true,
  "bank_account" : [
    {
      "id" : "12312",
      "account_no" : "039-312-3432-3",
      "bank_abbrev" : "DBS",
      "verified" : true,
      "amt_1" : "0.12",
      "amt_2" : "0.09"
    },
    {
      "id" : "12315",
      "account_no" : "129-880-1251-1",
      "bank_abbrev" : "OCBC",
      "verified" : false,
      "amt_1" : "0.02",
      "amt_2" : "0.17"
    }
  ]
}
```

This request allow you to update an existing bank account record. 

#### HTTPS Request

`PUT https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
account_no | string | optional | bank account no | 03931234323
bank | string | optional | bank abbreviation (Refer to [supported banks](http://xfers.github.io/docs/#supported-banks)) | DBS


## Charges

The following APIs allow you to create a Xfers transaction and allow anyone to pay you via an internet banking transfer or credit card(coming soon).

### Creating a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges"
  -H "X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67"
  -H "Content-Type: application/json"
  -d "amount=24.99"
  -d "currency=SGD"
  -d "redirect=false"
  -d "notify_url=https://mysite.com/payment_notification"
  -d "return_url=https://mysite.com/return"
  -d "cancel_url=https://mysite.com/cancel"
  -d "order_id=A012312"
  -d "cash_on_delivery=true"
  -d "description=unused red dress"
  -d "shipping=2.50"
  -d "tax=0.0"
  -d 'items=[{"description":"Red dress Size M","price":9.99,"quantity":1,"name":"Red dress"}]'
  -d 'meta_data={"key1":"value1", "key2":"value2"}'
```

> Response:

```json
{
  "id": "asd1wwd1csadjw1e213sad",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/asd1wwd1csadjw1e213sad",
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
  "description" : "Carousell user - Konsolidate",
  "items" : [
    {
      "description": "Red Dress Size M",
      "name": "Red dress",
      "quantity": "1",
      "price": 9.99,
      "item_id": ""                        
    }
  ],
  "statement_descriptor" : "",
  "receipt_email" : "",
  "shipping" : 2.50,
  "tax" : 0.00,  
  "total_amount" : 12.49,
  "meta_data" : {
    "key1":"value1",
    "key2": "value2"
  }
}
```


The following request will allow you to create a charge against a customer. 

`POST https://sandbox.xfers.io/api/v3/charges`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | float | required | Total value for items | 9.99
currency | string | required | 3-letter ISO code for currency | SGD
notify_url | string | required | URL to receive callback notifications on charge success/failure/expiration | https://mysite.com/payment_notification
return_url | string | required | URL Xfers will redirect customer to on completion of Xfers checkout | https://mysite.com/return
cancel_url | string | required | URL Xfers will redirect customer to on cancellation of Xfers checkout | https://mysite.com/cancel
order_id | string | required | Unique ref no provided by you to prevent double charging, this cannot be repeated | A012312
description | string | required | Description of transaction for display purposes | Carousell user - Konsolidate
customer | string | optional | contact no or email of person to charge. If this is provided, Xfers will send notifications to this user. | 97288608
redirect | string | optional | When this is true, instead of the JSON response, Xfers will automatically redirect the request to our checkout page| Default to true
cash_on_delivery | string | optional | When this is set to true, the charge will trigger an escrow transaction and will require a [capture](http://xfers.github.io/docs/#capture-a-cod-charge) api call to release the fund. | Default to false
items | string | optional | A JSON array of item with attributes 'description, name, price, quantity'. See more [info](http://xfers.github.io/docs/#item-hash). | "[{"description":"Red dress Size M","price":9.99,"quantity":1,"name":"Red dress"}]"
shipping | float | optional | Shipping fees | Default to 0.0
tax | string | float | tax in $  | Default to 0.0
meta_data | string | optional | A set of key/value pairs that you can attach to a charge. It can be useful for storing additional information about the customer in a structured format. You will be provided with these meta_data in your callback notification | {"key1":"value1", "key2":"value2"}
receipt_email | string | optional | The email address to send this charge's receipt. | tianwei@xfers.io

#### item hash
You can provide itemized receipt for your customer by giving use informations with regards to each of them in the `items` field as a json array of hash. 

The below is the list of attribute supported in the hash.

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
description | string | required | Total value for items | Red dress Size M
name | string | required | Total value for items | Red dress
price | float | required | Total value for items | 9.99
quantity | integer | required | Total value for items | 1
item_id | string | optional | Total value for items | AXA0012

<aside class="warning">
The subtotal of all the item MUST be equal to the `amount` field you provided or Xfers will reject your charge.
</aside>


### Payment Cancellation
If customer cancels the transaction on Xfers website, he will be redirected back to the `cancel_url` you provided. The `order_id` you provided in the charge call will also be part of the GET request as shown:

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
api_key | string | your api_key | f0ca588df6e8400a98a7e522390fad67
order_id | string | Unique ref no provided by your during your charge call | A012312
total_amount | float | 12.49 | Total value for items
currency | string | 3-letter ISO code for currency | SGD
status | string | Payment status. | "cancelled" or "paid" or "expired"

### Verification of Notifications
```shell
curl "https://sandbox.xfers.io/api/v3/charges/validate"
  -H "X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67"
  -H "Content-Type: application/json"
  -d "total_amount=24.99"
  -d "currency=SGD"
  -d "order_id=A012312"
  -d "status=paid"
```

> Response:

```json
{
  "msg": "VERIFIED"
}
```

After receiving a payment notification from Xfers, you should do verification with Xfers to confirm that that it did indeed originate from Xfers. The post parameters must include all the fields in the payment notification that was sent from Xfers to you. 

Xfers will response with HTTP 200 status and a JSON string { "msg": "VERIFIED" } if the notification is valid or HTTP 400 status on Invalid request.


#### HTTPS Request
`POST https://sandbox.xfers.io/api/v3/charges/validate`

#### URL Parameters
Name | Type | Description | Value
---- | ---- | -------- | -----------
order_id | string | Unique ref no provided by your during your charge call | A012312
total_amount | float | 12.49 | Total value for items
currency | string | 3-letter ISO code for currency | SGD
status | string | Payment status. | "cancelled" or "paid" or "expired"


### Capture a COD Charge
```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>"
  -H "X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67"
  -H "Content-Type: application/json"
  -d "cod_pin=512312"
```

> Response:

```json
{
  "msg": "success"
}
```


Capture the payment of an existing, uncaptured, cash on delivery charge. This is the second half of the two-step payment flow, where first you created a charge with the `cash_on_delivery` option set to true.

Uncaptured cash on delivery payments convert exactly seven days after they are created. If they are not cancelled by that point in time, they will be marked as completed and the funds will be automatically release to you.

#### HTTPS Request
`POST https://sandbox.xfers.io/api/v3/charges/<id>`

#### URL Parameters
Name | Type | Description | Value
---- | ---- | -------- | -----------
cod_pin | string | Cash On Delivery PIN code provided to the buyer | 512312

### Retrieve a charge
```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>"
  -H "X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67"
  -H "Content-Type: application/json"
```

> Response:

```json
{
  "id": "asd1wwd1csadjw1e213sad",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/asd1wwd1csadjw1e213sad",
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
  "description" : "Carousell user - Konsolidate",
  "items" : [
    {
      "description": "Red Dress Size M",
      "name": "Red dress",
      "quantity": "1",
      "price": 9.99,
      "item_id": ""                        
    }
  ],
  "statement_descriptor" : "",
  "receipt_email" : "",
  "shipping" : 2.50,
  "tax" : 0.00,  
  "total_amount" : 12.49,
  "meta_data" : {
    "key1":"value1",
    "key2": "value2"
  }
}
```


Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Xfers will return the corresponding charge information. The same information is returned when creating or refunding the charge.

#### HTTPS Request
`GET https://sandbox.xfers.io/api/v3/charges/<id>`


### Cancel a charge
```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>"
  -H "X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67"
  -H "Content-Type: application/json"
  -X DELETE
```

> Response:

```json
{
  "msg": "success"
}
```


Cancel a charge that has previously been created. Supply the unique charge ID that was returned from your previous request.

#### HTTPS Request
`DELETE https://sandbox.xfers.io/api/v3/charges/<id>`


### List all charges
```shell
curl "https://sandbox.xfers.io/api/v3/charges?limit=1"
  -H "X-XFERS-USER-API-KEY: f0ca588df6e8400a98a7e522390fad67"
  -H "Content-Type: application/json"
```

> Response:

```json
[
  {
    "id": "asd1wwd1csadjw1e213sad",
    "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/asd1wwd1csadjw1e213sad",
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
    "description" : "Carousell user - Konsolidate",
    "items" : [
      {
        "description": "Red Dress Size M",
        "name": "Red dress",
        "quantity": "1",
        "price": 9.99,
        "item_id": ""                        
      }
    ],
    "statement_descriptor" : "",
    "receipt_email" : "",
    "shipping" : 2.50,
    "tax" : 0.00,  
    "total_amount" : 12.49,
    "meta_data" : {
      "key1":"value1",
      "key2": "value2"
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
ending_before | string | optional | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. | asd1wwd1csadjw1e213sad
limit | integer | optional | A limit on the number of objects to be returned. Limit can range between 1 and 50 items. | Default to 10
starting_after | string | optional | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. | asd1wwd1csadjw1e213sad


<-- Xfers Connect Section --> 

# Xfers Connect

Xfers connect is for accepting payment on behalf of others, and gaining access to their data.

You might use Connect if you:

- Are building a platform that enables e-commerce like Shopify or tackthis. 

- Need to easily accept payments and pay out your service providers, like Grabtaxi with its drivers or yesHelper with its workers. (You can even create Xfers accounts for your users, so they only ever interact with your platform.)

In general, if you’re building a platform or marketplace that needs to pay third-parties or building applications that help Xfers users do more with their account or their data, Connect is likely the right solution for you.



## Authentication
```shell
# With shell, you can just pass the correct header with each request
curl "https://sandbox.xfers.io/api/v3/connect"
  -H "X-XFERS-APP-API-KEY: f0ca588df6e8400a98a7e522390fad67"
```

> Make sure to replace `f0ca588df6e8400a98a7e522390fad67` with your API key. 

Xfers connect uses API keys to allow access to the APIs. 

Write in to us at support@xfers.io to request for your Xfers connect API Keys.
You will provided with a pair of keys named `X-XFERS-APP-API-KEY` and `X-XFERS-APP-SECRET-KEY`.

Xfers connect expects the API key to be included in all API requests to the server in a header that looks like the following:

`X-XFERS-APP-API-KEY: f0ca588df6e8400a98a7e522390fad67`

> The above command returns JSON structured like this on success:

```json
  {
    "msg": "Hello world"
  }
```


<aside class="notice">
You must replace <code>f0ca588df6e8400a98a7e522390fad67</code> with your Xfers Connect's API key. These are not the same as your user API Key found in your account settings page.
</aside>


## Signup/login to Xfers
```shell
curl "https://sandbox.xfers.io/api/v3/authorize/signup_login?phone_no=+6597288608&signature=597b54c16578ef584d9e86020624a1364a16b550"
  -H "X-XFERS-APP-API-KEY: f0ca588df6e8400a98a7e522390fad67"
```

> Response

```json
  {
    "msg": "success"
  }
```

This API call will attempt to login(existing user) or signup a new user.

An SMS with a OTP will be send to that number which must be used for [get_token](http://xfers.github.io/docs/#get-user-api-token) api call.

### HTTPS Request
`GET https://sandbox.xfers.io/api/v3/authorize/signup_login?otp=541231&phone_no=+6597288608&signature=7f6c6a7ec80a0be657e4204cd87e58401687a2eb`

### URL Parameters
Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
phone_no | string | required | User mobile no | +6597288608
signature | string | required | SHA1 of "phone_no+APP_SECRET_KEY"  | 597b54c16578ef584d9e86020624a1364a16b550


## Get User API Token
```shell
# With shell, you can just pass the correct header with each request
curl "https://sandbox.xfers.io/api/v3/authorize/get_token"
  -H "X-XFERS-APP-API-KEY: f0ca588df6e8400a98a7e522390fad67"
```

> Response

```json
  {
    "msg": "success",
    "user_api_token": "f0ca588df6e8400a98a7e522390fad67"
  }
```


This API call will return the user's `X-XFERS-USER-API-KEY`.


### HTTPS Request
`GET https://sandbox.xfers.io/api/v3/authorize/get_token`

### URL Parameters
Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
otp | string | required | 6 digit one-time-password send over SMS | 541231
phone_no | string | required | User mobile no | +6597288608
signature | string | required | SHA1 of "OTP+phone_no+APP_SECRET_KEY" | 7f6c6a7ec80a0be657e4204cd87e58401687a2eb




