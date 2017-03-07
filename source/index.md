---
title: Xfers API Reference

language_tabs:
  - shell
  - php
  - python
  - ruby
  - java

toc_footers:
  - <a href='https://www.xfers.io/account_registration'>Sign Up for a Developer Key</a>
  - <a href="mailto:support@xfers.io">Need help? Email us</a>
  - <a href='https://github.com/Xfers'>SDKs</a>

includes:
  - errors

search: true
---

<!--- Xfers User API Section -->

# Introduction

The **Xfers Core API** provides a set of simple RESTFUL APIs to allow businesses to 
integrate internet banking and credit card payments into your business or applications. 

You will make use of the Xfers Core API to manage your own account programmatically. 

**Xfers Connect** is for accepting payments on behalf of others, think of this as a super user that can manage and 
create accounts on the behalf of others. 

**Official SDKs** for the Xfers API are [available in several languages](https://github.com/Xfers).


# Testing

We've made a testing guide at [https://www.xfers.com/sg/developers/getting-started-with-testing/](https://www.xfers.com/sg/developers/getting-started-with-testing/) for you to easily get started!


# APIs endpoints

Xfers provides a **dedicated sandbox environment** where you can simulate an incoming bank transfer for testing purposes. 
Note that this feature will not be available in production mode. 

```php
<?php
require_once('vendor/autoload.php');

# SG: Singapore
# ID: Indonesia
# Set one of the following endpoints below:
\Xfers\Xfers::setSGProduction();
\Xfers\Xfers::setSGSandbox();
\Xfers\Xfers::setIDProduction();
\Xfers\Xfers::setIDSandbox();
```

```python
# SG: Singapore
# ID: Indonesia
# Set one of the following endpoints below:
import xfers
xfers.set_sg_production()
xfers.set_sg_sandbox()
xfers.set_id_production()
xfers.set_id_sandbox()
```

```ruby
# SG: Singapore
# ID: Indonesia
# Set one of the following endpoints below:
require 'xfers'
Xfers.set_sg_production
Xfers.set_sg_sandbox
Xfers.set_id_production
Xfers.set_id_sandbox
```

```java
// SG: Singapore
// ID: Indonesia
// Set one of the following endpoints below:
Xfers.setSGProduction();
Xfers.setSGSandbox();
Xfers.setIDProduction();
Xfers.setIDSandbox();
```

For testing purposes, we highly recommend that your head over to [sandbox.xfers.io](https://sandbox.xfers.io) and create a sandbox account.

While in testing mode, point to our sandbox API endpoint at:

Singapore:
`https://sandbox.xfers.io/api/v3`

Indonesia:`https://sandbox-id.xfers.com/api/v3`

To switch to production, point to our production API endpoint at:

Singapore: `https://www.xfers.io/api/v3`

Indonesia: `https://id.xfers.com/api/v3`


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
integrate internet banking and credit card payments into your business or applications. 

You will make use of the Xfers Core API to manage your own account programmatically. 

## Authentication

> Setting API keys

```shell
# With shell, you can just pass the correct header with each request
curl "https://sandbox.xfers.io/api/v3/authorize/hello" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc');
\Xfers\Xfers::setSGSandbox();
```

```python
import xfers
xfers.api_key = 'FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc'
xfers.set_sg_sandbox()
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox
```

```java
Xfers.apiKey = "FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc";
Xfers.setSGSandbox();
```

> Make sure to replace `FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc` with your own API key.

Xfers uses API keys to allow access to the API. You can get your API key from your [Account Settings](https://sandbox.xfers.io/account_settings) page.

Xfers expects the API key to be included in the header of all API requests to the server, like so:

`X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc`


#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/authorize/hello`


<aside class="notice">
You must replace <code>FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc</code> with your personal API key.
</aside>
<aside class="warning">
All endpoints are in HTTPS. Please do not attempt to hit our endpoint in HTTP, beside failing you will also be exposing your API key in plain text!
</aside>


### Types of API Keys


Type | Version | Description  | 
---- | ----------- | ------------ |
X-XFERS-APP-API-KEY | V3 | Only used for Xfers Connect 
X-XFERS-USER-API-KEY| V3 | The majority of our APIs uses this
X-XFERS-USER-API-KEY | V2 (Legacy) | Our legacy V2 API keys. These are only used for our WooCommerce, Opencart and Magento plugins.

![XFERS-API-KEYS][xfers-api-keys]
[xfers-api-keys]: xfers-api-keys.png

## User Account

The account info API supports querying and making changes to a User's account.

### Get Account Info

```shell
curl "https://sandbox.xfers.io/api/v3/user" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\User::retrieve();
print_r($resp);
```


```python
import xfers
from xfers import xfuser
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Retrieving user...'
    resp = xfuser.retrieve()
    print resp['first_name']
    print resp['last_name']
    print resp['available_balance']
    print resp['address_line_1']
    bank_accounts = resp['bank_accounts']
    for account in bank_accounts:
        print 'Bank account: {}'.format(account)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox
begin
  puts 'Retrieving user...'
  resp = Xfers::User.retrieve
  puts resp[:first_name]
  puts resp[:last_name]
  puts resp[:available_balance]
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Retrieving current user");
    User user = User.retrieve();
    System.out.println(user.getFirstName());
    System.out.println(user.getDateOfBirth());
    for (BankAccount bankAccount : user.getBankAccounts()) {
        System.out.println(bankAccount.toString());
    }
    System.out.println(user.toString());
} catch (Exception e) {
    e.printStackTrace();
}
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
  "address_line_1" : "Blk 712 loyang Avenue 5",
  "address_line_2" : "#01-41",
  "nationality" : "Singaporean",
  "postal_code" : "340712",
  "identity_no" : "s86917127G",
  "country" : "sg",
  "email" : "tianyao@example.com",
  "id_back" : "nricBackPlaceholder.png",
  "id_document" : "nricDocumentPlaceholder.png",
  "id_front" : "nricFrontPlaceholder.png",
  "id_selfie" : "nricSelfiePlaceholder.png",
  "phone_no" : "+6597288608",
  "multi_bank_account_detected" : "false",
  "account_locked" : "false",
  "kyc_limit_remaining" : "500.0",
  "kyc_verified" : "true",
  "is_guest" : "false",
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
  -d '{"first_name": "wenbin", "last_name": "tay", "address_line_1": "Blk 712 loyang Avenue 5", "address_line_2": "#01-41", "nationality": "Singaporean", "postal_code": "340712", "identity_no": "s86917127G", "country": "sg"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\User::update(array(
    'first_name' => 'wenbin',
    'last_name' => 'tay',
    'address_line_1' => 'Blk 712 loyang Avenue 5',
    'address_line_2' => '#01-41',
    'nationality' => 'Singaporean',
    'postal_code' => '340712',
    'identity_no' => 's86917127G',
    'country' => 'sg'
));
print_r($resp);
```


```python
import xfers
from xfers import xfuser
from xfers import error

xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()

try:
    print 'Updating user...'
    params = {
      'first_name': 'wenbin',
      'last_name': 'tay',
      'address_line_1': 'Blk 712 loyang Avenue 5',
      'address_line_2': '#01-41',
      'nationality': 'Singaporean',
      'postal_code': '340712',
      'identity_no': 's86917127G',
      'country': 'sg'
      }
    resp = xfuser.update(params)
    print resp['first_name']
    print resp['last_name']
    print resp['available_balance']
    print resp['address_line_1']
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Updating user...'
  params = {
    'first_name' => 'wenbin',
    'last_name' => 'tay',
    'address_line_1' => 'Blk 712 loyang Avenue 5',
    'address_line_2' => '#01-41',
    'nationality' => 'Singaporean',
    'postal_code' => '340712',
    'identity_no' => 's86917127G',
    'country' => 'sg'
  }
  resp = Xfers::User.update params
  puts resp[:first_name]
  puts resp[:last_name]
  puts resp[:available_balance]
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    System.out.println("Updating current user");
    Map<String, Object> updateParams = new HashMap<String, Object>();
    updateParams.put("first_name", "wenbin");
    updateParams.put("last_name", "tay");
    updateParams.put("address_line_1", "Blk 712 loyang Avenue 5");
    updateParams.put("address_line_2", "#01-41");
    updateParams.put("nationality", "Singaporean");
    updateParams.put("postal_code", "340712");
    updateParams.put("identity_no", "s86917127G");
    updateParams.put("country", "sg");

    User user = User.update(updateParams);
    System.out.println(user.getFirstName());
    System.out.println(user.getLastName());
    System.out.println(user.getDateOfBirth());
    System.out.println(user.getMetaData());
    System.out.println(user.toString());

} catch (Exception e) {
    e.printStackTrace();
}
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
  "address_line_1" : "Blk 712 loyang Avenue 5",
  "address_line_2" : "#01-41",
  "nationality" : "Singaporean",
  "postal_code" : "340712",
  "identity_no" : "s86917127G",
  "country" : "sg",
  "annunal_income" : "60000",
  "email" : "tianyao@example.com",
  "id_front" : "nricFrontPlaceholder.png",
  "id_back" : "nricBackPlaceholder.png",
  "selfie_2id" : "nricSelfiePlaceholder.png",
  "proof_of_address" : "nricDocumentPlaceholder.png",
  "support_document_1" : "supportDocumentPlaceholder",
  "support_document_2" : "supportDocumentPlaceholder",
  "support_document_3" : "supportDocumentPlaceholder",
  "support_document_4" : "supportDocumentPlaceholder",
  "support_document_5" : "supportDocumentPlaceholder",
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

This endpoint allows user to update their account information, this is especially important for account that would require KYC.

#### HTTPS Request

`PUT https://sandbox.xfers.io/api/v3/user`


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
first_name | string | optional | Account holder firstname | Tianwei
last_name | string | optional | Account holder lastname | Liu
email | string | optional | User email | tianwei@xfers.io
date_of_birth | string | optional | Date of birth for account holder in yyyy-mm-dd | 1986-02-27
address_line_1 | string | optional | Address line 1 | Blk 212 Jurong East St 50
address_line_2 | string | optional | Address line 2 | #08-41
nationality | string | optional | Account holder nationality | Singaporean
postal_code | string | optional | Address postal code | 640212
identity_no | string | optional | Account holder national identity no | s841212318g
country | string | optional | Account holder country of residence| Singapore
annual_income | integer | optional | Annual income of user in the local currency (SGD/IDR) | 60000
id_front_url | string | optional | URL storing the front image of user identity card
id_back_url | string | optional | URL storing the back image of user identity card
selfie_2id_url | string | optional | URL storing the selfie of user holding their id card or a second form of id like driving license or passport
proof_of_address_url | string | optional | URL storing the image/pdf of proof of address document of user like bank statement or telco bill. For business, please provide your Arca Bizfile.
support_document_1_url | string | optional | URL storing the image/pdf of support documents like proof of user income
support_document_2_url | string | optional | URL storing the image/pdf of support documents like proof of user income
support_document_3_url | string | optional | URL storing the image/pdf of support documents like proof of user income
support_document_4_url | string | optional | URL storing the image/pdf of support documents like proof of user income
support_document_5_url | string | optional | URL storing the image/pdf of support documents like proof of user income
meta_data| string | optional | Additional data like Jumio info dump.


<aside class="notice">
All documents/images provided should not exceed 10MB per file.
</aside>


### Get Account Activities

The activities API only supports querying of a user's activity.

```shell
curl "https://sandbox.xfers.io/api/v3/user/activities" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\User::activities();
print_r($resp);
```

```python
import xfers
from xfers import xfuser
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Getting activities...'
    activities = xfuser.activities()
    for activity in activities:
        print activity
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Getting activities...'
  activities = Xfers::User.activities
  activities.each { |activity|
    puts activity
  }
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Retrieving current user activities");
    List<Activity> activities = User.activities();
    for (Activity activity : activities) {
        System.out.println(activity.getTransType());
        System.out.println(activity.getTransactionItems().toString());
        System.out.println(activity.getDisplayAmount());
        System.out.println(activity.getPlusMinus());
    }
} catch (Exception e) {
    e.printStackTrace();
}
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

This endpoint returns information related to your account activites such as the types and statuses of transactions that the user has.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user/activities`

#### Query Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
limit | integer | optional | Max number of results to return | 50 (default)


### Get Transfer Info

```shell
curl "https://sandbox.xfers.io/api/v3/user/transfer_info" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\User::transferInfo();
print_r($resp);
```

```python
import xfers
from xfers import xfuser
from xfers import error

xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()

try:
    print 'Getting transfer info...'
    resp = xfuser.transfer_info()
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Getting transfer info...'
  resp = Xfers::User.transfer_info
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    System.out.println("Retrieving current user transfer info");
    TransferInfo transferInfo = User.transferInfo();
    System.out.println(transferInfo.getBankNameFull());
    System.out.println(transferInfo.getBankNameAbbreviation());
    System.out.println(transferInfo.getBankAccountNo());
    System.out.println(transferInfo.getBankCode());
    System.out.println(transferInfo.getBranchCode());
    System.out.println(transferInfo.getBranchArea());
    System.out.println(transferInfo.getUniqueId());
    System.out.println(transferInfo.toString());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "bank_name_full" : "Malaysia Banking BHD",
  "bank_name_abbreviation" : "MBB",
  "bank_account_no" : "04111066899",
  "bank_code" : "7302",
  "branch_code" : "001",
  "branch_area" : "Maybank Tower",
  "unique_id" : "97288607"
}
```

> All Banks Response:

```json
[
  {
    "bank_name_full" : "Bank Central Asia",
    "bank_name_abbreviation" : "BCA",
    "bank_account_no" : "1063003003",
    "bank_code" : "",
    "branch_code" : "",
    "branch_area" : "",
    "unique_id" : "97288607",
    "img_src": "https://xfers.com/bank-logo-bca.png"
  }, 
  {
    "bank_name_full" : "Bank Mandiri",
    "bank_name_abbreviation" : "MANDIRI",
    "bank_account_no" : "1190006792749",
    "bank_code" : "",
    "branch_code" : "",
    "branch_area" : "",
    "unique_id" : "97288607",
    "img_src": "https://xfers.com/bank-logo-mandiri.png"    
  },
  {
    "bank_name_full" : "Bank Negara Indonesia",
    "bank_name_abbreviation" : "BNI",
    "bank_account_no" : "8000067885",
    "bank_code" : "",
    "branch_code" : "",
    "branch_area" : "",
    "unique_id" : "97288607",
    "img_src": "https://xfers.com/bank-logo-bni.png"    
  }    
]
```


This will return transfer in info specific to the user. This information is used for topping up the user's Xfers account.

On your User Interface, instruct the user to make a bank transfer to the bank name and bank account number specified. **For our Maybank account, the user must also include his mobile phone number in the "Initials" and "Comments for Recipient" field when doing a bank transfer** so Xfers can identify which user this bank transfer belongs to.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user/transfer_info`


#### Query Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
all (Coming soon) | boolean | optional | Return an array of all banks available. Only for Indonesia | true (defaults to false)


### Register Updates Callback - Coming soon

```shell
curl "https://sandbox.xfers.io/api/v3/user/balance_callback" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"callback_url": "www.example.com/update", "meta_data": {"key1" : "value1", "key2" : "value2"}}'
```

> Response:

```json
  {
    "msg": "success",
    "callback_url": "http://www.example.com/updates",
    "meta_data" : {
    	"key1" : "value1",
    	"key2" : "value2"
    }
  }
```

This will allow you to register for a callback which will be fired whenever there are user account changes(like change in account balances). This callback request is only valid for 24hrs.

#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/user/balance_callback`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
callback_url | string | required | URL to receive callback notifications on account changes | https://www.example.com/updates
meta_data | string | optional | A set of key/value pairs that you can attach to this request. It can be useful for storing additional information about the customer in a structured format. You will be provided with these meta_data in your callback notification | {"email”:“tianwei@xfers.io”, “orderId”:“AZ12312”}


### Updates Callback Notifications - Coming soon

After registering for a account callback notifications. Whenever they are any account changes(like a change in account balances), Xfers will send a callback to the `callback_url` you previously provided. This is a server to server HTTPS/HTTP POST and you will need to acknowledge the callback by providing a HTTP 200 status.

`POST https://www.example.com/updates`

The following parameters will be part of the HTTPS/HTTP POST:

Name | Type | Description | Value
---- | ---- | -------- | -----------
available_balance | float | Account's current available balance| 250.50
meta_data | string | The json string you previously provided in the register request | {"email”:“tianwei@xfers.io”, “orderId”:“AZ12312”}


## Bank Account

The follow APIs allow you to add or update your bank account info and fetch a list of available banks for withdrawal.

### Available Banks (Coming Soon)

```shell
curl "https://sandbox.xfers.io/api/v3/banks?country=sg" \
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
    "name": "Development Bank of Singapore",
    "abbreviation": "DBS",
    "img_src": "https://xfers.com/bank-logo-dbs.png"
  },
  {
    "name": "United Oversea Bank",
    "abbreviation": "UOB",
    "img_src": "https://xfers.com/bank-logo-uob.png"
  },
  {
    "name": "Malaysia Banking BHD",
    "abbreviation": "MBB",
    "img_src": "https://xfers.com/bank-logo-mbb.png"
  },
  {
    "name": "Oversea-Chinese Banking Corporation Limited",
    "abbreviation": "OCBC",
    "img_src": "https://xfers.com/bank-logo-ocbc.png"
  },
  {
    "name": "Citibank Singapore",
    "abbreviation": "CITI",
    "img_src": "https://xfers.com/bank-logo-citi.png"
  },
  {
    "name": "Standard Chartered Bank",
    "abbreviation": "SCB",
    "img_src": "https://xfers.com/bank-logo-scb.png"
  },
  {
    "name": "Australia and New Zealand Bank Group",
    "abbreviation": "ANZ",
    "img_src": "https://xfers.com/bank-logo-anz.png"
  },
  {
    "name": "CIMB Bank Berhad",
    "abbreviation": "CIMB",
    "img_src": "https://xfers.com/bank-logo-cimb.png"
  },
  {
    "name": "Deutsche bank AG",
    "abbreviation": "DBAG",
    "img_src": "https://xfers.com/bank-logo-dbag.png"
  },
  {
    "name": "Far Eastern Bank Ltd",
    "abbreviation": "FEB",
    "img_src": "https://xfers.com/bank-logo-feb.png"
  },
  {
    "name": "Hong Kong and Shanghai Banking Corporation",
    "abbreviation": "HSBC",
    "img_src": "https://xfers.com/bank-logo-hsbc.png"
  },
  {
    "name": "RHB Bank Berhad",
    "abbreviation": "RHB",
    "img_src": "https://xfers.com/bank-logo-rhb.png"
  },
  {
    "name": "Sumitomo Mitsui Banking Corporation",
    "abbreviation": "SMFG",
    "img_src": "https://xfers.com/bank-logo-smfg.png"
  },
  {
    "name": "Bank of China",
    "abbreviation": "BOC",
    "img_src": "https://xfers.com/bank-logo-boc.png"
  },
  {
    "name": "Bank of Tokyo-Mitsubshi UFJ",
    "abbreviation": "MUFG",
    "img_src": "https://xfers.com/bank-logo-mufg.png"
  },
  {
    "name": "BNP PARIBAS",
    "abbreviation": "BNP",
    "img_src": "https://xfers.com/bank-logo-bnp.png"
  },
  {
    "name": "HL BANK",
    "abbreviation": "HLB",
    "img_src": "https://xfers.com/bank-logo-hlb.png"
  },
  {
    "name": "Mizuho Bank",
    "abbreviation": "MIZ",
    "img_src": "https://xfers.com/bank-logo-miz.png"
  }
]
```

This will provide you with a list of banks we support.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/banks?country=sg`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
country | string | required | Country | sg or id


### Add a Bank Account

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"account_no": "03931234323", "bank":"DBS"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\BankAccount::add(array(
        'account_no' => '03931234323',
        'bank' => 'DBS'
    ));
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught invalid request exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfbankaccount
from xfers import error

xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()

try:
    print 'Adding bank account...'
    params = {
        'account_no': '03931234323',
        'bank': 'DBS'
    }
    bank_accounts = xfbankaccount.add(params)
    for bank_account in bank_accounts:
        print 'Bank account: {}'.format(bank_account)
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Adding bank account...'
  params = {
      'account_no'=> '03931234321',
      'bank'=> 'DBS'
  }
  bank_accounts = Xfers::BankAccount.add params
  puts "number of bank accounts=> #{bank_accounts.length}"
  bank_accounts.each { |account| puts "Bank Account=> #{account}" }
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo";
Xfers.setSGSandbox();

try {
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("account_no", "03931234323");
    params.put("bank", "DBS");
    List<BankAccount> bankAccounts = BankAccount.add(params);
    for (BankAccount bankAccount : bankAccounts) {
        System.out.println(bankAccount.toString());
    }
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
[
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
```

This request will add a new bank account to this Xfers account. You will be able to withdraw your Xfers available balances to these account(s). 


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/user/bank_account`

#### Response

List of all bank accounts belonging to user.


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
account_no | string | required | bank account no | 03931234323
bank | string | required | bank abbreviation (Refer to [available banks](?shell/#available-banks) | DBS
notify_url (Coming soon) | string | optional | URL to receive callback notifications once we detect the account holder's name   | https://mysite.com/fetch_name_callback
type (Coming soon) | string | optional | Is this bank account to be used as a funding source or for withdrawals? | Either "funding_source" or "withdrawal" or "all". Defaults to "all"
account_holder_name (Coming soon) | string | optional | Name of bank account holder | Tian Wei


#### Callback Response Format

This feature is only available in Indonesia. To help users validate that the bank account they added is correct, Xfers will attempt to fetch the name tied to the account holder from the bank itself.

As this process takes up to a few minutes, we will make a HTTPS POST request to the `notify_url` provided with the following parameters once it is complete:


Name | Type | Description | Value
---- | ---- | ----------- | -----
bank | string | The bank abbreviation | BCA
account_no | string | The bank account number | 03931234323
account_holder_name | string | The account holder's name | Liu Tian Wei
error | string | Error message, if any | Account number does not exist
status | string | Status of the name fetch | "success" or "fail"


### List Bank Accounts

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\BankAccount::retrieve();
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught invalid request exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfbankaccount
from xfers import error

xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()

try:
    print 'Listing all bank_accounts...'
    bank_accounts = xfbankaccount.list_all()
    for bank_account in bank_accounts:
        print 'Bank account: {}'.format(bank_account)
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Listing all bank accounts...'
  bank_accounts = Xfers::BankAccount.list_all
  puts "number of bank accounts => #{bank_accounts.length}"
  bank_accounts.each { |account| puts "Bank Account=> #{account}" }
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    List<BankAccount> bankAccounts = BankAccount.retrieve();
    for (BankAccount bankAccount : bankAccounts) {
        System.out.println(bankAccount.toString());
    }
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
[
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
```

This will list all bank accounts belonging to the user.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user/bank_account`


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
type (Coming soon) | string | optional | type of bank account | Either "funding_source” or “withdrawal” or “all”. Defaults to “all”


### Update a Bank Account

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"account_no": "03931234321", "bank":"DBS"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\BankAccount::update('<bank_account_id>', array(
        'account_no' => '03931234321',
        'bank' => 'DBS'
    ));
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught invalid request exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfbankaccount
from xfers import error

xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()

try:
    print 'Updating bank account {}...'.format('<bank_account_id>')
    params = {
        'account_no': '03931234321',
        'bank': 'DBS'
    }
    resp = xfbankaccount.update('<bank_account_id>', params)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  params = {
      'account_no'=> '03931234321',
      'bank'=> 'DBS'
  }
  puts 'Updating bank account...'
  resp = Xfers::BankAccount.update '<bank_account_id>', params
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("account_no", "03931234321");
    params.put("bank", "DBS");

    List<BankAccount> bankAccounts = BankAccount.update("<bank_account_id>", params);
    for (BankAccount bankAccount : bankAccounts) {
        System.out.println(bankAccount.toString());
    }
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
[
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
```

This request allow you to update an existing bank account record. 

#### HTTPS Request

`PUT https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>`

#### Response

List of all bank accounts belonging to user.


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
account_no | string | optional | bank account no | 03931234323
bank | string | optional | bank abbreviation (Refer to [available banks](?shell/#available-banks)) | DBS


### Delete Bank Account

```shell
curl -X DELETE "https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\BankAccount::delete('<bank_account_id>');
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught invalid request exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfbankaccount
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Deleting bank account {}...'.format('<bank_account_id>')
    resp = xfbankaccount.delete('<bank_account_id>')
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Deleting bank account...'
  resp = Xfers::BankAccount.delete '<bank_account_id>'
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    List<BankAccount> bankAccounts = BankAccount.delete("<bank_account_id>");
    for (BankAccount bankAccount : bankAccounts) {
        System.out.println(bankAccount.toString());
    }
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
[
    {
       "id" : "12312",
       "account_no" : "039-312-3432-1",
       "bank_abbrev" : "DBS"
    }
]
```

This request allow you to delete an existing bank account record. 

#### HTTPS Request

`DELETE https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>`

#### Response

List of all bank accounts belonging to user.


### Submit Withdrawal Request

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>/withdraw" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"amount": "50.0"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\BankAccount::withdraw('<bank_account_id>', array(
        'amount' => '50.0'
    ));
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught invalid request exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfbankaccount
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Withdrawing from bank account {}...'.format('<bank_account_id>')
    params = {
        'amount': '50.0'
    }
    resp = xfbankaccount.withdraw('<bank_account_id>', params)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Withdrawing from bank account...'
  params = {
      'amount'=> '50.0'
  }
  resp = Xfers::BankAccount.withdraw '<bank_account_id>', params
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("amount", "50.0");
    params.put("express", false);

    Withdrawal withdrawal = BankAccount.withdraw("<bank_account_id>", params);
    System.out.println(withdrawal.getId());
    System.out.println(withdrawal.getAccountNo());
    System.out.println(withdrawal.getBankAbbrev());
    System.out.println(withdrawal.getAmount());
    System.out.println(withdrawal.getFees());
    System.out.println(withdrawal.getExpress());
    System.out.println(withdrawal.getStatus());
    System.out.println(withdrawal.getArrival());
    System.out.println(withdrawal.toString());
} catch (Exception e) {
    e.printStackTrace();
}
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
       "fees" : "0.0",
       "express" : "false",
       "status" : "pending",
       "arrival" : "31 March 2016"
    }
}
```

This will make a withdrawal request to the bank account given, provided that your account have sufficient available balance.

For same day withdrawal(additional fees applies), set 'express' field to true. Funds will arrive at recipient bank within 24 hrs.

Standard withdrawal takes 2-3 business day to arrive at recipient bank.

#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>/withdraw`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | string | required | Amount to withdraw in SGD | 50.0
express | string | optional | Default to 'false' | 50.0

### List Withdrawal Request

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account/withdraw_requests" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\BankAccount::withdrawalRequests(array(
        'filter' => 'pending'
    ));
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught invalid request exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfbankaccount
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Listing withdrawal requests...'
    params = {
        'filter': 'pending'
    }
    withdrawal_requests = xfbankaccount.withdrawal_requests(params)
    for request in withdrawal_requests:
        print 'Withdrawal request: {}'.format(request)
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Listing withdrawal requests...'
  params = {
      'filter'=> 'pending'
  }
  withdrawal_requests = Xfers::BankAccount.withdrawal_requests params
  withdrawal_requests.each { |req| puts "Withdrawal request=> #{req}" }
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    List<Withdrawal> withdrawalRequests = BankAccount.withdrawalRequests("pending");
    for (Withdrawal withdrawal : withdrawalRequests) {
        System.out.println(withdrawal.toString());
    }
} catch (Exception e) {
    e.printStackTrace();
}
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
       "fees" : "0.0",
       "express" : "false",
       "status" : "pending",
       "arrival" : "31 March 2016"
    },
    {
       "id" : "99",
       "account_no" : "129-880-1251-1",
       "bank_abbrev" : "OCBC",
       "amount" : "250.0",       
       "fees" : "2.99",
       "express" : "true",
       "status" : "pending",
       "arrival" : "28 March 2016"
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
filter | string | optional | filter by [withdrawal status](/#withdrawal-status) | Default to no filter


##### Withdrawal Status

Name | Description
---- | ------------
unverified | Withdrawal request is awaiting confirmations
pending | Withdrawal request is being process now.
paid | Withdrawal request has been processed and completed.
cancelled | Withdrawal request has been cancelled.

## Prepaid Cards

The follow APIs allow you to withdraw money into a prepaid card.

### Providers

wirecard_test_2


### Add a Prepaid Card

```shell
curl "https://sandbox.xfers.io/api/v3/prepaid" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
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
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
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
   "customer":"+6597288607",
   "order_id":"XFER170113160234758",
   "refundable":false,
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
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" 
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
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
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


## Charges

The following APIs allow anyone to pay you via an internet banking transfer or credit card.

The user pays by going to the `checkout_url` returned (assuming `redirect` is set to `false`). When `redirect` is true, instead of the JSON response, Xfers will automatically redirect the request to our checkout page.

Our checkout page contains the relevant instructions for the user to login/signup and guides them to make payment. If the user already has an Xfers account with enough balance, we deduct directly from that account.


### Creating a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{ "amount": "9.99", "currency": "SGD", "redirect": "false", "notify_url": "https://mysite.com/payment_notification", "return_url": "https://mysite.com/return", "cancel_url": "https://mysite.com/cancel", "order_id": "AZ9912", "description":"unused red dress", "shipping": "2.50", "tax": "0.0", "items" : [{"description":"Red dress Size M","price":9.99,"quantity":1,"name":"Red dress"}], "meta_data": {"firstname":"Tianwei", "lastname":"Liu"}}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('Vsya_qc5KjiUGK3xyKRgmhb2Atir2wAyizqssRuYJYw');
\Xfers\Xfers::setSGSandbox();
try {
    $items = array();
    $item =  array(
      'description' => 'Red dress Size M',
      'price' => '9.99',
      'quantity' => '1',
      'name' => 'Red dress'
    );
    array_push($items, $item);

    $meta_data = array(
      'firstname' => 'Tianwei',
      'lastname' => 'Liu'
      );
    $resp = \Xfers\Charge::create(array(
        'amount' => '9.99',
        'currency' => 'SGD',
        'notify_url' => 'https://mysite.com/payment_notification',
        'return_url' => 'https://mysite.com/return',
        'cancel_url' => 'https://mysite.com/cancel',
        'order_id' => 'AZ9912',
        'description' => 'unused red dress',
        'shipping' => '2.50',
        'redirect' => 'false',
        'tax' => '0.0',
        'items' => json_encode($items),
        'meta_data' => $meta_data
    ));
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import json
import xfers
from xfers import xfcharge
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Creating charge...'
    items = [{'description': 'Red dress size M', 'price': '9.99', 'quantity': '1', 'name': 'Red dress'}]
    meta_data = {'firstname': 'Tianwei', 'lastname': 'Liu'}
    params = {
        'amount' : '9.99',
        'currency' : 'SGD',
        'notify_url' : 'https://mysite.com/payment_notification',
        'return_url' : 'https://mysite.com/return',
        'cancel_url' : 'https://mysite.com/cancel',
        'order_id' : 'AZ9912',
        'description' : 'unused red dress',
        'shipping' : '2.50',
        'redirect': False,
        'tax' : '0.0',
        'items' : json.dumps(items),
        'meta_data' : json.dumps(meta_data)
    }
    resp = xfcharge.create(params)
    charge_id = resp['id']
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Creating charge...'
  params = {
        'amount' => '9.99',
        'currency' => 'SGD',
        'notify_url' => 'https://mysite.com/payment_notification',
        'return_url' => 'https://mysite.com/return',
        'cancel_url' => 'https://mysite.com/cancel',
        'order_id' => 'AZ9912',
        'description' => 'unused red dress',
        'shipping' => '2.50',
        'tax' => '0.0',
        'redirect' => false,
        'items' => [{'description' => 'Red dress Size M', 'price' => '9.99', 'quantity' => 1, 'name' => 'Red dress'}],
        'meta_data' => {'firstname'=> 'Tianwei', 'lastname'=> 'Liu'}
  }
  resp = Xfers::Charge.create params
  charge_id = resp[:id]
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
try {
    System.out.println("Creating a charge");
    Vector<Map<String, String>> items = new Vector<Map<String, String>>();
    Map<String, String> item = new HashMap<String, String>();
    item.put("description", "Red dress Size M");
    item.put("price", "9.99");
    item.put("quantity", "1");
    item.put("name", "Red dress");
    items.add(item);

    Map<String, String> meta_data = new HashMap<String, String>();
    meta_data.put("firstname", "Tianwei");
    meta_data.put("lastname", "Liu");

    Map<String, Object> params = new HashMap<String, Object>();
    Gson gson = new Gson();

    params.put("amount", "9.99");
    params.put("currency", "SGD");
    params.put("notify_url", "https://mysite.com/payment_notification");
    params.put("return_url", "https://mysite.com/return");
    params.put("cancel_url", "https://mysite.com/cancel");
    params.put("order_id", "AZ9912");
    params.put("description", "unused red dress");
    params.put("redirect", false);
    params.put("shipping", "2.50");
    params.put("tax", "0.0");
    params.put("items", gson.toJson(items));
    params.put("meta_data", gson.toJson(meta_data));

    Charge charge = Charge.create(params);
    System.out.println(charge.getId());
    System.out.println(charge.getAmount());
    System.out.println(charge.getCheckoutUrl());
    System.out.println(charge.getOrderId());
    System.out.println(charge.getStatus());
    System.out.println(charge.toString());

} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "object" : "charge",
  "amount" : 9.99,
  "bank_unique_amt": 9.99
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
  "fees" : 0.12,
  "status" : "pending",
  "meta_data" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
  },
  "transfer_info": {
    "bank_name_full": "Oversea-Chinese Banking Corporation Limited",
    "bank_name_abbreviation": "OCBC",
    "bank_account_no": "646004424001",
    "bank_code": "7339",
    "branch_code": "646",
    "branch_area": "Jurong East",
    "unique_id": "89898989",
    "outstanding_amount": {
      "total": 9.99,
      "total_txn": 9.99,
      "bank_unique_amt": 9.99,
      "bank_discount": 0.0
    }
  },
  "transfer_info_array": [
    {
      "bank_name_full" : "Bank Central Asia",
      "bank_name_abbreviation" : "BCA",
      "bank_account_no" : "1063003003",
      "bank_code" : "",
      "branch_code" : "",
      "branch_area" : "",
      "unique_id" : "97288607",
      "img_src": "https://xfers.com/bank-logo-bca.png"
    }, 
    {
      "bank_name_full" : "Bank Mandiri",
      "bank_name_abbreviation" : "MANDIRI",
      "bank_account_no" : "1190006792749",
      "bank_code" : "",
      "branch_code" : "",
      "branch_area" : "",
      "unique_id" : "97288607",
      "img_src": "https://xfers.com/bank-logo-mandiri.png"    
    },
    {
      "bank_name_full" : "Bank Negara Indonesia",
      "bank_name_abbreviation" : "BNI",
      "bank_account_no" : "8000067885",
      "bank_code" : "",
      "branch_code" : "",
      "branch_area" : "",
      "unique_id" : "97288607",
      "img_src": "https://xfers.com/bank-logo-bni.png"    
    }    
  ]
}
```


The following request will allow you to create a charge against a customer.     

`POST https://sandbox.xfers.io/api/v3/charges`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | float | required | Total value for items, excluding taxes and shipping fees | 9.99
currency | string | required | 3-letter ISO code for currency | SGD
order_id | string | required | Unique ref no provided by you to prevent double charging, this cannot be repeated | A012312
description | string | required | Description of transaction for display purposes | Carousell user - Konsolidate
customer | string | optional | Customer email or phone number. If provided, only that user can use the checkout_url returned. If the customer does not exist, an account will be created for them using the email/phone number provided. An OTP will be sent to the email/phone for the user to log in | johnny@xfers.com or +6597288608
notify_url | string | optional | URL to receive callback notifications on charge success/failure/expiration | https://mysite.com/payment_notification
return_url | string | optional | URL Xfers will redirect customer to on completion of Xfers checkout | https://mysite.com/return
cancel_url | string | optional | URL Xfers will redirect customer to on cancellation of Xfers checkout | https://mysite.com/cancel
user_api_token | string | optional | Buyer's api token obtain via Connect's get user token APIs. When this is provide, this charge will skip user auth. | NbKjcFV5XxGZ-Uf2XnxyshFcrGtoxmLms9YEgokzDRo
user_phone_no | string | optional | When this is provided, buyer will receive an OTP(one time password) from Xfers which they can provide to merchant to skip user authentication. See [Authorize a Charge](/#authorize-a-charge). | 85228000
debit_only | boolean | optional | When this is true, this charge will attempt to debit from users existing balance/card on file. Status returned will be "completed" on successful debit or "cancelled" when there insufficient funds / valid card on file in user wallet. | Default to false
card_only | boolean | optional | When this is true, this charge will will attempt to only take payments via credit/debit card. | Default to false
absorb_card_fees | boolean | optional | When this is true, seller will not pass on the additional fees involved in card processing back on to buyer(as convenience fees) | Default to false
enquiry_only | boolean | optional | When this is true, this charge will not be processed but a standard response will be provided. This is usually used for testing purposes or for pre-fetching charge information like fees. | Default to false
redirect | string | optional | When this is true, instead of the JSON response, Xfers will automatically redirect the request to our checkout page| Default to true.
items | string | optional | A JSON array of item with attributes 'description, name, price, quantity'. [See more info](/#item-hash). | "[{"description":"Red dress Size M","price":9.99,"quantity":1,"name":"Red dress"}]"
shipping | float | optional | Shipping fees | Default to 0.0
tax | float | optional | tax in $  | Default to 0.0
hrs_to_expirations | float | optional | No of hours before this transactons will expire  | Default to 48.0 hours from now.
meta_data | string | optional | A set of key/value pairs that you can attach to a charge. It can be useful for storing additional information about the customer in a structured format. You will be provided with these meta_data in your callback notification | {"firstname":"tianwei", "lastname":"liu"}
receipt_email | string | optional | The email address to send this charge's receipt. | tianwei@xfers.io
skip_notifications | boolean | optional | Setting this to true will not send transaction reminders/cancelled/expired emails/SMS. Users will still receive payment completed notification. | Default to false.

#### Create Charge Response

If a customer is given, ( through `user_api_token` or `customer` or `user_phone_no`) and the user has insufficient xfers wallet balance, the response will return the `transfer_info` object containing information about the bank the user should transfer to. If multiple banks are available, the `transfer_info_array` will also be returned.

Xfers might use a `bank_unique_amt` to help in identifying the bank transfer in case the user forgets to enter his contact number in the comments section. This is a random amount with very small difference from actual amount(a few cents) which Xfers will absorb. However this is only to be used as a backup; the user should always enter his contact number.

The table below explains some of these attributes:

key | meaning
---- | ------ |
bank_unique_amt | This is the amount user should use to transfer to the bank.
unique_id | The contact number of the user. This should be entered in the comments section of your bank when doing a bank transfer.
total_txn | Total value of your payable transactions.
total | total_txn - available Xfers balance of user.
bank_discount | total - bank_unique_amt


#### item hash
You can provide itemized receipt for your customer by giving use informations with regards to each of them in the `items` field as a json array of hash. 

The below is the list of attribute supported in the hash.

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
description | string | required | Total value for items | Red dress Size M
name | string | required | Total value for items | Red dress
price | float | required | Total value for items | 9.99
quantity | float | required | Total value for items | 1.0
item_id | string | optional | Total value for items | AXA0012

<aside class="warning">
The subtotal of all the item MUST be equal to the `amount` field you provided or Xfers will reject your charge.
</aside>

#### meta data

You can use the `meta_data` parameter to attach json data. This is useful for storing additional structured information about the charge. As an example, you could store your user's first name, last name or any corresponding unique identifier from your system a Xfers charge. 

The description and meta_data you specify is returned in API responses.

When a charge get cancelled, additional information might be provided in the meta_data field with key 'error_code' and 'error_message'.

key | value | meaning
---- | ---- | ------ |
error_code | 'KYC_ERROR' | User has some issues with their Xfers' account validation.
error_code | 'KYC_MULTI' | Transfers from multiple bank account detected, user needs to contact Xfers for account validation.
error_code | 'KYC_LIMIT' | User has reached the daily limit for their purchases.
error_code | 'KYC_UNAVAILABLE' | Xfers has yet to receive KYC information for this user.
error_code | 'INSUFFICIENT_FUND' | This is returned when a charge via user_api_token was unable to be process due to insufficient account balance.
error_code | 'INVALID_CARD' | This is returned when a charge via user_api_token was unable to be process due to a the lack of a valid card on file.

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
txn_id | string | Xfers's transaction id unique to each transaction| b840cc9fc5a359c22ed2ccef3427aacd
order_id | string | Unique ref no provided by your during your charge call | A012312
total_amount | float | 12.49 | Total value for items
currency | string | 3-letter ISO code for currency | SGD
status | string | Payment status. | "cancelled" or "paid" or "expired"
meta_data | string | meta data previous provided in your charge call. | "{'first_name' : 'Tianwei', 'last_name' : 'Liu'}"

### Verification of Notifications

```shell
curl "https://sandbox.xfers.io/api/v3/charges/<txn_id>/validate" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"total_amount": "24.99", "currency": "SGD", "order_id": "A012312", "status": "paid"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Charge::validate("<txn_id>", array(
        'order_id' => 'A012312',
        'total_amount' => '24.99',
        'status' => 'paid',
        'currency' => 'SGD'
    ));
    print_r($resp);
} catch (\Xfers\Error\Api $e) {
    echo 'Caught Api exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfcharge
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    params = {
        'order_id': 'A012312',
        'total_amount': '24.99',
        'status': 'paid',
        'currency': 'SGD'
    }
    print 'Validating charge {}...'.format(charge_id)
    resp = xfcharge.validate(charge_id, params)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  params = {
      'currency'=> 'SGD',
      'order_id'=> 'A012312',
      'total_amount'=> '24.99',
      'status'=> 'paid'
  }
  puts "Validating charge... #{charge_id}"
  resp = Xfers::Charge.validate charge_id, params
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    System.out.println("Validating a charge");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("total_amount", "19.99");
    params.put("currency", "SGD");
    params.put("order_id", "A012312");
    params.put("status", "paid");
    String message = Charge.validate("<txn_id>", params);
    System.out.println(message);
} catch (Exception e) {
    e.printStackTrace();
}
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


### Authorize a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>/authorize" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"auth_code": "512312"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('Vsya_qc5KjiUGK3xyKRgmhb2Atir2wAyizqssRuYJYw');
\Xfers\Xfers::setSGSandbox();

try {
    // You must create the charge with user_phone_no param passed in 
    $chargeId = '782f2a6e1b5642edb10c8b6b215c4814';
    $authCode = '213779';
    $resp = \Xfers\Charge::authorize($chargeId, $authCode);
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfcharge
from xfers import error

xfers.api_key = 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
xfers.set_sg_sandbox()

try:
    charge_id = '0e140a1c251e48939d49651b57394737'
    auth_code = '123049'
    print 'Authorizing charge...'
    resp = xfcharge.authorize(charge_id, auth_code)
    print resp
except error.XfersError as e:
    print str(e)

```

```ruby
require 'xfers'

Xfers.set_api_key 'WuTp3zM7UEpmUkeAyGPxRHmnXAx-hXJ7jzdqmxY6S1o'
Xfers.set_sg_sandbox

begin
  charge_id = 'your-charge-id'
  auth_code = '012414'
  puts "Authorizing charge... #{charge_id}"
  resp = Xfers::Charge.authorize charge_id, auth_code
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    System.out.println("Authorize a charge");
    String chargeId = "236d026fb4a5457ca9f60d3b1e806bbc";
    String authCode = "482729";
    Charge charge = Charge.authorize(chargeId, authCode);
    System.out.println(charge.toString());
} catch (Exception e) {
    e.printStackTrace();
}

```

> Response:

```json
{
  "id": "b840cc9fc5a359c22ed2ccef3427aacd",
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
  "refundable" : true,
  "shipment_date" : "2015-07-02T06:26:51Z",
  "settlement_date" : "2015-07-05T06:26:51Z",
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
  "status" : "accepted",
  "meta_data" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
  }
}
```

Authorize a previously created charge. This is an optional process that will allow buyer to skip the sign in flow on Xfers, allowing checkout to be completed on merchant site. If a correct auth_code is provided, the charge will immediately become "accepted" by the buyer.

This endpoint is only used if `user_phone_no` param was passed in during charge creation.

#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/charges/<id>/authorize`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | -------- | -----------
auth_code | string | Required | PIN code provided to the buyer | 512312


### Cancel a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges/<CHARGE_ID>/cancel" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
  -X POST
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Charge::cancel("<CHARGE_ID>");
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
    print 'Cancelling charge {}...'.format('<CHARGE_ID>')
    resp = xfcharge.cancel('<CHARGE_ID>')
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  charge_id = '<CHARGE_ID>'
  puts "Cancelling charge... #{charge_id}"
  resp = Xfers::Charge.cancel charge_id
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Cancelling a charge");
    Charge charge = Charge.cancel("<CHARGE_ID>");
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
  "status" : "cancelled",
  "meta_data" : {
    "key1":"value1",
    "key2": "value2"
  }
}
```

Cancelling a charge that has been previously created by not yet paid. To refund a paid charge, refer to [creating a refund](/#creating-a-refund).


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/charges/<CHARGE_ID>/cancel`


### Retrieve a Charge

```shell
curl "https://sandbox.xfers.io/api/v3/charges/<id>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Charge::retrieve("<id>");
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
    print 'Retrieving charge {}...'.format('<id>')
    resp = xfcharge.retrieve('<id>')
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
  puts "Retrieving charge... #{charge_id}"
  resp = Xfers::Charge.retrieve charge_id
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
 try {
    System.out.println("Retrieving a charge");
    Charge charge = Charge.retrieve("<id>");
    System.out.println(charge.toString());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "id": "730eba1ec6d34f64dc68a0081c5006dc",
  "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
  "notify_url" : "https://mysite.com/payment_notification",
  "return_url" : "https://mysite.com/return",
  "cancel_url" : "https://mysite.com/cancel",
  "object" : "charge",
  "amount" : 9.99,
  "bank_unique_amt": 9.99,
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
  "status" : "completed",
  "meta_data" : {
    "firstname":"Tianwei",
    "lastname": "Liu"
  }
}
```

Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request or provide the ORDER_ID that you previous provided in your create charge call, and Xfers will return the corresponding charge information. The same information is returned when creating or refunding the charge.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/charges/<CHARGE_ID or ORDER_ID>`



### List all Charges

```shell
curl "https://sandbox.xfers.io/api/v3/charges?limit=1" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\Charge::listAll(array(
    'customer' => '97288608',
    'limit' => '1'
));
```

```python
import xfers
from xfers import xfcharge
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Listing all charges...'
    params = {
        'limit': '1'
    }
    charges = xfcharge.list_all(params)
    for charge in charges:
        print 'Charge: {}'.format(charge)
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Listing all charges...'
  params = {
      'limit'=> '5'
  }
  charges = Xfers::Charge.list_all params
  charges.each { |charge|
    puts charge
  }
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Listing charges without filter");
    List<Charge> charges = Charge.listAll();
    for (Charge charge : charges) {
        System.out.println(charge.toString());
        List<Item> items = charge.getItems();
        for (Item item : items) {
            System.out.println(item.toString());
        }
    }

    System.out.println("Listing charges with filter");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("limit", "1");

    charges = Charge.listAll(params);
    for (Charge charge : charges) {
        System.out.println(charge.toString());
    }

} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
[
  {
    "id": "730eba1ec6d34f64dc68a0081c5006dc",
    "checkout_url" : "https://sandbox.xfers.io/checkout_transaction/b840cc9fc5a359c22ed2ccef3427aacd",
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
    "status" : "completed",
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
status (Coming soon) | string | optional | status of the charge to return | pending
ending_before | string | optional | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. | 7364dc68a000eba1ec6d34f81c5006dc
limit | integer | optional | A limit on the number of objects to be returned. Limit can range between 1 and 50 items. | Default to 10
starting_after | string | optional | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. | 7ba1ec6d34f64dc68a030e081c5006dc


## Cards

The following APIs allow you to add or update credit cards to a connected user (which means you have to go through our [Xfers Connect flow](/#xfers-connect) to get their `user_api_token`). You are also able to charge a credit card without creating an Xfers account for your user (see [Charge Guest Card](#charge-guest-card)) or to charge the default card belonging to a user (see [Charge Existing Card](#charge-existing-card)).


### Add a Card

```shell
curl "https://sandbox.xfers.io/api/v3/cards" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
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

Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
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

Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
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
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
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
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
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
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
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

Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
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
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
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
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
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


## Payouts

Xfers Payout allows you transfer money between Xfers Wallets with your Xfers balance via their phone no or email address. A SGD$1.00 fee will be charged to your account on every successful payout. You need to have sufficient available balance in your account to cover the amount + fees required for the payout.

### Creating a Payout

```shell
curl "https://sandbox.xfers.io/api/v3/payouts" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"amount": "150.00", "invoice_id": "AZ0001", "descriptions": "Payment for Rent for July", "recipient": "+6597288608"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Payout::create(array(
        'amount' => '150.00',
        'invoice_id' => 'AZ0001',
        'descriptions' => 'Payment for Rent for July',
        'recipient' => '+6597288608'
    ));
    print_r($resp);
    echo $resp["id"] . "\n";
    echo $resp["recipient"] . "\n";
    echo $resp["invoice_id"] . "\n";
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught invalid request exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfpayout
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Creating payout...'
    params = {
        'amount': '150.00',
        'invoice_id': 'AZ0001',
        'descriptions': 'Payment for Rent for July',
        'recipient': '+6597288608'
    }
    resp = xfpayout.create(params)
    payout_id = resp['id']
    print payout_id
    print resp['recipient']
    print resp['invoice_id']
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Creating payout...'
  params = {
      'amount' => '150.00',
      'invoice_id' => 'AZ0001',
      'descriptions' => 'Payment for Rent for July',
      'recipient' => '+6597288608'
  }
  resp = Xfers::Payout.create params
  payout_id = resp[:id]
  puts resp[:recipient]
  puts resp[:invoice_id]
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Creating a payout");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("amount", "150.00");
    params.put("invoice_id", "AZ0001");
    params.put("recipient", "+6597288608");
    params.put("descriptions", "Payment for Rent for July");

    Payout payout = Payout.create(params);
    payoutId = payout.getId();
    System.out.println(payout.getId());
    System.out.println(payout.getRecipient());
    System.out.println(payout.getAmount());
    System.out.println(payout.getCurrency());
    System.out.println(payout.getDescriptions());
    System.out.println(payout.getBank());
    System.out.println(payout.getBankAccountNo());
    System.out.println(payout.getCreatedDate());
    System.out.println(payout.getCompletedDate());
    System.out.println(payout.getStatus());
} catch (Exception e) {
    e.printStackTrace();
}
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

The following request will allow you to make a payout to the recipient.

If the user does not have an xfers account, they will be given a link via SMS/email with the relevant instructions. However, if a user has an account with Xfers, we will credit the amount into the user's Xfers account immediately.

Note: If the recipient did not accept the payout within 14 days, the payout will be cancelled and its funds will be returned back to your Xfers balances.

`POST https://sandbox.xfers.io/api/v3/payouts`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | float | required | Total value for items. | 150.00
invoice_id | string | required | Unique ref no provided by merchant. This will need to be unique or the payout request will be considered a duplicate and ignored. | AZ0001
recipient | string | optional (either recipient or user_api_token required) | Email or Mobile Phone No of the recipient for this payout. | +659728860
user_api_token | string | optional (either recipient or user_api_token required) | user’s api token obtain via Connect’s get user token APIs. When this is provided, it will replace the recipient param as the payout target | 
currency | string | optional | 3-letter ISO code for currency | Default to 'SGD'
descriptions | string | optional | A short description for this payout. This will be part of the email/SMS that the recipient will be receiving from Xfers. | Payment for Rent for July
no_expire | boolean | optional | Set this to true so this payout will not expire | Default to false

##### Payout Response Status

The below are the possible response status and their meaning.

Name | Description
---- | ------------
unclaimed | Payout has not been accepted by recipient. New Xfers user and payout has yet to be claimed.
completed  | Payout has been completed. Existing Xfers user and payout has been credited to his account.


### Retrieve a Payout

```shell
curl "https://sandbox.xfers.io/api/v3/payouts/<id>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Payout::retrieve("<id>");
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught invalid request exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfpayout
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Retrieving payout {}...'.format('<id>')
    resp = xfpayout.retrieve('<id>')
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Retrieving payout...'
  resp = Xfers::Payout.retrieve '<id>'
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
 try {
    System.out.println("Retrieving a payout");
    Payout payout = Payout.retrieve("<id>");
    System.out.println(payout.toString());
} catch (Exception e) {
    e.printStackTrace();
}
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

Retrieves the details of a payout that has previously been created. Supply the unique payout ID that was returned from your previous request, and Xfers will return the corresponding payout information. 


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

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\Payout::listAll(array(
    'limit' => '1'
));
print_r($resp);
```

```python
import xfers
from xfers import xfpayout
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Listing all payouts...'
    params = {
        'recipient': '+6597288608'
    }
    payouts = xfpayout.list_all(params)
    for payout in payouts:
        print 'Payout: {}'.format(payout)
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Listing all payouts...'
  params = {
      'recipient'=> '+6597288608'
  }
  payouts = Xfers::Payout.list_all params
  payouts.each { |payout|
    puts payout
  }
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    System.out.println("Listing payouts");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("recipient", "+6597288608");
    List<Payout> payouts = Payout.listAll(params);
    for (Payout payout : payouts) {
        System.out.println(payout.getId());
        System.out.println(payout.getInvoiceId());
        System.out.println(payout.getRecipient());
        System.out.println(payout.getAmount());
        System.out.println(payout.getCurrency());
        System.out.println(payout.getDescriptions());
        System.out.println(payout.getBank());
        System.out.println(payout.getBankAccountNo());
        System.out.println(payout.getCreatedDate());
        System.out.println(payout.getCompletedDate());
        System.out.println(payout.getStatus());
    }
} catch (Exception e) {
    e.printStackTrace();
}
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
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Refunding a charge");
    Charge charge = Charge.refund("<id>");
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

## Intents

When doing a top up via [GET /transfer_info](/#get-transfer-info), users might forget to enter their contact number which is needed for our system to identify them. 

The Intents API solves this issue by requiring the user to transfer a unique amount to Xfers which will be used to identify them. The difference between the `unique_amount` and the actual `amount` will be very small, and Xfers provides the difference for free to the user.

Note that this only acts as a backup, and the user should enter his contact number in the comments section when doing a bank transfer whenever possible.

Example:
Jane wishes to transfer 5000 Indonesian Rupiah via `/intents`.

1. She makes a HTTP GET request to `/user/transfer_info` to get the correct Xfers bank to transfer to (we have many banks!). The response tells her to transfer to Bank Central Asia (BCA).
2. She makes a HTTP POST request to create an intent. The response tells her to make a bank transfer of 4999 to Xfers. 
3. Jane makes a transfer of 4999 to Xfers BCA. Within a few minutes, Xfers detects the transfer and tops up Jane's Xfers account with 5000. Xfers absorbs the difference for free. 
4. If `notify_url` is given, Xfers will send a callback to this url.


### Creating an Intent

```shell
curl "https://sandbox.xfers.io/api/v3/intents" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
 -H "Content-Type: application/json" \
  -d '{ "amount": "5000", "currency": "SGD", "bank": "BCA", "intent_id" : "AZ0001", "notify_url" : "https://mysite.com/topup_notification"}'  
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Intent::create(array(
        'amount' => '5000',
        'currency' => 'SGD',
        'bank' => 'BCA',
        'intent_id' => 'AZ0001',
        'notify_url' => 'https://mysite.com/topup_notification'
    ));
    $intentId = $resp["id"];
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfintent
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Creating intent...'
    params = {
        'amount': '5000',
        'currency': 'SGD',
        'bank': 'BCA',
        'intent_id': 'AZ0001',
        'notify_url': 'https://mysite.com/topup_notification'
    }
    resp = xfintent.create(params)
    intent_id = resp['id']
    print intent_id
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Creating intent...'
  params = {
      'amount' => '5000',
      'currency' => 'SGD',
      'bank' => 'BCA',
      'intent_id' => 'AZ0001',
      'notify_url' => 'https://mysite.com/topup_notification'
  }
  resp = Xfers::Intent.create params
  intent_id = resp[:id]
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Creating an intent");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("amount", "5000");
    params.put("currency", "SGD");
    params.put("bank", "BCA");
    params.put("request_id", "AZ0001");
    params.put("notify_url", "https://mysite.com/topup_notification");

    Intent intent = Intent.create(params);
    System.out.println(intent.getId());
    System.out.println(intent.getAmount());
    System.out.println(intent.getCurrency());
    System.out.println(intent.getBank());
    System.out.println(intent.getStatus());
    System.out.println(intent.getCheckoutUrl());
    System.out.println(intent.getRequestId());
    System.out.println(intent.getNotifyUrl());
    System.out.println(intent.getBankName());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "id": "6f5f85859a51cd08c8ae113412bb72c8",
  "request_id" : "AZ0001",
  "amount" : "5000", 
  "currency" : "IDR",
  "unique_amount" : "4999",
  "bank_name" : "Bank Central Asia",
  "bank_abbrev" : "BCA",
  "account_name" : "Xveria Media Indonesia",
  "bank_account_no" : "0124121241",
  "notify_url" : "https://mysite.com/topup_notification",
  "expiration_date" : "2016-09-09T17:55:51Z",
  "status" : "pending"
}
```
The following request will allow you to create a intent for a transfer and register a callback notification once a transfer has be received or expired(all intents expires in 24 hours.)

User should be prompted to transfer `unique_amount` amount to the `bank_account_no` and `bank_name` provided.  Once the user deposits with `unique_amount`, the full amount will be credited to his account.

`POST https://sandbox.xfers.io/api/v3/intents`

<aside class="warning">
You cannot create more than 1 intents per user (previous old pending intents will automatically be cancelled).
</aside>


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | float | required | Amount that user intends to transfer | 5000
currency | string | required | 3-letter ISO code for currency(IDR/SGD)
request_id | string | required | Unique ref no provided by requester. This will need to be unique or the intent request will be considered a duplicate and ignored. | AZ0001
bank | string | optional | bank abbreviation (BCA or MBB). You can get the bank to transfer to via our Get Transfer Info API | BCA
notify_url | string | optional | URL to receive callback notifications when transfer is received	 | https://mysite.com/payment_notification

### Intent Notifications

After intent has been verified(transfer processed)/expired by Xfers, Xfers will send a callback to the `notify_url` you provided. This is a server to server HTTPS POST and you will need to acknowledge the callback by providing a HTTP 200 status.

`POST https://mysite.com/topup_notification`

The following parameters will be part of the HTTPS POST:

Name | Type | Description | Value
---- | ---- | -------- | -----------
intent_id | string | Xfers's id unique to each intent| 6f5f85859a51cd08c8ae113412bb72c8
request_id | string | Unique ref no provided by your during your intent call | A012312
amount | float | 3000 | Amount that user intented to transfer.
currency | string | required | 3-letter ISO code for currency(IDR/SGD)
status | string | Transfer status. | "expired" or "completed"


### Cancel a Intent

```shell
curl "https://sandbox.xfers.io/api/v3/intent/<INTENT_ID>/cancel" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
  -X POST
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\Intent::cancel('<INTENT_ID>');
    print_r($resp);
} catch (\Xfers\Error\InvalidRequest $e) {
    echo 'Caught InvalidRequest exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfintent
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Cancelling intent {}...'.format('<INTENT_ID>')
    resp = xfintent.cancel('<INTENT_ID>')
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Cancelling intent...'
  resp = Xfers::Intent.cancel '<INTENT_ID>'
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Cancelling an intent");
    Intent intent = Intent.cancel("<INTENT_ID>");
    System.out.println(intent.toString());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json
{
  "id": "6f5f85859a51cd08c8ae113412bb72c8",
  "request_id" : "AZ0001",
  "amount" : "5000", 
  "currency" : "IDR", 
  "amount_to_transfer" : "4999",
  "bank_name" : "Bank Central Asia",
  "bank_abbrev" : "BCA",
  "account_name" : "Xveria Media Indonesia",
  "bank_account_no" : "0124121241",
  "notify_url" : "https://mysite.com/topup_notification",
  "expiration_date" : "2016-09-09T17:55:51Z",
  "status" : "pending"
}
```
Cancelling a intent that has been previously created by not yet completed.


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/intent/<INTENT_ID>/cancel`

### List current Intent

```shell
curl "https://sandbox.xfers.io/api/v3/intents" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\Intent::retrieve();
print_r($resp);
```

```python
import xfers
from xfers import xfintent
from xfers import error
xfers.api_key = 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
xfers.set_sg_sandbox()
try:
    print 'Current intent...'
    intent = xfintent.retrieve()
    print 'Intent: {}'.format(intent)
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key 'G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo'
Xfers.set_sg_sandbox

begin
  puts 'Current intent...'
  intent = Xfers::Intent.retrieve
  puts intent
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Retrieving latest intent");
    Intent intent = Intent.retrieve();
    System.out.println(intent.getId());
    System.out.println(intent.getAmount());
    System.out.println(intent.getCurrency());
    System.out.println(intent.getBank());
    System.out.println(intent.getStatus());
    System.out.println(intent.getCheckoutUrl());
    System.out.println(intent.getRequestId());
    System.out.println(intent.getNotifyUrl());
    System.out.println(intent.getBankName());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response:

```json

{
  "id": "6f5f85859a51cd08c8ae113412bb72c8",
  "request_id" : "AZ0002",
  "amount" : "4000",
  "currency" : "IDR",
  "amount_to_transfer" : "3999",
  "bank_name" : "Bank Central Asia",
  "bank_abbrev" : "BCA",
  "account_name" : "Xveria Media Indonesia",
  "bank_account_no" : "0124121241",
  "notify_url" : "https://mysite.com/topup_notification",
  "expiration_date" : "2016-09-09T17:55:51Z",
  "status" : "pending",
  "transfer_info_array": [
    {
      "bank_name_full" : "Bank Central Asia",
      "bank_name_abbreviation" : "BCA",
      "bank_account_no" : "1063003003",
      "bank_code" : "",
      "branch_code" : "",
      "branch_area" : "",
      "unique_id" : "97288607",
      "img_src": "https://xfers.com/bank-logo-bca.png"
    }, 
    {
      "bank_name_full" : "Bank Mandiri",
      "bank_name_abbreviation" : "MANDIRI",
      "bank_account_no" : "1190006792749",
      "bank_code" : "",
      "branch_code" : "",
      "branch_area" : "",
      "unique_id" : "97288607",
      "img_src": "https://xfers.com/bank-logo-mandiri.png"    
    },
    {
      "bank_name_full" : "Bank Negara Indonesia",
      "bank_name_abbreviation" : "BNI",
      "bank_account_no" : "8000067885",
      "bank_code" : "",
      "branch_code" : "",
      "branch_area" : "",
      "unique_id" : "97288607",
      "img_src": "https://xfers.com/bank-logo-bni.png"    
    }    
  ]
}
```

Returns the current pending intent of the user. If multiple intents are created, only the last one is returned.

Coming soon: `transfer_info_array` is returned so you can display a list of all Xfers banks to transfer to.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/intents`


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

## Support (Coming Soon)

The following APIs allow you to integrate payment support functionality directly into your app.


### Creating a Support Ticket

```shell
curl "https://sandbox.xfers.io/api/v3/support" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
 -H "Content-Type: application/json" \
  -d '{ "file": "bank_transfer_receipt.jpg", "charge_id": "6f5f85859a51cd08c8ae113412bb72c8", "callback_url": "https://mysite.com/support-callback"}'  
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
  "support_id": "support_35331",
  "charge_id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "account_holder_name": "Tian Wei",
  "bank_abbrev": "BCA",
  "account_no": "0124121241",
  "status": "processing",
  "status_time": "2015-06-23T16:08:39.000+08:00"
}
```

Create a support ticket to be processed by Xfers Customer Support team.

`POST https://sandbox.xfers.io/api/v3/support`


#### Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
file | string | required | URL or file of the receipt image | bank_transfer_receipt.jpg
email | string | required | User's email so we can get back to them | bobby@gmail.com
charge_id | string | optional | ID of the charge | b840cc9fc5a359c22ed2ccef3427aacd
intent_id | string | optional | ID of the intent | b840cc9fc5a359c22ed2ccef3427aacd
description | string | optional | Any additional information | I submitted without contact number in the initial/comments section 
callback_url | string | optional | URL to receive callback notifications when support status is updated  | https://mysite.com/notification

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
  "support_id": "support_35331",
  "charge_id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "account_holder_name": "Tian Wei",
  "bank_abbrev": "BCA",
  "account_no": "0124121241",
  "status": "processing",
  "status_time": "2015-06-23T16:08:39.000+08:00"
}
```

> Resolved Response:

```json
{
  "support_id": "support_topup_35331",
  "charge_id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "account_holder_name": "Tian Wei",
  "bank_abbrev": "BCA",
  "account_no": "0124121241",
  "status": "resolved",
  "status_time": "2015-06-23T16:08:39.000+08:00",
  "amount": "132549", 
  "currency": "IDR",
  "msg": "The bank transfer of Rp 132549 has been detected and credited into tianwei@xfers.io's account"
}
```


> Attention Response:

```json
{
  "support_id": "support_topup_35331",
  "charge_id": "b840cc9fc5a359c22ed2ccef3427aacd",
  "account_holder_name": "Tian Wei",
  "bank_abbrev": "BCA",
  "account_no": "0124121241",
  "status": "attention",
  "status_time": "2015-06-23T16:08:39.000+08:00",
  "msg": "We are unable to find a matching bank transfer. Please contact support@xfers.io."
}
```

Returns a particular support ticket.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/support/<SUPPORT_ID>`


# Xfers Connect

Xfers Connect is a set of APIs to gain access to your customers' Xfers account, or to create "ghost" Xfers accounts on their behalf.


You might use Connect if you:

- Are building a platform that enables e-commerce like Shopify or tackthis. 

- Need to easily accept payments and pay out your service providers, like Grabtaxi with its drivers or yesHelper with its workers. (You can even create Xfers accounts for your users, so they only ever interact with your platform.)

- Want to integrate Xfers wallet directly into your mobile or e-commerce app.

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

Xfers Connect uses a pair of API Keys and API Secret to access its APIs.

Write in to us at support@xfers.io to request for your Xfers Connect API Keys.
You will provided with a pair of keys named `X-XFERS-APP-API-KEY` and `X-XFERS-APP-SECRET-KEY`.

Xfers Connect expects the API key to be included in all API requests to the server in a header that looks like the following:

`X-XFERS-APP-API-KEY: Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg`


These keys are different from the usual API keys which you include in the `X-XFERS-USER-API-KEY` header. App Connect API keys are only used for the Xfers Connect APIs. Thus instead of `X-XFERS-USER-API-KEY: YOUR-NORMAL-USER-API-KEY` , you pass in `X-XFERS-APP-API-KEY: THE-APP-API-KEY` as the header instead.



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

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setSGSandbox();
$xfers_app_api_key = 'Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg';
try {
    $resp = \Xfers\Connect::authorize(array(
        'phone_no' => '+6597288608',
        'signature' => 'c5535aa2c4d25aa1e18a6a7e421a34e51bda5565'
    ), $xfers_app_api_key);
    print_r($resp);
} catch (\Xfers\Error\Api $e) {
    echo 'Caught Api exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfconnect
from xfers import error

xfers.set_sg_sandbox()
XFERS_APP_API_KEY = 'Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg'

try:
    print 'Authorizing connect...'
    params = {
        'phone_no': '+6597288608',
        'signature': 'c5535aa2c4d25aa1e18a6a7e421a34e51bda5565'
    }
    resp = xfconnect.authorize(params, XFERS_APP_API_KEY)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_sg_sandbox
XFERS_APP_API_KEY = 'Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg'

begin
  puts 'Authorizing connect...'
  params = {
      'phone_no'=> '+6597288608',
      'signature'=> 'c5535aa2c4d25aa1e18a6a7e421a34e51bda5565'
  }
  resp = Xfers::Connect.authorize params, XFERS_APP_API_KEY
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
Xfers.setSGSandbox();
String xfersAppApiKey = "Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg";

try {
    System.out.println("Authorizing");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("phone_no", "+6597288608");
    params.put("signature", "a4f001729fe3accdbb0d9cfaf3b49b0678a4c91b");
    Response response = Connect.authorize(params, xfersAppApiKey);
    System.out.println(response.getMsg());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response

```json
  {
    "msg": "success"
  }
```

This API call will attempt to login(existing user) or signup a new user.

An SMS with a OTP will be send to that number which must be used for [get_token](/#get-user-api-token) api call.

### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/authorize/signup_login`


### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
phone_no | string | required | User mobile no | +6597288608
signature | string | required | SHA1 of phone_no + APP_SECRET_KEY  | Digest::SHA1.hexdigest("+6597288608xHsrB268LjLfrzxAraYXLHdRMpTA5XRVLDbe9gmVQTU") = c5535aa2c4d25aa1e18a6a7e421a34e51bda5565

## Get User API Token

```shell
curl "https://sandbox.xfers.io/api/v3/authorize/get_token?otp=541231&phone_no=%2B6597288608&signature=bdc26373b3a78dd11dc840a1b7973f197cf34c91" \
  -H "X-XFERS-APP-API-KEY: Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg"

# You can now change the X-XFERS-USER-API-KEY to the returned user_api_token 
# and make API calls on behalf of the connect user.
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setSGSandbox();
$xfers_app_api_key = 'Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg';
try {
    $resp = \Xfers\Connect::getToken(array(
        'otp' => '541231',
        'phone_no' => '+6597288608',
        'signature' => 'c5535aa2c4d25aa1e18a6a7e421a34e51bda5565',
        'return_url' => 'https://mywebsite.com/api/v3/account_registration/completed'
    ), $xfers_app_api_key);
    print_r($resp);

    # You can now call \Xfers\Xfers::setApiKey again to change the X-XFERS-USER-API-KEY to the returned user_api_token 
    # and make API calls on behalf of the connect user.
    $user_api_token = $resp['user_api_token'];
    \Xfers\Xfers::setApiKey($user_api_token);
    $resp = \Xfers\User::retrieve();

} catch (\Xfers\Error\Api $e) {
    echo 'Caught Api exception: ', $e->getMessage(), "\n";
}
```

```python
import xfers
from xfers import xfconnect
from xfers import xfuser
from xfers import error

xfers.set_sg_sandbox()
XFERS_APP_API_KEY = 'Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg'

try:
    print 'Getting token...'
    params = {
        'otp': '541231',
        'phone_no': '+6597288608',
        'signature': 'c5535aa2c4d25aa1e18a6a7e421a34e51bda5565',
        'return_url': 'https://mywebsite.com/api/v3/account_registration/completed'
    }
    resp = xfconnect.get_token(params, XFERS_APP_API_KEY)
    print resp

    # You can now set xfers.api_key again to change the X-XFERS-USER-API-KEY to the returned user_api_token 
    # and make API calls on behalf of the connect user.
    xfers.api_key = resp['user_api_token']
    connected_user = xfuser.retrieve()

except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_sg_sandbox
XFERS_APP_API_KEY = 'Kx4EAd1DnsZkv3qXwps8AJ8jXCPsxPMHTAFLM2sKSyg'

begin
  puts 'Getting connect token...'
  params = {
      'otp'=> '541231',
      'phone_no'=> '+6597288608',
      'signature'=> 'c5535aa2c4d25aa1e18a6a7e421a34e51bda5565',
      'return_url'=> 'https://mywebsite.com/api/v3/account_registration/completed'
  }
  resp = Xfers::Connect.get_token params, XFERS_APP_API_KEY
  user_api_token =  resp[:user_api_token]
  puts resp

  # You can now call Xfers.set_api_key again to change the X-XFERS-USER-API-KEY to the returned user_api_token 
  # and make API calls on behalf of the connect user.

  Xfers.set_api_key user_api_token

  connect_user = Xfers::User.retrieve
  puts connect_user[:first_name]
  puts connect_user[:last_name]
  puts connect_user[:available_balance]
  puts connect_user

rescue Xfers::XfersError => e
  puts e.to_s
end

```

```java
Xfers.setSGSandbox();
String xfersAppApiKey = "AeWpKz5cdPoJFUwF53sBee_WsSoqym_hspiX3bcoB_Y";

try {
    System.out.println("Getting token");
    Map<String, Object> params = new HashMap<String, Object>();
    params.put("otp", "541231");
    params.put("phone_no", "+6597288608");
    params.put("signature", "132e60cc2b6076824fac1ac4c1bb6b47cc3f9036");
    params.put("return_url", "https://mywebsite.com/api/v3/account_registration/completed");
    Response response = Connect.getToken(params, xfersAppApiKey);
    System.out.println(response.getMsg());
    System.out.println(response.getUserApiToken());
    System.out.println(response.getSignUpUrl());

    // You can now set Xfers.apiKey again to change the X-XFERS-USER-API-KEY to the returned user_api_token 
    // and make API calls on behalf of the connect user.

    Xfers.apiKey = response.getUserApiToken();
    System.out.println("Retrieving connected user");
    User user = User.retrieve();

} catch (Exception e) {
    e.printStackTrace();
}
```

> Response

```json
  {
    "msg": "success",
    "user_api_token": "1DnsZkv3qXwKx4EAdps8AJ8jXCPsxP2sKSygMHTAFLM",
    "sign_up_url" : "https://sandbox.xfers.io/api/v3/account_registration?phone_no=%2B6597288608&token=4014d3e9f0600f78dbfabd86036de7b008f70c52"
  }
```


This API call will return the user's `user_api_token`. You should save this token in database for reuse. There is no need to go through the connect flow again for this user.

It will also return a `sign_up_url` if and ONLY IF they do not already have an Xfers account. The url can be loaded to serve a page that allow user to complete their Xfers account registration (this is optional and is only needed if the user wants to login to their Xfers Dashboard).

If you choose to redirect new Xfers user to the unique sign_up_url to allow them to complete their Xfers account registrations, upon successfully account registration, Xfers will redirect user back to the `return_url` specified or the default at "\<Endpoint>/api/v3/account_registration/completed". The automated SMS from Xfers will not be sent if user complete their account registration this way within 15mins.

<aside class="warning">
Remember to encode the '+' sign in your phone no during your GET request. It should be '%2B' instead of '+'
</aside>


### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/authorize/get_token?otp=541231&phone_no=%2B6597288608&signature=bdc26373b3a78dd11dc840a1b7973f197cf34c91`

### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
otp | string | required | 6 digit one-time-password send over SMS | 541231
phone_no | string | required | User mobile no | +6597288608
signature | string | required | SHA1 of phone_no + OTP + APP_SECRET_KEY | Digest::SHA1.hexdigest("+659728860851231xHsrB268LjLfrzxAraYXLHdRMpTA5XRVLDbe9gmVQTU") = bdc26373b3a78dd11dc840a1b7973f197cf34c91
return_url | string | optional | Url that new user will be redirected after they completed Xfers account registration at `sign_up_url` provided. | Default "\<Endpoint>/api/v3/account_registration/completed"


<aside class="notice">
Note that the signature required here for /get_token  is different from the one for /signup_login. 
</aside>

`/authorize/signup_login` - SHA1 of phone_no + APP_SECRET_KEY

`/authorize/get_token` - SHA1 of phone_no + OTP + APP_SECRET_KEY


## What's Next

Now that you have gotten a `user_api_token` linked to your customer, you can 

- Pass this `user_api_token` as params when [creating a charge](/#creating-a-charge) to bypass authentication for your customer
- Pass this `user_api_token` as params when adding and charging credit cards cards 
- Pass this `user_api_token` as params when [creating a payout](/#creating-a-payout) in place of the recipient field
- Use the header `"X-XFERS-USER-API-KEY": "the user_api_token"` (instead of `"X-XFERS-USER-API-KEY": "your own token"`) to modify [user details] (/#user-account) and [bank accounts](/#bank-account) on behalf of your user


# Postman Collection (Coming soon!)

[Postman](https://www.getpostman.com) helps you to construct HTTP requests quickly, save them for later use and analyze the responses sent by the API.

We have created a Postman collection so you can easily test out our APIs. All you need is a [sandbox account](https://sandbox.xfers.io) to get started!


# Xfers Tokenize

> Tokenized credit card response

```json
{
  "first6": "424242",
  "last4": "4242",
  "credit_card_token": "tok_197O8gB8MXWbQJDjPMILsIr6"
}
```


Xfers Tokenize is a set of SDKs that allow you to collect credit card details without having the sensitive information touch your server. By doing this, you do not have to deal with [PCI compliance issues](https://www.pcisecuritystandards.org/index.php).

Credit card tokenization is the process of sending the credit card information to a PCI compliant party which will store the credit card details on your behalf and return a credit card token. This token can then be used to charge the credit card or to save the card with a user. 

There are two ways of doing this tokenization: 

1. After [creating a Charge](/#creating-a-charge), a `checkout_url` is returned. If `user_api_token` and `card_only` params are used, the `checkout_url` will lead directly to the credit card form. You can either redirect the user to that page, or embed it as a webview (usually for mobile apps). Thus you are in control of all aspects of the UI except for the credit card form. 
2. Use Xfers Tokenize to return a credit card token which you can use to complete a credit card charge, or to add the credit card to your user's account. Xfers Tokenize will make use of the form you created to collect credit card details, so the styling is entirely in your control.

As you can see, the two ways have a tradeoff between UI/UX customization and the amount of technical integration required on your end.  

There are two ways of using the tokenized credit card response.

1. Use [Charge Guest Card](/#charge-guest-card) to charge this credit card for guest user. This can be done on the client side and does not need API key authentication
2. Send the response to your server and [add the card](/#add-a-card) to your user


## Web

[Xfers.js](https://github.com/Xfers/xfers.js) is our client-side Javascript library for credit card tokenization.

## Android

Coming soon

## iOS

Coming soon



