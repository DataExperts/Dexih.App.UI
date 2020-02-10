### Hub

A **hub** is a container within the integration hub which is used to build and store your data processing rules and related metadata.

#### Creating a new hub

* Create a new hub by selecting: Configure &rarr; Hubs &rarr; New, or
* [New Hub Direct Link](route:/hubs/index/hubs-view/hub-new)

#### Hub Options

* **Hub Name** - A short name to identify the hub.
* **Description** - A longer description that can be formatted using [markdown](https://guides.github.com/features/mastering-markdown/).
* **Encryption Key** - An encryption key, used to encrypt secure data processed through the hub.
* **Shared Data Access** - Specifies who is allowed to access items marked as shared.  The options are:
    * Public - Anyone who can access the integration hub can access shared data.
    * Registered User - Anyone who has registered and email verified, can access shared data.
    * PublishReader User - Only users who have been give the `PublishReader` role or higher can access shared data.

> **Encryption Keys**
> * Keep encryption keys private!
> * Data marked as sensitive will be encrypted using the hubs encryption key.  
> * If encrypted data needs to be encrypted/decrypted across multiple hubs the encryption keys must be identical.
> * Passwords contained in connections, are not encrypted using this key.  They are encrypted using the encryption key on the remote agent.  This ensures that only the owner of the server running the remote agent has the ability to decrypt database passwords (i.e. Data Experts administrators cannot access database passwords).

> **Shared Access**
> * Sharing data only allows users to download datasets.  They will not have access to view/edit/modify any other areas of the hub.

### Next Steps

To get started using a new hub, you must complete:
1. [Configure your remote agent](intro/remote_agent.md)
2. [Create a managed connection](intro/connections_managed.md)
3. [Create a source connection](intro/connections_source.md)

