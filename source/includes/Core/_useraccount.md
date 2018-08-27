## User Account

The account info API supports querying and making changes to a User's account.

### Get Account Info

```shell
curl "https://sandbox.xfers.io/api/v3/user" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\User::retrieve();
print_r($resp);
```


```python
import xfers
from xfers import xfuser
from xfers import error
xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
xfers.set_sg_sandbox()
try:
    print 'Retrieving user...'
    resp = xfuser.retrieve()
    print resp['available_balance']
    bank_accounts = resp['bank_accounts']
    for account in bank_accounts:
        print 'Bank account: {}'.format(account)
    print resp
except error.XfersError as e:
    print str(e)
```

```ruby
require 'xfers'

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
Xfers.set_sg_sandbox
begin
  puts 'Retrieving user...'
  resp = Xfers::User.retrieve
  puts resp[:available_balance]
  puts resp
rescue Xfers::XfersError => e
  puts e.to_s
end
```

```java
String apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
Xfers.setSGSandbox();
try {
    System.out.println("Retrieving current user");
    User user = User.retrieve(apiKey);
    for (BankAccount bankAccount : user.getBankAccounts()) {
        System.out.println(bankAccount.toString());
    }
    System.out.println(user.toString());
} catch (Exception e) {
    e.printStackTrace();
}
```

> Response (SG):

```json
{
   "available_balance":"37387.3",
   "ledger_balance":"37387.3",
   "bank_transfer_rates":"0.0",
   "bank_transfer_fees":"0.45",
   "phone_no":"+6591240987",
   "first_name":"Bobby",
   "last_name":"Keong",
   "date_of_birth":"1995-05-21",
   "gender":"",
   "email":"bobby@gmail.com",
   "country":"SG",
   "nationality":"Singaporean",
   "address_line_1":"PASIR RIS DRIVE 1",
   "address_line_2":"04-180",
   "postal_code":"510608",
   "identity_no":"S9539495J",
   "bank_accounts":[
    {
       "id": 399,
       "account_no": "9484853433",
       "account_holder_name": "John Tan",
       "verification_status": "pending",
       "bank_abbrev": "DBS",
       "usage": "all"
    }
   ],
   "annual_income":"",
   "id_front":"my_id_front.jpg",
   "id_back":"my_id_back.jpg",
   "selfie_2id":"nricSelfiePlaceholder.png",
   "proof_of_address":"my_proof_of_address.pdf",   
   "verification_documents":[],
   "multi_bank_account_detected":false,
   "account_locked":false,
   "google_auth_enabled":false, 
   "kyc_limit_remaining":120000.0,
   "kyc_verified":true,
   "meta_data":"",
   "wallet_name":"Xfers"
}
```

> Response (ID):

```json
{
   "available_balance":"37387.3",
   "ledger_balance":"37387.3",
   "bank_transfer_rates":"0.0",
   "bank_transfer_fees":"0.45",
   "phone_no":"+6591240987",
   "first_name":"Bobby",
   "last_name":"Keong",
   "date_of_birth":"1995-05-21",
   "gender":"",
   "email":"bobby@gmail.com",
   "country":"SG",
   "nationality":"Singaporean",
   "address_line_1":"TAMBUN UTARA",
   "address_line_2":"KABUPATEN BEKASI",
   "postal_code":"510608",
   "identity_no":"1212121200050006",
   "bank_accounts":[
    {
       "id": 399,
       "account_no": "9484853433",
       "account_holder_name": "Bobby Keong",
       "verification_status": "pending",
       "bank_abbrev": "BCA",
       "usage": "all"
    }
   ],
   "annual_income":"",
   "id_front":"my_id_front.jpg",
   "selfie_2id":"nricSelfiePlaceholder.png",
   "account_locked":false,
   "google_auth_enabled":false, 
   "kyc_verified":true,
   "meta_data":"",
   "place_of_birth":"Malang",
   "blood_type":"B",
   "rt_rw":"011/017",
   "administrative_village":"Penjaringan",
   "district":"Pluit",
   "religion":"Buddhism",
   "marital_status":"Married",
   "occupation":"007 | Konsultan"
}
```

This endpoint return information related to your account such as available balance, ledger balance,
name and bank account information.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user`

### Update Account Info

```shell
curl "https://sandbox.xfers.io/api/v3/user" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"first_name": "wenbin", "last_name": "tay", "address_line_1": "Blk 712 loyang Avenue 5", "address_line_2": "#01-41", "nationality": "Singaporean", "postal_code": "340712", "identity_no": "s86917127G", "country": "sg"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk');
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

xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
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

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
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
String apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
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

> Response (SG):

```json

{
   "available_balance":"37387.3",
   "ledger_balance":"37387.3",
   "bank_transfer_rates":"0.0",
   "bank_transfer_fees":"0.45",
   "phone_no":"+6591240987",
   "first_name":"Bobby",
   "last_name":"Keong",
   "date_of_birth":"1995-05-21",
   "gender":"",
   "email":"bobby@gmail.com",
   "country":"SG",
   "nationality":"Singaporean",
   "address_line_1":"PASIR RIS DRIVE 1",
   "address_line_2":"04-180",
   "postal_code":"510608",
   "identity_no":"S9539495J",   
   "bank_accounts":[
    {
       "id": 399,
       "account_no": "9484853433",
       "account_holder_name": "John Tan",
       "verification_status": "pending",
       "bank_abbrev": "DBS",
       "usage": "all"
    }
   ],
   "annual_income":"",
   "id_front":"my_id_front.jpg",
   "id_back":"my_id_back.jpg",
   "selfie_2id":"nricSelfiePlaceholder.png",
   "proof_of_address":"my_proof_of_address.pdf",   
   "verification_documents":[

   ],
   "multi_bank_account_detected":false,
   "account_locked":false,
   "kyc_limit_remaining":120000.0,
   "kyc_verified":true,
   "meta_data":"",
   "wallet_name":"Xfers"
}
```

> Response (ID):

```json
{
   "available_balance":"37387.3",
   "ledger_balance":"37387.3",
   "bank_transfer_rates":"0.0",
   "bank_transfer_fees":"0.45",
   "phone_no":"+6591240987",
   "first_name":"Bobby",
   "last_name":"Keong",
   "date_of_birth":"1995-05-21",
   "gender":"",
   "email":"bobby@gmail.com",
   "country":"SG",
   "nationality":"Singaporean",
   "address_line_1":"TAMBUN UTARA",
   "address_line_2":"KABUPATEN BEKASI",
   "postal_code":"510608",
   "identity_no":"1212121200050006",
   "bank_accounts":[
    {
       "id": 399,
       "account_no": "9484853433",
       "account_holder_name": "Bobby Keong",
       "verification_status": "pending",
       "bank_abbrev": "BCA",
       "usage": "all"
    }
   ],
   "annual_income":"",
   "id_front":"my_id_front.jpg",
   "selfie_2id":"nricSelfiePlaceholder.png",
   "account_locked":false,
   "kyc_verified":true,
   "meta_data":"",
   "place_of_birth":"Malang",
   "blood_type":"B",
   "rt_rw":"011/017",
   "administrative_village":"Penjaringan",
   "district":"Pluit",
   "religion":"Buddhism",
   "marital_status":"Married",
   "occupation":"007 | Konsultan"
}
```

> Callback Body:

``` json
{
   "available_balance":"37387.3",
   "ledger_balance":"37387.3",
   "bank_transfer_rates":"0.0",
   "bank_transfer_fees":"0.45",
   "phone_no":"+6591240987",
   "first_name":"Bobby",
   "last_name":"Keong",
   "date_of_birth":"1995-05-21",
   "gender":"",
   "email":"bobby@gmail.com",
   "country":"SG",
   "nationality":"Singaporean",
   "address_line_1":"TAMBUN UTARA",
   "address_line_2":"KABUPATEN BEKASI",
   "postal_code":"510608",
   "identity_no":"1212121200050006",
   "bank_accounts":[
    {
       "id": 399,
       "account_no": "9484853433",
       "account_holder_name": "Bobby Keong",
       "verification_status": "pending",
       "bank_abbrev": "BCA",
       "usage": "all"
    }
   ],
   "annual_income":"",
   "id_front":"my_id_front.jpg",
   "selfie_2id":"nricSelfiePlaceholder.png",
   "account_locked":false,
   "kyc_verified":true,
   "meta_data":"",
   "status":false,
   "reason":"The NRIC Photo is too blur"
}
```

This endpoint allows user to update their account information, this is especially important for account that would require KYC. Do note that some fields are not shown in the response even if you just updated them (like first_name) due to privacy concerns.


#### HTTPS Request

`PUT https://sandbox.xfers.io/api/v3/user`


#### URL Parameters

