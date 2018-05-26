# OAuth2_Demo
- This POC is intended for learning purposes, no guarantees provided for future functionality.

# Help
# 1. Start spring-authorization-server using the following commands:

-- cd spring-authorization-server
-- ./gradlew bootRun

# 2. Start spring-resource-server using the following commands:
-- cd spring-resource-server
-- ./gradlew bootRun

# 3. Open Client Application on aademo.tk
(Note, if the aademo.tk is down, or accessing the endpoint can not be accomplished because of the hardcoded IP value
in the server and client applications you might need to register your own domain, upload it to a webhost, create your own facebook application and change the IP addresses in the source code.)

# Description

Client Application
-------------------------------
- The client application implements Implicit Grant Flow using JQuery library.
-------------------------------
Directory Structure:
-------------------------------
> -- |-web-client-application


Backend
-------------------------------
- The backend contains both spring Authorization Server bot Spring Resource Server.
-------------------------------
Directory Structure
-------------------------------
> |-backend-servers
> |--spring-authorization-server
> |--spring-resource-server
