## Bank Account

The follow APIs allow you to add or update your bank account info and fetch a list of available banks.

### Available Banks

```shell
curl "https://sandbox.xfers.io/api/v3/banks" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc"
```

```php

```

```python
```

```ruby
```

```java
String apiKey = "G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo";

System.out.println("Listing all available xfers Banks");

List<BankAccount> bankAccounts = BankAccount.availableBanks(apiKey);
for (BankAccount bankAccount : bankAccounts) {
    System.out.println(bankAccount.toString());
}

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

`GET https://sandbox.xfers.io/api/v3/banks`


### Add a Bank Account

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -d '{"account_no": "0393123432", "bank":"DBS", "account_holder_name": "Tian Wei"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\BankAccount::add(array(
        'account_no' => '0393123432',
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
        'account_no': '0393123432',
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
      'account_no'=> '0393123432',
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
String apiKey = "G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo";
Xfers.setSGSandbox();

try {
    Map<String, Object> params = new HashMap<String, Object>();
    System.out.println("Adding Bank Account");
    params.put("account_no", "0393123432");
    params.put("bank", "DBS");
    List<BankAccount> bankAccounts = BankAccount.add(params,apiKey);
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
       "account_no" : "039-312-3432",
       "bank_abbrev" : "DBS",
       "usage": "all",
       "account_holder_name": "Tian Wei"       
    },
    {
       "id" : "12315",
       "account_no" : "129-880-1251",
       "bank_abbrev" : "OCBC",
       "usage": "all",
       "account_holder_name": "Tian Wei"       
    }
]
```

This request will add a new bank account to this Xfers account. You will be able to withdraw your Xfers available balances to these account(s).


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/user/bank_account`

#### Response

List of all bank accounts belonging to user.

For Xfers Indonesia API, an additional attribute `detected_name` will be returned. This is the actual name of the bank account holder gotten directly from the bank.


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
account_no | string | required | bank account no | 0393123432
bank | string | required | bank abbreviation (Refer to [available banks](?shell/#available-banks) | DBS
usage | string | optional | Is this bank account to be used as a funding source or for withdrawals? | Either "funding_source" or "withdrawal" or "all". Defaults to "all"
account_holder_name | string | optional | Name of bank account holder | Tian Wei


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
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    System.out.println("Retrieving Bank Account");
    List<BankAccount> bankAccounts = BankAccount.retrieve(apiKey);
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
       "account_no" : "039-312-3432",
       "bank_abbrev" : "DBS",
       "usage": "all",
       "account_holder_name": "Tian Wei"              
    },
    {
       "id" : "12315",
       "account_no" : "129-880-1251",
       "bank_abbrev" : "OCBC",
       "usage": "all",
       "account_holder_name": "Tian Wei"                 
    }
]
```

This will list all bank accounts belonging to the user.

#### HTTPS Request

`GET https://sandbox.xfers.io/api/v3/user/bank_account`


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
usage | string | optional | type of bank account | Either "funding_source” or “withdrawal” or “all”. Defaults to “all”


### Update a Bank Account

```shell
curl "https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>" \
  -H "X-XFERS-USER-API-KEY: FVNbKjcGZ5Xx-Uf2XnxsrGtoxmLm9YEgokzDRoyshFc" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"account_no": "0393123432", "bank":"DBS"}'
```

```php
<?php
require_once('vendor/autoload.php');

\Xfers\Xfers::setApiKey('G-zsfAEScrqdU8GhWTEdjfdnb3XRdU8q1fH-nuWfSzo');
\Xfers\Xfers::setSGSandbox();
try {
    $resp = \Xfers\BankAccount::update('<bank_account_id>', array(
        'account_no' => '0393123432',
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
        'account_no': '0393123432',
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
      'account_no'=> '0393123432',
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
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();

try {
    Map<String, Object> params = new HashMap<String, Object>();
    System.out.println("Updating Bank Account");
    params.put("account_no", "0393123432");
    params.put("bank", "DBS");

    List<BankAccount> bankAccounts = BankAccount.update("<bank_account_id>", params, apiKey);
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
       "account_no" : "039-312-3432",
       "bank_abbrev" : "DBS",
       "usage": "all",
       "account_holder_name": "Tian Wei"              
    },
    {
       "id" : "12315",
       "account_no" : "129-880-1251",
       "bank_abbrev" : "OCBC",
       "usage": "all",
       "account_holder_name": "Tian Wei"              
    }
]
```

This request allows you to update an existing bank account record.

#### HTTPS Request

`PUT https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>`

#### Response

List of all bank accounts belonging to user.


#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
account_no | string | optional | bank account no | 0393123432
bank | string | optional | bank abbreviation (Refer to [available banks](?shell/#available-banks)) | DBS
usage | string | optional | Is this bank account to be used as a funding source or for withdrawals? | Either "funding_source" or "withdrawal" or "all".
account_holder_name | string | optional | Name of bank account holder | Tian Wei



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
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Deleting Bank Account");
    List<BankAccount> bankAccounts = BankAccount.delete("<bank_account_id>",apiKey);
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
       "account_no" : "039-312-3432",
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
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    Map<String, Object> params = new HashMap<String, Object>();
    System.out.println("Making a withdrawal request");
    params.put("amount", "50.0");
    params.put("express", false);

    Withdrawal withdrawal = BankAccount.withdraw("<bank_account_id>", params, apiKey);
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
       "account_no" : "039-312-3432",
       "bank_abbrev" : "DBS",
       "amount" : "50.0",
       "fees" : "0.0",
       "express" : "false",
       "status" : "pending",
       "arrival" : "31 March 2016"
    }
}
```

This will make a withdrawal request to the bank account given, provided that your account has sufficient available balance.

For same day withdrawal(additional fees applies), set 'express' field to true. Funds will arrive at recipient bank within 24 hrs.

Standard withdrawal takes 2-3 business day to arrive at recipient bank.


#### HTTPS Request

`POST https://sandbox.xfers.io/api/v3/user/bank_account/<bank_account_id>/withdraw`

#### URL Parameters

Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
amount | string | required | Amount to withdraw | 50.0
express | string | optional | Default to 'false' | true


#### Withdrawing on behalf

If you wish to withdraw to a bank account not belonging to you, add in two additional params. 
(1) The user's `user_api_token` 
(2) A unique `payout_invoice_id` in the params. 

Behind the scenes, Xfers does a payout of funds from your Xfers account to that user's Xfers account, followed by a withdrawal. This is required for compliance purposes as we cannot directly withdraw funds to a bank account not belonging to you.


Name | Type | Required | Description | Value
---- | ---- | -------- | ----------- | -----
user_api_token | string | required | Use this param if you want to withdraw to another user's bank account instead of your own. | efgowZwKoMoPL_dxV7zpuoakM7STLb14uQrtX4J2F4o
payout_invoice_id | string | required | Unique ref no provided by merchant. This will need to be unique. | AZ0001

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
String apiKey = "pXcfdAKNorDe_o1eou1NSp4mwssiEzem_6sg8fwnZWs";
Xfers.setSGSandbox();
try {
    System.out.println("Listing all withdrawal request");
    List<Withdrawal> withdrawalRequests = BankAccount.withdrawalRequests("pending", apiKey);
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
       "account_no" : "039-312-3432",
       "bank_abbrev" : "DBS",
       "amount" : "50.0",
       "fees" : "0.0",
       "express" : "false",
       "status" : "pending",
       "arrival" : "31 March 2016"
    },
    {
       "id" : "99",
       "account_no" : "129-880-1251",
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
