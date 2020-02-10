### Securing Data

This section provides information on securing data within a table and datalink.  Details of securing the integration hub cna be found [here](/reference/security).

> The library for the encryption and hashing is open source and available for review on [github](https://github.com/DataExperts/Dexih.Utils.Crypto).

#### Encrypting a Table Column

* Encryption is performed using the ([Advanced Encryption Standard](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)), with a block size of 128 bits, and a key length of 256 bits.   The encryption uses 5 iterations for the "Fast Encryption" method, and 1000 iterations for the "Strong Encryption" method.
* Both the fast and secure encryption methods are very strong.  The strong encryption method is 200x slower than the fast encryption method, which is designed to hinder any potential brut-force attacks on secured data.

> Important: The key used for encryption is a combination of the encryption key associated with the hub, and the encryption key associated with the Remote Agent (contained in the appsettings.json file).  If either of these keys are changed, encrypted data will be lost.

#### Hashing 

* Hashing is performed using the SHA256 encryption algorithm, with 64,000 iterations, and salted.  This provides ample protection for passwords and other secure fields.

> Note: Hashing is one-way, and there is no means to retrieve a hashed value.  The only purpose of the hashed value is to verify it matches a string (such as a password).

#### Securing a Table Column

A table column can be secured by editing the table column, and adjusting the "Security Flag".  The flag has the following options:

* Not Secured - Field is not changed
* Fast Encrypt (encrypted when read) - The data is not encrypted in the table, and will be "fast encrypted" as soon as it is read.
* Fast Decrypt (decrypted when written) - The data is already encrypted in the table via "fast encrypt", and will be decrypted when written to another table.
* Fast Encrypted Field - The data is encrypted using "fast encrypt"
* Strong Encrypt (encrypted when read) - The data is not encrypted in the table, and will be "strong encrypted" as soon as it is read.
* Strong Decrypt (decrypted when written) - The data is already encrypted in the table via "strong encrypt", and will be decrypted when written to another table.
* Strong Encrypted Field - The data is encrypted using "strong encrypt"
* Hashed when read - The data will be hashed when read.
* Hashed Field - The data is in a hashed field.  When this is a tracked column using change data capture, the datalink will automatically verify the field against the non-hashed incoming value.

#### Manually Encrypting Data 

There are several standard functions which can be used to perform encryption and hashing when mapping data using the [mapping transform](/intro/transforms_mapping.md)).

These functions are, under the standard function category "Security".

* The Fast Encrypt, Strong Encrypt use the internal encryption key (as used by the table column security) to encrypt.
* The Manual Encrypt/Decrypt allows a custom key, and number of iterations to be entered.

#### Demonstration

<iframe width="560" height="400" src="https://www.youtube.com/embed/Iqp7YO9g8hA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### See Also




