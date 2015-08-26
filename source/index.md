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
curl "https://sandbox.xfers.io/api/v3/authorize/hello" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

> Make sure to replace `FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc` with your own API key.

Xfers uses API keys to allow access to the API. You can get your API key from your [Account Settings](https://sandbox.xfers.io/account_settings) page.

Xfers expects the API key to be included in the header of all API requests to the server, like so:

`X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc`

> The above command returns JSON structured like this on success:

```json
  {
    "msg": "Hello world"
  }
```


<aside class="notice">
You must replace <code>FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc</code> with your personal API key.
</aside>
<aside class="warning">
All endpoints are in HTTPS. Please do not attempt to hit our endpoint in HTTP, beside failing you will also be exposing your API key in plain text!
</aside>

## User Account

The account info API supports querying and making changes to a User's account.

### Get Account Info

```shell
curl "https://sandbox.xfers.io/api/v3/user" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
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
  "address_line_1" : 'Blk 712 loyang Avenue 5',
  "address_line_2" : '#01-41',
  "nationality" : 'Singaporean',
  "postal_code" : '340712',
  "identity_no" : 's86917127G',
  "country" : "sg",
  "email" : "tianyao@example.com",
  "id_back" : "nricBackPlaceholder.png",
  "id_document" : "nricDocumentPlaceholder.png",
  "id_front" : "nricFrontPlaceholder.png",
  "id_selfie" : "nricSelfiePlaceholder.png",
  "phone_no" : "+6597288608",
  "bank_accounts" : [
    {
       "id" : "12312",
       "account_no" : "039-312-3432-3",
       "bank_abbrev" : "DBS"
    },
    {
       "id" : "12315",
       "account_no" : "129-880-1251-1",
       "bank_abbrev" : "OCBC"
    }
  ]
}
```

This endpoint return information related to your account such as available balance, ledger balance,
name and bank account information.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user`

### Update Account Info
```shell
curl "https://sandbox.xfers.io/api/v3/user" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"first_name": "wenbin", "last_name": "tay", "address_line_1": "Blk 712 loyang Avenue 5", "address_line_2": "#01-41", "nationality": "Singaporean", "postal_code": "340712", "identity_no": "s86917127G", "country": "sg", "email": "tianyao@example.com"}'
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
  "address_line_1" : 'Blk 712 loyang Avenue 5',
  "address_line_2" : '#01-41',
  "nationality" : 'Singaporean',
  "postal_code" : '340712',
  "identity_no" : 's86917127G',
  "country" : "sg",
  "email" : "tianyao@example.com",
  "id_back" : "nricBackPlaceholder.png",
  "id_document" : "nricDocumentPlaceholder.png",
  "id_front" : "nricFrontPlaceholder.png",
  "id_selfie" : "nricSelfiePlaceholder.png",
  "phone_no" : "+6597288608",
  "bank_accounts" : [
    {
       "id" : "12312",
       "account_no" : "039-312-3432-3",
       "bank_abbrev" : "DBS"
    },
    {
       "id" : "12315",
       "account_no" : "129-880-1251-1",
       "bank_abbrev" : "OCBC"
    }
  ]
}
```

This endpoint allows user to update their account information, this especially important for account that require KYC.

#### HTTPS Request

`PUT https://sandbox.xfers.io/api/v3/user`


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
first_name | string | optional | Account holder firstname | Tianwei
last_name | string | optional | Account holder lastname | Liu
address_line_1 | string | optional | Address line 1 | Blk 212 Jurong East St 50
address_line_2 | string | optional | Address line 2 | #08-41
nationality | string | optional | Account holder nationality | Singaporean
postal_code | string | optional | Address postal code | 640212
identity_no | string | optional | Account holder national identity no | s841212318g
country | string | optional | Account holder resident country | Singapore


### Get Account Activities

The activities API only supports querying of a user's activity.

