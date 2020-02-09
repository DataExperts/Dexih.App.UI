### Remote Agent

A remote agent connects the Information Hub to your data and performs data processing and scheduling.  The agent should be run in a location that has access to the required data.  The remote agent can be run on Windows, OSX, and Linux systems (a full list of supported systems is [here](https://github.com/dotnet/core/blob/master/release-notes/2.0/2.0-supported-os.md)).

### Contents

* **Installation**
* **Configuration**
* **Tips**

### Installation

#### Quick Install

##### Windows

Download the windows remote agent launcher [here]({{SERVER}}/api/Remote/Install/windows) into an empty directory.
Open a command, prompt and navigate to the download directory, and run:
```
dexih.remote.run.exe -w {{SERVER}}
```

##### OSX (Mac)

Open a terminal, create and navigate to an empty directory, and enter the following commands:
```
bash <(curl -s {{SERVER}}/api/Remote/Install/osx)
```

##### Linux (Ubuntu)

Open a terminal, create and navigate to an empty directory, and enter the following commands:
```
bash <(curl -s {{SERVER}}/api/Remote/Install/linux)
```

##### Linux (Alpine)

Open a terminal, create and navigate to an empty directory, and enter the following commands:
```
bash <(curl -s {{SERVER}}/api/Remote/Install/alpine)
```

#### Configure from Browser

To specify configuration options and automatically create a login token for the remote agent, use the Download window as follows:
* Selecting: Configure &rarr; Active Agents &rarr; Download Agent, or
* [Download Agent Direct Link](route:/hubs/index/agents/download)

After completing the download form, and select either:
* **Download Agent** - This will contain a zip file with the launcher, and settings included.  After downloading the package run either `dexih.remote.run.exe`(Windows), `dexih.remote.run.osx.sh`(Osx) or `dexih.remote.run.linux.sh`(Linux)
* **Download Settings** - This will contain the settings only in a file called 'appsettings.json'.  This file can be copied over the same file in an existing application to use the new settings.

### Configuration

To connect a remote agent to a hub:
* Ensure the remote agent is running on the machine, and shows the message **Authenticated** in the output log.
* Log into the Information Hub through your browser and open the required hub.
* Navigate to the remote agent configuration by selecting: Configure &rarr; Hub Agents &rarr, or [direct link](route:/hub/{{HUBKEY}}/summary/agents)
* Select the remote(s) from the list, and click the **Authorize** button.  The agent should now be connected to the hub.

### Tips

If the remote agent is failing to show in available agents, check the following:
* Remote agent is running, and shows "Authenticated" on the console log.
* Refresh the browser, and check again.