###### mother_maiden_name, id_front_url, selfie_2id_url is a required field in Indonesia

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
first_name | string | optional | Account holder firstname | Tianwei
last_name | string | optional | Account holder lastname | Liu
email | string | optional | User email | tianwei@xfers.io
date_of_birth | string | optional | Date of birth for account holder in yyyy-mm-dd | 1986-02-27
mother_maiden_name | string | ID: required, SG: optional | Name of Mother | Liu Weitian
gender | string | optional | Gender | male / female
address_line_1 | string | optional | Address line 1 | Blk 212 Jurong East St 50
address_line_2 | string | optional | Address line 2 | #08-41
nationality | string | optional | Account holder nationality | Singaporean
postal_code | string | optional | Address postal code | 640212
identity_no | string | optional | Account holder national identity no | s841212318g
country | string | optional | Account holder country of residence| Singapore
city | string | optional | Account holder city of residence| Singapore
annual_income | integer | optional | Annual income of user in the local currency (SGD/IDR) | 60000
id_front_url | string | ID: required, SG: optional | URL storing the front image of user identity card
id_back_url | string | optional | URL storing the back image of user identity card
selfie_2id_url | string | ID: required, SG: optional | URL storing the selfie of user holding their id card or a second form of id like driving license or passport
proof_of_address_url | string | optional | URL storing the image/pdf of proof of address document of user like bank statement or telco bill.
support_document_1_url | string | optional | URL storing the image/pdf of support documents like proof of user income
support_document_2_url | string | optional | URL storing the image/pdf of support documents like proof of user income
support_document_3_url | string | optional | URL storing the image/pdf of support documents like proof of user income
support_document_4_url | string | optional | URL storing the image/pdf of support documents like proof of user income
support_document_5_url | string | optional | URL storing the image/pdf of support documents like proof of user income
meta_data | string | optional | Additional data like Jumio info dump.
callback_url | string | optional | URL to receive callback notifications on account verification changes.


<aside class="notice">
All documents/images provided should not exceed 10MB per file.
</aside>



### Verify User Account

This API forcefully verify the user with corresponding API KEY. This API can only be called from sandbox.

```shell
curl "https://sandbox.xfers.io/api/v3/user/verify" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  --request PATCH
```

> Response:

```json
{
  "message": "success"
}
```

#### HTTPS Request

`PATCH https://sandbox.xfers.io/api/v3/user/verify`



### Get Account Activities

The activities API supports querying of a user's activity. If you are a merchant and querying a connected user's account, only transactions with your merchant account will be shown. I.e. user's transactions with other merchants will not be displayed.


```shell
curl -X GET \
  'https://sandbox.xfers.io/api/v3/user/activities?limit=5&start_date=2018-07-04T11%3A49%3A58%2B08%3A00&offset=5' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'  
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\User::activities();
print_r($resp);
```

```python
import xfers
from xfers import xfuser
from xfers import error
xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
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

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
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


> Response:

```json
{
    "activities": [
      {
            "id": "252933",
            "amount": 10,
            "fee": 0,
            "created_at": "2018-07-22T16:28:46+08:00",
            "status": "completed",
            "type": "Deposit",
            "metadata": {
                "description": "Xfers - United Overseas Bank"
            },
            "wallet_name": "General Wallet"
        },
        {
            "id": "63785",
            "amount": -10,
            "fee": 0,
            "created_at": "2018-07-21T16:28:46+08:00",
            "status": "paid",
            "type": "Withdrawal",
            "metadata": {
                "description": "Development Bank of Singapore 029290083"
            },
            "wallet_name": "General Wallet"
        },
        {
            "id": "0a114b08c9244a0xo28ec63b0a905265",
            "amount": -66.08,
            "fee": 0,
            "created_at": "2018-07-20T16:28:46+08:00",
            "status": "completed",
            "type": "Charge",
            "metadata": {
                "origin_name": "Chris Tan",
                "destination_name": "ABC Airlines",
                "description": "Booking ABC Airlines Code XXYYZZ"
            },
            "wallet_name": "General Wallet"
        },
        {
            "id": "2a718acab6454cdcaf362d51739b9271",
            "amount": -30,
            "fee": 0,
            "created_at": "2018-07-18T10:11:40+08:00",
            "status": "completed",
            "type": "Payout",
            "metadata": {
                "origin_name": "Chris Tan",
                "destination_name": "JanetIsMe",
                "description": "XFERS.COM"
            },
            "wallet_name": "General Wallet"
        },
        {
            "id": "56949bb8c9f84b60a31afe8fa6e13939",
            "amount": 12.91,
            "fee": 0,
            "created_at": "2018-07-17T16:28:46+08:00",
            "status": "credit_completed",
            "type": "Credit Card",
            "metadata": {
                "origin_name": "sidhbansal",
                "destination_name": "Chris Tan",
                "description": "Keep Calm and Pay"
            },
            "wallet_name": "General Wallet"
        }
    ],
    "activities_returned": 5,
    "limit": 5,
    "offset": 5,
    "start_date": "2018-07-04T11:49:58+08:00",
    "end_date": "2018-08-15T23:59:59+08:00"
}