```shell
curl "https://sandbox.xfers.io/api/v3/user/activities" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

> Response:

```json
{
  "msg" : "success",
  "activities" : [
    {
      "type": "normal",
      "trans_type": "transaction",
      "display_time": "2015-06-22T06:21:31.000+08:00",
      "description": "Victor Liew",
      "plus_minus": "+",
      "display_amount": "30.0",
      "transaction_items":
      [
        {
          "item_name": "Threadless T-Shirt",
          "item_description": "Red Threadless T-Shirt, (S) Size",
          "item_price": "14.5",
          "item_quantity": 2
        },
        {
          "item_name": "Light Brown Belt",
          "item_description": "Light brown Belt, (XS) Size",
          "item_price": "5.5",
          "item_quantity": 3
        }
      ],
      "display_image_url": "https://www.xfers.io/assets/displayImageUser-c610a87e219afbe0bfc27bcddd67b8f831f967aedb01aef82a9009e9b6eb36c2.png"
    },
    {
      "type": "external",
      "trans_type": "deposit",
      "display_time": "2015-06-23T16:08:39.000+08:00",
      "description": "OCBC Transfer",
      "plus_minus": "+",
      "display_amount": "10.0",
      "transaction_items":
      [
      ],
      "display_image_url": "https://www.xfers.io/assets/displayImageUser-c610a87e219afbe0bfc27bcddd67b8f831f967aedb01aef82a9009e9b6eb36c2.png"
    }
  ]
}


```

This endpoint return information related to your account activites such as the types and statuses of transactions that the user has.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user/activities`


## Bank Account

The follow APIs allow you to add or update your bank account info.

### Supported banks

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

