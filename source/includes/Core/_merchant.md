## Merchant

The merchant API supports querying and making changes to a user's business details for compliance purposes.

### Get Merchant Info

```shell
curl "https://sandbox.xfers.io/api/v3/merchant" \
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
{
  "business_id": "53348831Z",
  "business_name" : "Alpha Events",
  "business_type" : "Private Company",
  "business_position" : "Director",
  "business_address_line_1" : "78 Lucky Plaza",
  "business_address_line_2" : "#14-39",
  "business_postal_code" : "938884",
  "business_telephone" : "+6583994012",
  "bizfile_document" : "BIZFILE.pdf",
  "business_verified" : false,
  "shareholders": [
   {
      "firstName":"Samson",
      "lastName":"Leo",
      "nricNumber":"S8781203Q",
      "dateOfBirth":"19/02/1987",
      "nationality":"Singaporean",
      "address1":"Blk 600 Elias Road",
      "address2":"#09-123",
      "postalCode":"510600",
      "phoneNumber":"+6583004848",
      "businessType":"Private Company",
      "businessPosition":"Director"
   }
  ]
}
```

This endpoint returns merchant information related to your account.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/merchant`

### Update Merchant Info

```shell
curl "https://sandbox.xfers.io/api/v3/merchant" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"business_id": "53348831Z", "business_name": "Alpha Events", "business_type": "Private Company"}'
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
  "business_id": "53348831Z",
  "business_name" : "Alpha Events",
  "business_type" : "Private Company",
  "business_position" : "Director",
  "business_address_line_1" : "78 Lucky Plaza",
  "business_address_line_2" : "#14-39",
  "business_postal_code" : "938884",
  "business_telephone" : "+6583994012",
  "bizfile_document" : "BIZFILE.pdf",
  "business_verified" : false,
  "shareholders": [
   {
      "firstName":"Samson",
      "lastName":"Leo",
      "nricNumber":"S8781203Q",
      "dateOfBirth":"19/02/1987",
      "nationality":"Singaporean",
      "address1":"Blk 600 Elias Road",
      "address2":"#09-123",
      "postalCode":"510600",
      "phoneNumber":"+6583004848",
      "businessType":"Private Company",
      "businessPosition":"Director"
   }
  ]
}
```

This endpoint allows user to update their merchant information. If the user is not yet a merchant, this process converts them to a merchant.

#### HTTPS Request

`PUT https://sandbox.xfers.io/api/v3/merchant`


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
business_id | string | optional | Enter your singapore recognized bizfile ID. (eg: UEN, incorporation number, business registration number).
business_position | string | optional | Position in the business. | "Owner", "Partner", "Director", "Shareholder", "Director & Shareholder", "Chairperson", "Treasurer", "Civil Servant"
business_name | string | optional | Enter in the name of your business.
business_type | string | optional | Type of your business| "Individual", "Sole Proprietorship", "Partnership", "Private Company", "Public Company", "Societies / Nonprofit organisations", "Government Entity"
business_address_line_1 | string | optional | Enter in the first line of your business' address. | 123 Xfers Road
business_address_line_2 | string | optional | Enter in the last line of your business' address. | Block 10 #17A
business_postal_code | string | optional | Enter in your business' postal code. | S323233
business_telephone | string | optional | Enter your business' phone number along with the country code. | +6591234567
bizfile_document | string | optional | URL storing the ACRA Bizfile document as proof of your business details


### Add Shareholder

```shell
curl "https://sandbox.xfers.io/api/v3/merchant/shareholder" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"firstName": "wenbin", "lastName": "tay", "nricNumber": "Blk 712 loyang Avenue 5", "dateOfBirth": "#01-41", "nationality": "Singaporean", "postalCode": "340712", "nricNumber": "s86917127G", "businessType": "Private Company", "businessPosition": "Director", "phoneNumber":"+6583004848"}'
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
  "business_id": "53348831Z",
  "business_name" : "Alpha Events",
  "business_type" : "Private Company",
  "business_position" : "Director",
  "business_address_line_1" : "78 Lucky Plaza",
  "business_address_line_2" : "#14-39",
  "business_postal_code" : "938884",
  "business_telephone" : "+6583994012",
  "bizfile_document" : "BIZFILE.pdf",
  "business_verified" : false,
  "shareholders": [
   {
      "firstName":"Samson",
      "lastName":"Leo",
      "nricNumber":"S8781203Q",
      "dateOfBirth":"19/02/1987",
      "nationality":"Singaporean",
      "address1":"Blk 600 Elias Road",
      "address2":"#09-123",
      "postalCode":"510600",
      "phoneNumber":"+6583004848",
      "businessType":"Private Company",
      "businessPosition":"Director"
   }
  ]
}
```

This endpoint allows businesses to add a shareholder.

#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/merchant/shareholder`


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
firstName | string | required | First name | Samson
lastName | string | required | Last name | Leo
nricNumber | string | required | National identity number | S8781203Q
dateOfBirth | string | required | Date of birth | 19/02/1987
nationality | string | required | Nationality | Singaporean
address1 | string | required | First line of address | Blk 600 Elias Road
address2 | string | required | Last line of address | #09-123
postalCode | string | required | Postal code | 510600
phoneNumber | string | required | Phone number with country code | +6583004848
businessType | string | required | Business type | "Individual", "Sole Proprietorship", "Partnership", "Private Company", "Public Company", "Societies / Nonprofit organisations", "Government Entity"
businessPosition | string | required | Business position | "Owner", "Partner", "Director", "Shareholder", "Director & Shareholder", "Chairperson", "Treasurer", "Civil Servant"


### Delete Shareholder

```shell
curl -X DELETE "https://sandbox.xfers.io/api/v3/merchant/shareholder/<shareholder_nric_number>" \
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
{
  "business_id": "53348831Z",
  "business_name" : "Alpha Events",
  "business_type" : "Private Company",
  "business_position" : "Director",
  "business_address_line_1" : "78 Lucky Plaza",
  "business_address_line_2" : "#14-39",
  "business_postal_code" : "938884",
  "business_telephone" : "+6583994012",
  "bizfile_document" : "BIZFILE.pdf",
  "business_verified" : false,
  "shareholders": [
  ]
}
```

This request allow you to delete an existing shareholder.

#### HTTPS Request

`DELETE https://sandbox.xfers.io/api/v3/merchant/shareholder/<shareholder_nric_number>`

#### Response
The latest business details.

