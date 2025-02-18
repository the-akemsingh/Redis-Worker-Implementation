Task Adding server adds the tasks (here only dummy data) to the redis queue. 
Worker pop the tasks from redis queue and processe it.

This architecture can be used in an online coding practice platform , where user's source code will be queued and workers will process it. So that main backend server, don't get chocked.