### Add a Bank Account

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"account_no": "03931234323", "bank":"DBS"}'
```

> Response:

```json
{
  "bank_accounts" : [
    {
       "id" : "12312",
       "account_no" : "039-312-3432-3",
       "bank_abbrev" : "DBS"
    },
    {
       "id" : "12315",
       "account_no" : "129-880-1251-1",
       "bank_abbrev" : "OCBC"
    }
  ]
}
```

This request will add a new bank account to this Xfers account. You will be able to withdraw your Xfers available balances to these account(s).


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/user/bank_account`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
account_no | string | optional | bank account no | 03931234323
bank | string | optional | bank abbreviation (Refer to [supported banks](/docs/#supported-banks)) | DBS


### Update a Bank Account

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"account_no": "03931234321", "bank":"DBS"}'
```

> Response:

```json
{
  "bank_accounts" : [
    {
       "id" : "12312",
       "account_no" : "039-312-3432-1",
       "bank_abbrev" : "DBS"
    },
    {
       "id" : "12315",
       "account_no" : "129-880-1251-1",
       "bank_abbrev" : "OCBC"
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
bank | string | optional | bank abbreviation (Refer to [supported banks](/docs/#supported-banks)) | DBS


### Submit Withdrawal Request

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>/withdraw" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"amt": "50.0"}'
```

> Response:

```json
{
  "available_balance": "0.00",
  "ledger_balance" : "200.00",
  "withdrawal_request" :
    {
       "id" : "59",
       "account_no" : "039-312-3432-3",
       "bank_abbrev" : "DBS",
       "amount" : "50.0",
       "status" : "processing"
    }
}
```

This will make a withdrawal request to the bank account given, provided that your account have sufficient available balance.

#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>/withdraw`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | string | required | Amount to withdraw in SGD | 50.0

### List Withdrawal Request

```shell
curl "https://sandbox.xfers.io/api/v3/user/withdraw_requests" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

> Response:

```json
{
  "withdrawal_requests" : [
    {
       "id" : "59",
       "account_no" : "039-312-3432-3",
       "bank_abbrev" : "DBS",
       "amount" : "50.0",
       "status" : "processing"
    },
    {
       "id" : "99",
       "account_no" : "129-880-1251-1",
       "bank_abbrev" : "OCBC",
       "amount" : "250.0",
       "status" : "processing"
    }
  ]
}
```

This will list all non-completed withdrawal requests made previously.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user/bank_account/withdrawal_requests`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
filter | string | optional | filter by [withdrawal status](/docs/#withdrawal-status) | Default to no filter


##### Withdrawal Status
Name | Description
---- | ------------
unverified | Withdrawal request is awaiting confirmations
pending | Withdrawal request is being process now.
paid | Withdrawal request has been processed and completed.
cancelled | Withdrawal request has been cancelled.

### Get Transfer Info

```shell
curl "https://sandbox.xfers.io/api/v3/user/transfer_info" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

> Response:

```json
{
  "bank_name_full" : "Oversea Chinese Banking Corporation",
  "bank_name_abbreviation" : "OCBC",
  "bank_account_no" : "646004424001",
  "bank_code" : "7339",
  "branch_code" : "646",
  "branch_area" : "Jurong East",
  "unique_id" : "97288607"
}
```

This will return transfer in info specific to the user.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user/transfer_info`


## Charges

The following APIs allow you to create a Xfers transaction and allow anyone to pay you via an internet banking transfer or credit card(coming soon).

### Creating a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{ "amount": "9.99", "currency": "SGD", "redirect": "false", "notify_url": "https://mysite.com/payment_notification", "return_url": "https://mysite.com/return", "cancel_url": "https://mysite.com/cancel", "order_id": "AZ9912", "description":"unused red dress", "shipping": "2.50", "tax": "0.0", "items" : [{"description":"Red dress Size M","price":9.99,"quantity":1,"name":"Red dress"}], "meta_data": {"firstname":"Tianwei", "lastname":"Liu"}}'
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
  "capture" : true,
  "refundable" : true,
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
  "status" : "pending",
  "meta_data" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
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
order_id | string | required | Unique ref no provided by you to prevent double charging, this cannot be repeated | A012312
description | string | required | Description of transaction for display purposes | Carousell user - Konsolidate
notify_url | string | optional | URL to receive callback notifications on charge success/failure/expiration | https://mysite.com/payment_notification
return_url | string | optional | URL Xfers will redirect customer to on completion of Xfers checkout | https://mysite.com/return
cancel_url | string | optional | URL Xfers will redirect customer to on cancellation of Xfers checkout | https://mysite.com/cancel
refundable | boolean | optional | Whether or not this charge can be refunded. Non Refundable Charges will settle immediately after payment. | Default to true
user_api_token | string | optional | Buyer's api token obtain via Connect's get user token APIs. When this is provide, this charge will skip user auth and attempt debit immediately from users existing balance. Status returned will be "completed" on successful debit or "cancelled" when there insufficient funds in user wallet.
redirect | string | optional | When this is true, instead of the JSON response, Xfers will automatically redirect the request to our checkout page| Default to true
items | string | optional | A JSON array of item with attributes 'description, name, price, quantity'. See more [info](/docs/#item-hash). | "[{"description":"Red dress Size M","price":9.99,"quantity":1,"name":"Red dress"}]"
shipping | float | optional | Shipping fees | Default to 0.0
tax | float | optional | tax in $  | Default to 0.0
hrs_to_expirations | float | optional | No of hours before this transactons will expire  | Default to 48.0 hours from now.
meta_data | string | optional | A set of key/value pairs that you can attach to a charge. It can be useful for storing additional information about the customer in a structured format. You will be provided with these meta_data in your callback notification | {"firstname":"tianwei", "lastname":"liu"}
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

#### meta data
You can use the `metadata` parameter to attach json data. This is useful for storing additional structured information about the charge. As an example, you could store your user's first name, last name or any corresponding unique identifier from your system a Xfers charge. 

The description and metadata you specify is returned in API responses.

When a charge get cancelled, additional information might be provided in the metadata field like

Key | value | meaning
---- | ---- | ------ |
custom_code | 'KYC_ERROR' | User has some issues with their Xfers' account validation.
custom_code | 'INSUFFICIENT_FUND' | This is returned when a charge via user_api_token was unable to be process due to insufficient account balance.

<aside class="notice">
You should always provide customer's firstname and lastname information whenever you can as it would help us detecting fraudulence charges or user who have made an mistaken in their bank transfer.
</aside>


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
txn_id | string | Xfers's transaction id unique to each transaction| asd1wwd1csadjw1e213sad
order_id | string | Unique ref no provided by your during your charge call | A012312
total_amount | float | 12.49 | Total value for items
currency | string | 3-letter ISO code for currency | SGD
status | string | Payment status. | "cancelled" or "paid" or "expired"


### Verification of Notifications
```shell
curl "https://sandbox.xfers.io/api/v3/charges/<txn_id>/validate" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"total_amount": "24.99", "currency": "SGD", "order_id": "A012312", "status": "paid"}'
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
status | string | Payment status. | "cancelled" or "paid" or "expired"


### Payment Settlement

After refundable charge become "paid", its funds(minus our fees) will be added to your account ledger balance.

By default, its funds(minus our fees) will be "withheld" by Xfers for another 10 days(for refund and dispute purposes) before the charge becomes "completed" and it's funds(minus our fees) will be credited to your Xfers account available balance.



### Settle a Charge
```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"settlement_code": "512312"}'
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
  "capture" : true,
  "refundable" : true,
  "shipment_date" : "2015-07-02T06:26:51Z",
  "settlement_date" : "2015-07-05T06:26:51Z",
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
    "firstname":"Tianwei",
    "lastname": "Liu"
  }
}
```


Settle the payment of a previous created refundable charge. This is an optional process which is usually made when a seller has delivered their goods/services and would like to shorten the payment settlement process. The default [payment settlement process](/docs/#payment-settlement) takes 10 days.

When a correct `settlement_code` is provided, the charge will become completed and the funds
will be available for usage(withdrawal, payout, etcs) immediately.

If no `settlement_code` was provided, buyer will receive a notifications from Xfers that a seller has delivered on their goods/services and has 72 hrs dispute it before their funds are released to the seller.


#### HTTPS Request
`POST https://sandbox.xfers.io/api/v3/charges/<id>`

#### URL Parameters
Name | Type | Required | Description | Value
---- | ---- | -------- | -------- | -----------
settlement_code | string | Optional | PIN code provided to the buyer | 512312


### Retrieve a Charge
```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
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
  "capture" : true,
  "refundable" : true,
  "shipment_date" : "2015-07-02T06:26:51Z",
  "settlement_date" : "2015-07-05T06:26:51Z",
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
    "firstname":"Tianwei",
    "lastname": "Liu"
  }
}
```

Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Xfers will return the corresponding charge information. The same information is returned when creating or refunding the charge.

#### HTTPS Request
`GET https://sandbox.xfers.io/api/v3/charges/<id>`



### List all Charges
```shell
curl "https://sandbox.xfers.io/api/v3/charges?limit=1" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
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
    "refundable" : true,
    "shipment_date" : "2015-07-02T06:26:51Z",
    "settlement_date" : "2015-07-05T06:26:51Z",    
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
ending_before | string | optional | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. | asd1wwd1csadjw1e213sad
limit | integer | optional | A limit on the number of objects to be returned. Limit can range between 1 and 50 items. | Default to 10
starting_after | string | optional | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. | asd1wwd1csadjw1e213sad

## Payouts
Xfers payout Apis allow you to pay anyone with your Xfers balance via their phone no or email address. A SGD$1.00 fees will be charge to your account on every successful payout. You need to have sufficient available balance in your account to cover the amount + fees required for the payout.

### Creating a Payout

```shell
curl "https://sandbox.xfers.io/api/v3/payouts" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"amount": "150.00", "invoice_id": "AZ0001", "descriptions": "Payment for Rent for July", "recipient": "+6597288608"}'
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
  "status" : "unclaimed"
}
```

The following request will allow you to make a payout to the recipient. If you only provide us with bank details, Xfers will make a payout directly to that bank account. 
If only email/phone no is provided, Xfers will email/SMS the recipient to inform him of the payout and allow him to claim and withdrawal the funds to any of the [local banks we support](/docs/#supported-banks). However, if a user has an account with xfers, we will credit the amount into the user's account immediately. 
If both bank details and recipient informations are provided, we will credit their bank account and send them a notification once their payout has been processed.

Note: If the recipient did not accept the payout within 14 days, the payout will be cancelled and its funds will be return back to your Xfers balances.

`POST https://sandbox.xfers.io/api/v3/payouts`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | float | required | Total value for items. | 150.00
invoice_id | string | required | Unique ref no provided by merchant. This will need to be unique or the payout request will be considered a duplicate and ignored. | AZ0001
recipient | string | optional | Email or Mobile Phone No of the recipient for this payout. | +659728860
user_api_token | string | optional | user’s api token obtain via Connect’s get user token APIs. When this is provided, it will replace the recipient param as the payout target | 
currency | string | optional | 3-letter ISO code for currency | Default to 'SGD'
descriptions | string | optional | A short description for this payout. This will be part of the email/SMS that the recipient will be receiving from Xfers. | Payment for Rent for July
bank | string | optional | Bank abbreviation of the [supported banks](/docs/#supported-banks) | DBS
bank_account_no | string | optional | Bank account no of recipient | 4234126091

### Retrieve a Payout
```shell
curl "https://sandbox.xfers.io/api/v3/payouts/<id>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
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
  "status" : "unclaimed"
}
```

Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Xfers will return the corresponding charge information. The same information is returned when creating or refunding the charge.

#### HTTPS Request
`GET https://sandbox.xfers.io/api/v3/payouts/<id>`

The below is a list of payout status and their respective meanings.

##### Payout Status
Name | Description
---- | ------------
unclaimed | Payout has not been accepted by recipient.
completed  | Payout has been completed.
cancelled  | Payout has been cancelled.


### List all Payouts
```shell
curl "https://sandbox.xfers.io/api/v3/payouts?limit=1" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
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


## Refunds
The following APIs allow you to refund a charge that has previously been created and paid by your buyer but not yet refunded. Funds will be refunded to the buyer Xfers account available balance. The fees you were originally charged are also refunded.

### Creating a Refund
```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>/refunds" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
  -X POST
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

When you create a new refund, you must specify a charge to create it on.

Creating a new refund will refund a charge that has previously been created and paid but not yet refunded. Funds will be refunded to the buyer Xfers account available balance. The fees you were originally charged are also refunded.

#### HTTPS Request
`POST https://sandbox.xfers.io/api/v3/charges/<id>/refunds`


# Xfers Connect

Xfers connect is for accepting payment on behalf of others, and gaining access to their data.

You might use Connect if you:

- Are building a platform that enables e-commerce like Shopify or tackthis. 

- Need to easily accept payments and pay out your service providers, like Grabtaxi with its drivers or yesHelper with its workers. (You can even create Xfers accounts for your users, so they only ever interact with your platform.)

In general, if you’re building a platform or marketplace that needs to pay third-parties or building applications that help Xfers users do more with their account or their data, Connect is likely the right solution for you.



## Authentication
```shell
# With shell, you can just pass the correct header with each request
curl "https://sandbox.xfers.io/api/v3/authorize/connect" \
  -H "X-XFERS-APP-API-KEY: Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg" \
  -H "Content-Type: application/json" \
  -d '{"hello": "world", "signature": "5341eb694dada7866166ece5f46d1c2884839a3f"}'
```

> Make sure to replace `Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg` with your API key.

Xfers connect uses a pair of API Keys and API Secret to access its APIs.

Write in to us at support@xfers.io to request for your Xfers connect API Keys.
You will provided with a pair of keys named `X-XFERS-APP-API-KEY` and `X-XFERS-APP-SECRET-KEY`.

Xfers connect expects the API key to be included in all API requests to the server in a header that looks like the following:

`X-XFERS-APP-API-KEY: Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg`


For all examples below we will be using the follow:

`X-XFERS-APP-SECRET-KEY: xHsrB268LjLfrzxAraYXLHdRMpTA5XRVLDbe9gmVQTU`


> The above command returns JSON structured like this on success:

```json
  {
    "msg": "Hello world"
  }
```


<aside class="notice">
You must replace <code>Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg</code> with your Xfers Connect's API key. These are not the same as your user API Key found in your account settings page.
</aside>


## Signup/login to Xfers
```shell
curl "https://sandbox.xfers.io/api/v3/authorize/signup_login"\
  -H "X-XFERS-APP-API-KEY: Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg"\
  -H "Content-Type: application/json" \
  -d '{"phone_no" : "+6597288608", "signature" : "c5535aa2c4d25aa1e18a6a7e421a34e51bda5565"}'
```

> Response

```json
  {
    "msg": "success"
  }
```

This API call will attempt to login(existing user) or signup a new user.

An SMS with a OTP will be send to that number which must be used for [get_token](/docs/#get-user-api-token) api call.

### HTTPS Request
`POST https://sandbox.xfers.io/api/v3/authorize/signup_login`


### URL Parameters
Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
phone_no | string | required | User mobile no | +6597288608
signature | string | required | SHA1 of phone_no+APP_SECRET_KEY  | Digest::SHA1.hexdigest("+6597288608xHsrB268LjLfrzxAraYXLHdRMpTA5XRVLDbe9gmVQTU") = c5535aa2c4d25aa1e18a6a7e421a34e51bda5565


## Get User API Token
```shell
curl "https://sandbox.xfers.io/api/v3/authorize/get_token?otp=541231&phone_no=+6597288608&signature=bdc26373b3a78dd11dc840a1b7973f197cf34c91" \
  -H "X-XFERS-APP-API-KEY: Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg"
```

> Response

```json
  {
    "msg": "success",
    "user_api_token": "1DnsZkv3qXwKx4EAdps8AJ8jXCPsxP2sKSygMHTAFLM"
  }
```


This API call will return the user's `X-XFERS-USER-API-KEY`.


### HTTPS Request
`GET https://sandbox.xfers.io/api/v3/authorize/get_token?otp=541231&phone_no=+6597288608&signature=bdc26373b3a78dd11dc840a1b7973f197cf34c91`

### URL Parameters
Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
otp | string | required | 6 digit one-time-password send over SMS | 541231
phone_no | string | required | User mobile no | +6597288608
signature | string | required | SHA1 of phone_no+OTP+APP_SECRET_KEY | Digest::SHA1.hexdigest("+659728860851231xHsrB268LjLfrzxAraYXLHdRMpTA5XRVLDbe9gmVQTU") = bdc26373b3a78dd11dc840a1b7973f197cf34c91




