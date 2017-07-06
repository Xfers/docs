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
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Retrieving current user");
    User user = User.retrieve(apiKey);
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
  "gender": "male",
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
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
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

    User user = User.update(updateParams,apiKey);
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
  "gender": "male",
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
gender | string | optional | Gender | male / female
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
proof_of_address_url | string | optional | URL storing the image/pdf of proof of address document of user like bank statement or telco bill.
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
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Retrieving current user activities");
    List<Activity> activities = User.activities(apiKey);
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
      "id": "e2738cc957034ecaab3252f4b23e1c6e",
      "type": "transaction",
      "display_time": "2015-06-22T06:21:31.000+08:00",
      "description": "Victor Liew",
      "plus_minus": "+",
      "display_status": "completed",
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
      "id": "6614",
      "type": "external",
      "trans_type": "deposit",
      "display_time": "2015-06-23T16:08:39.000+08:00",
      "description": "OCBC Transfer",
      "plus_minus": "+",
      "display_amount": "10.0",
      "transaction_items":
      [
      ],
      "display_status": "completed",
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
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    System.out.println("Retrieving current user transfer info");
    TransferInfo transferInfo = User.transferInfo(apiKey);
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