```

This endpoint returns information related to your account activites such as the types and statuses of transactions that the user has.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user/activities`

#### Query Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
limit | integer | optional | Max number of results to return per page | 50 (default)
start_date | DateTime, iso8601 format.URL encode this. | optional | Earliest date to query | 2018-07-04T11%3A49%3A58%2B08%3A00 (Defaults to 1 month ago)
end_date | DateTime, iso8601 format. URL encode this. | optional | Latest date to query | 2018-07-04T11%3A49%3A58%2B08%3A00 (Defaults to today)
offset | integer | optional | Offset results for pagination purposes. | 0 (default)
types | String | optional | Only show transactions of that type. Only "Credit Card", "Charge", "Payout", "Deposit", "Withdrawal" allowed. You can add additional types by separating with a comma. | Payout,Deposit (If this param is left blank, it will show all transaction types)
status | String | optional | Only show transactions of that status. Only "completed", "refunded", "expired", "cancelled", "pending", "accepted", "on_hold" allowed. You can add additional types by separating with a comma. Note that putting "completed" will also return transactions with "paid" - you can take them to be the same. | completed,expired (If this param is left blank, it will show all transaction statuses)

To do pagination:

1. Decide on number of entries per page (e.g. 100 for this example). Set the limit as this
2. First page: Offset 0. The latest 100 entries, 1-100, will be returned.
3. Second page: Offset 100. The next 100 entries, 101-200, will be returned.
4. Third page: Offset 200. The next 100 entries, 201-300, will be returned.

Hence your offset should always be a multiple of limit.

