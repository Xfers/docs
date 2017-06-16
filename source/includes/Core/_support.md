## Support

The following APIs allow you to integrate payment support functionality directly into your app.


### Creating a Support Ticket

```shell
curl "https://sandbox.xfers.io/api/v3/support" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
 -H "Content-Type: application/json" \
  -d '{ "file": "bank_transfer_receipt.jpg", "intent_id": "6f5f85859a51cd08c8ae113412bb72c8", "description": "Transferred an hour ago but money still not credited", "email": "bobby@gmail.com", "amount": 5.89, "date": "13/02/2017", "time": "23:59"}'  
```

```php
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
  "support_id": "35331",
  "intent_id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "date": "2016-08-13",
  "time": "3:39",
  "account_holder_name": "Tian Wei",
  "bank_abbrev": "BCA",
  "account_no": "0124121241",
  "amount": 132549,
  "currency": "IDR",
  "status": "processing"
}
```

Create a support ticket to be processed by Xfers Customer Support team.
You can use either `application/x-www-form-urlencoded` (HTTP URL to file) or `multipart/form-data` (file upload) Content-Types.

`POST https://sandbox.xfers.io/api/v3/support`


#### Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
description | string | required | Any additional information | I submitted without contact number in the initial/comments section
date | string | required | Date the transfer was made (DD/MM/YYYY)| 13/08/2017
time | string | required | Approximate time the transfer was made (HH:MM)| 21:30
email | string | required | User's email so we can get back to them | bobby@gmail.com
amount | float | required | Amount user transferred | 5.89
file | string | required | File or URL of the receipt image | bank_transfer_receipt.jpg
charge_id | string | Either charge or intent required | ID of the charge | b840cc9fc5a359c22ed2ccef3427aacd
intent_id | string | Either charge or intent required | ID of the intent | b840cc9fc5a359c22ed2ccef3427aacd

### Retrieve Support Ticket

```shell
curl "https://sandbox.xfers.io/api/v3/support/<SUPPORT_ID>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
```

```python
```

```ruby
```

```java
```

> Processing Response:

```json
{
  "support_id": "35331",
  "intent_id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "date": "2016-08-13",
  "time": "3:39",
  "account_holder_name": "Tian Wei",
  "bank_abbrev": "BCA",
  "account_no": "0124121241",
  "amount": 132549,
  "currency": "IDR",
  "status": "processing"
}
```

> Resolved Response:

```json
{
  "support_id": "35331",
  "intent_id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "date": "2016-08-13",
  "time": "3:39",
  "account_holder_name": "Tian Wei",
  "bank_abbrev": "BCA",
  "account_no": "0124121241",
  "status": "resolved",
  "amount": 132549,
  "currency": "IDR",
  "msg": "The bank transfer of Rp 132549 has been detected and credited into tianwei@xfers.io's account"
}
```


> Attention Response:

```json
{
  "support_id": "35331",
  "intent_id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "date": "2016-08-13",
  "time": "3:39",
  "account_holder_name": "Tian Wei",
  "bank_abbrev": "BCA",
  "account_no": "0124121241",
  "status": "attention",
  "msg": "We are unable to find a matching bank transfer. Please contact support@xfers.io."
}
```

Returns a particular support ticket.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/support/<SUPPORT_ID>`


### List all Support Tickets

```shell
curl "https://sandbox.xfers.io/api/v3/support" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
```

```python
```

```ruby
```

```java
```

> Response:

```json
[
  {
    "support_id": "35331",
    "intent_id": "b840cc9fc5a359c22ed2ccef3427aacd",
    "date": "2016-08-13",
    "time": "3:39",
    "account_holder_name": "Tian Wei",
    "bank_abbrev": "BCA",
    "account_no": "0124121241",
    "amount": 132549,
    "currency": "IDR",
    "status": "processing"
  },
  {
    "support_id": "40000",
    "intent_id": "94b72ef0fbdb4d55a26c581a8b1a2451",
    "date": "2016-08-22",
    "time": "23:45",
    "account_holder_name": "Ying Ling",
    "bank_abbrev": "MANDIRI",
    "account_no": "038838383884",
    "amount": 48854,
    "currency": "IDR",
    "status": "resolved"
  }  
]
```

List all support tickets linked to your platform.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/support`


#### Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
status | string | optional | Filter by status | 'resolved' or 'attention' or 'processing'


