
### Hub variables allow:
1. Centralized variables in a hub, which simplifies the management of passwords and other details when migrating between hubs.
2. An administrator to set passwords database which can be used by other developers without being directly exposed.
3. Allow environment variables to be used.

### To use hub variables:
1. Select "Hub Variables" from the Hub menu.
2. Add new variables as required by selecting new, and specifying encrypted or environment variable types.
3. Specify the variables in connection and other form parameters using the syntax `{variable name}`.

### Storing sensitive information (such as password):
1. Sensitive information should be stored with "Encrypt Value" set on.
2. Data requiring isolation on the remote agent environment should be done by defining environment variables.
3. Encrypted and environment variables can only be used for passwords and connection strings, and only set by users who have **owner** permission for the hub.


> ### Is encrypted data secure?
> * Sensitive values (such as database passwords) are encrypted two times using a an AES based algorithm, and are never stored in plain text.  The first encryption uses the *Encryption Key* set for the hub, the second encryption uses the *Encryption Key* set for the remote agent.
> * Encrypted values stored in the information hub **can not be accessed by Dexih administrators** without direct access to machine running the remote agent.  (Also noting, the remote agent **never** sends the encryption key to the information hub).
> * To keep sensitive data isolated to the remote agent (i.e. data is not stored), use environment variables on the remote agent, and specify these as hub variables.

