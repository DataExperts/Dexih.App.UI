### Information Hub Security

Data security is a complex and important topic.  Every organization should have a data security strategy that works within there needs.  The scope of this section is not to cover data security as a complete topic, but rather to highlight the various security features within the Information Hub platform, and how to implement them.

#### Basic Security Principals

* Encrypt transmissions - All transmissions, whether on local networks, or through the internet should be transmitted securely through SSL connections.
* Keep data local - When data is accecced, it should only go through the shorted path possible.  For example if a user is on a local network, and previews data contained on the local network, the data should never leave the local network during transmission.
* No Data breaches when one component is compromised - Whilst any breach of a system should be avoided, the information hub follows the principal that if one component is breached, there should be no breach of 'data'.   This is accomplished by separating encryption keys from encrypted data, and separating systems that have access to data from systems and contain login information.

#### Definitions

To explain how data is stored and transmitted within the information hub the following terms are used:

* Metadata - The data describing the data.  This includes table/column information, connection information, datalinks, datajob etc contained within a Hub.
* Data - Refers to the data stored within database tables, flatfile, web services etc.
* Encrypted - Means data is secured with a key that can be used to decrypt it.
* Hashed - Means the data is secured and cannot be decrypted.  Hashed data can only be used to confirm a value (such as a password).
* Salted - A salt, is extra piece of random data added to hashes and encryptions primarily to defend against dictionary attacks. 


#### Information Hub Architecture

The following section covers that main components of the information hub, and the type of data processed and stored.

##### Information Hub (Web Server)

This is the main website application.  Information stored here is limited to:

* Logs containing diagnostic information, user logins, and other auditing information.
* Configuration settings containing various keys, and login detail for the information hub repository.
* Metadata contained within the information hub repository, will often be cached in memory on the web server to improve performance.

> No 'data' is stored or transmitted through the information hub web server.

#### Information Hub Repository

The main database repository used to store application information to run the website.  This database is secured with both password, and firewall protections.

Information stored here includes:
* User login information, including passwords which are hashed & salted.
* Hub Metadata - Information about table structures, datalinks, datajobs, etc.
* Connection strings/password - These are encrypted/salted in the repository.  The decryption key to use these is stored on the remote agent running the datalinks.

> Important: The repository is designed so even system administrators can not have access any non-encrypted data including passwords, connection strings and (encrypted) hub variables.

> All user passwords are all hashed/salted.  Emails and other user information are not encrypted in the database.

> The repository does not contain any 'data'.  The only circumstance 'data' would be stored in the repository is if a user included it as part a rule (such as a filter customer="coca cola").  See Hub Variables to avoid this scenario.

#### Remote Agent 

Remote Agents are installed locally by users to connect to databases and perform the data operations.  Remote Agents connect to the hub via login tokens which do not have any access to the hub other than to receive commands.

Remote Agents contain the following information (stored within the appsettings.json file):
* Encryption Key - used to encrypt/decrypt connection passwords.  This key is also used in conjunction with the hub encryption key to encrypt/decrypt secured data columns.
* Logs containing diagnostic information.  If run in debug mode, logs may contain data as a result of error messages.
* Private SSL encryption key, used for data previews, downloads, and data sharing.

> The remote agent does not store any metadata associated with running datalinks and connecting to databases, although this data will be cached in memory as various points.

#### Information Hub Proxy

The Information Hub Proxy is an optional component used to send/receive data from the remote agent to allow for data preview, download and sharing.

The Hub Proxy 
* does receive and send sensitive data, which is encrypted via a trusted SSL key.
* does not store or contain any data, metadata or configuration data.



* Transmission of Data
* Isolation of Data
* Protection of Passwords
* Encryption / Decryption of Stored Data
* Hashing of Stored Data



