### Datajob

Datajobs are used to group and sequence the execution of a set of datalinks, and also to add scheduling capabilities.

### General Properties

A datajob has the following properties:
* DataJob Name - A name to represent the job.
* Datalink Fail Action - Indicates the action to take when a datalink abends.  The options are:
    * Continue Execution - Will keep executing other datalinks
    * Continue execution (non dependent datalinks only) - Will keep executing datalink which do not have a dependency on the failed datalink.
    * Abend - Will immediately abend the all datalink within the datajob.
* Audit Connection - Location to store execution results.
* Trigger datajob when new files arrive - This will start the datajob when files arrive into the "Incoming" directories of any datalinks using local flat files as their source.


### Triggers

Triggers allow the datajob to be scheduled at recurring intervals.  One or more triggers can be create with the following properties:

* Start Date - The earliest date the trigger will start.  If empty, the trigger will fire on the current day
* Recurring Interval - The intra-day interval for the trigger to start.  If empty, trigger will fire once per day.
* Maximum Recurrences - The maximum number of times the trigger will fire in one day.  If empty, there is no limit.
* Days of the week - The days of the week that the trigger should fire.
* Start Time - The earliest time of the day the trigger will fire.
* End Time - The latest time of the day the trigger will fire.

When more than one trigger is defined, the datajob will start on the first trigger to fire.

> Datajobs do not require triggers and can be executed manually via the "Run Datajob" option in the "Jobs & Schedules" page.

> To start the triggers, the datajob must be activated via the "Activate Triggers" option in the "Jobs & Schedules" page.
> To shutdown triggers, the datajob must be deactivated via the "Deactivate Triggers" option in the "Jobs & Schedules" page.

> Note: If the remote agent is restarted, the triggers will need to be reactivated.

### Steps

* Each step contains a single datalink and a list of dependent datalinks.
* If a step contains no dependencies the datalink will be executed immediately.
* If the step contains dependencies, the datalink will only fire after the dependent steps have completed.
