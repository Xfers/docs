## OTP


### Mock OTP

```shell
curl "https://sandbox.xfers.io/api/v3/authorize/get_mock_otp?phone_no=83999455" \
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
  "otp": "039087"
}
```

This endpoint allows you to retrieve the OTP of a number when doing testing on sandbox. It is NOT available in production.

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
phone_no | string | required | Phone number for the otp you want to retrieve | 83999455

### Resend OTP

```shell
curl "https://sandbox.xfers.io/checkout_transaction/request_otp" \
-H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
-H "Content-Type: application/json" \
-X PUT \
-d '{"phoneNumber": "85993955", "trans_id": "b840cc9fc5a359c22ed2ccef3427aacd"}'
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
  "number_valid": "true"
}
```

This endpoint allows you to resend the OTP to a phone.

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
phoneNumber | string | required | Phone number to resend to. If it is a registered user, please use their email instead. | 83999455
trans_id | string | required | ID of the transaction (charge) | b840cc9fc5a359c22ed2ccef3427aacd
