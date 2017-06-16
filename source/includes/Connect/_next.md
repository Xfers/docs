## What's Next

Now that you have gotten a `user_api_token` linked to your customer, you can

- Pass this `user_api_token` as params when [creating a charge](/#creating-a-charge) to bypass authentication for your customer
- Pass this `user_api_token` as params when adding and charging credit cards cards
- Pass this `user_api_token` as params when [creating a payout](/#creating-a-payout) in place of the recipient field
- Use the header `"X-XFERS-USER-API-KEY": "the user_api_token"` (instead of `"X-XFERS-USER-API-KEY": "your own token"`) to modify [user details] (/#user-account) and [bank accounts](/#bank-account) on behalf of your user