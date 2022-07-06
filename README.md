## Summary
This contains the docker-compose logic to run a simple NodeJS server, integrated with a mysql repostory and a Nginx reverse proxy.

The Nginx server receives requests on the port 8000 and directly maps them to the port 3000 of the NodeJS server.
The NodeJS server connects to the MySQL server and has a simple GET route that adds an entry to the database and returns HTML with stored data.
The MySQL server has a init.sql script that created the table accessed by the NodeJS server.

## Get Started
Start docker containers from the repository root
```
docker-compose up
```

## Directories
- `./`: Repository configuration
- `./db`: Docker volume that stores mysql data
- `./mysql`: Configuration files for the mysql container
- `./node`: Configuration files for the node container
- `./nginx`: Configuration files for the nginx container