#### Response
Attribute | Description 
--------- | -----------
id | ID of the Charge/Payout/Withdrawal/Payout. You can use this ID to query [Charges](/#retrieve-a-charge) and [Payouts](/#retrieve-a-payout).   
type | 5 types: Credit Card, Charge, Payout, Withdrawal, Deposit 
amount | If money going out of account, negative. If coming in, positive. Note that only a completed Charge will actually deduct money. For example, if a Charge is expired/accepted/pending/unclaimed, no money will actually flow in/out of the wallet, even though there is a amount displayed. 
fee | Fee charged by Xfers for the transaction, if any. Will be 0 if no fees
metadata | Shows additional information about a transaction
activities_returned | Number of activities returned. If activities returned is less than the limit, this is the final page.

**Metadata for Deposits:**

Xfers - *Xfers Bank name you topped up to*

`"description": "Xfers - United Overseas Bank"`

**Metadata for Withdrawals:**

*Your Bank name* *Your account number*

`"description": "Development Bank of Singapore 029290083"`

**Metadata for Payouts/Charges/Credit Card:**

`"origin_name": <name of merchant or customer>`,

`"destination_name": <name of merchant or customer>`,

`"description": "Booking ABC Airlines Code XXYYZZ"`


### Get Transfer Info

```shell
curl "https://sandbox.xfers.io/api/v3/user/transfer_info?disable_va=false" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk"
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk');
\Xfers\Xfers::setSGSandbox();
$resp = \Xfers\User::transferInfo();
print_r($resp);
```

```python
import xfers
from xfers import xfuser
from xfers import error

xfers.api_key = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
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

Xfers.set_api_key '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk'
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
String apiKey = "2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk";
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
  "bank_abbrev" : "MBB",
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
    "bank_name_full": "Bank Mandiri",
    "bank_abbrev": "MANDIRI",
    "bank_account_no": "8855845678901242",
    "bank_code": "",
    "branch_code": "",
    "branch_area": "",
    "unique_id": "81128125",
    "img_src": "https://www.xfers.io/images/bankLogos/bank-logo-mandiri.png",
    "transfer_info_array": [
      {
        "bank_name_full": "Bank Central Asia",
        "bank_abbrev": "BCA",
        "bank_account_no": "06420856789021",
        "bank_code": "",
        "branch_code": "",
        "branch_area": "",
        "unique_id": "81128125",
        "img_src": "https://www.xfers.io/images/bankLogos/bank-logo-bca.png"
      },
      {
        "bank_name_full": "Bank Mandiri",
        "bank_abbrev": "MANDIRI",
        "bank_account_no": "8855845678901242",
        "bank_code": "",
        "branch_code": "",
        "branch_area": "",
        "unique_id": "81128125",
        "img_src": "https://www.xfers.io/images/bankLogos/bank-logo-mandiri.png"
      }
    ]
  }  
]
```


This will return transfer in info specific to the user. This information is used for topping up the user's Xfers account.

On your User Interface, instruct the user to make a bank transfer to the bank name and bank account number specified. **For our non-VA account, the user must also include his mobile phone number in the "Initials" and "Comments for Recipient" field when doing a bank transfer** so Xfers can identify which user this bank transfer belongs to.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user/transfer_info?disable_va=false`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
disable_va | boolean | optional | Set it into true to get the account for normal bank for Xfers | true


### Register Updates Callback 

```shell
curl "https://sandbox.xfers.io/api/v3/user/balance_callback" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk" \
  -H "Content-Type: application/json" \
  -d '{"callback_url": "www.example.com/update", "name": "hello-world", "events":"[\"deposit\"]"}'
```

> Response:

```json
{
  "callback_id":"1",
  "callback_url":"www.example.com/update",
  "name":"hello-world",
  "events":["deposit"],
  "created_at":"2017-07-12T03:36:28Z"
}
```

This will allow you to register for a callback which will be triggered whenever the event you registered for occurs.

There can only be one registration at any point. Any existing ones will be overwritten.

#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/user/balance_callback`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
callback_url | string | required | URL to receive callback notifications on account changes | https://www.example.com/updates
events | array | required | Array of events to subscribe to. This should be a valid JSON array. Refer to the section below on the types of events available| ["deposit"]
name | string | optional | A name that you can attach to this request. It can be useful for storing additional information. You will be provided with this field in your callback notification | xyz-123

#### Types of Events
Name | Description
---- | -------------
deposit | Triggered when a user makes a deposit to his Xfers Account via a bank transfer.


#### Callback Notification Format

This is a server to server HTTPS/HTTP POST and **you will need to acknowledge the callback by responding with a HTTP 200 status**.

If your callback_url given is `https://www.example.com/updates`, Xfers will send:
`POST https://www.example.com/updates`

The following parameters will be part of the HTTPS/HTTP POST:


> Callback Format:

```json
{
  "notification_id": "5",
  "callback_id":"1",
  "name":"hello-world",
  "event_type":"deposit",
  "created_at":"2017-08-08T03:36:28Z",
  "user_contact":"83994956",
  "data": {
    "ledger_balance": 436750.00,
    "available_balance": 336750.00,
    "credit": 335000.00,
    "debit": 0.00,
    "details": "BCA Transfer"    
  }
}
```

Name | Type | Description | Value
---- | ---- | -------- | -----------
notification_id | string | A unique ID for this particular event| 5
callback_id | string | The ID of your callback registration| 1
name | string | The string you previously provided in the register request | hello-world
event_type | string | The type of event| deposit
created_at | string | When this event was triggered. In ISO8601 datetime format| 2017-08-08T03:36:28Z
user_contact | string | Contact number of the user| 83994956
data | dictionary | Additional information about the event| Look at the below table

#### Additional information about the event

Key | Description| Value Type | Value 
---- | ---------|------------|-------
ledger_balance | Ledger balance of the user at this point in time | float| 436750.00
available_balance | Available balance of the user at this point in time | float| 336750.00
credit | How much was credited in this event | float| 335000.00
debit | How much was debited in this event | float| 0.00
details | Additional details. For deposit, it would be the bank the user did a transfer from | String| BCA Transfer

### Cancel Updates Callback 

```shell
curl -X DELETE "https://sandbox.xfers.io/api/v3/user/balance_callback" \
  -H "X-XFERS-USER-API-KEY: 2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk"
```

> Response:

```json
{
  "callback_id":"1",
  "callback_url":"www.example.com/update",
  "name":"hello-world",
  "events":["deposit"],
  "created_at":"2017-07-12T03:36:28Z",
  "deleted": true
}
```

Deletes the existing callback subscription

#### HTTPS Request

`DELETE https://sandbox.xfers.io/api/v3/user/balance_callback`





