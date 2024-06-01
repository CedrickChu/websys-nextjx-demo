**NPM INSTALL **--force    - To install dependencies

**NPM RUN DEV  **    - To run the Program


to add admin account, go to prisma/schema.prisma directory
edit the role to "admin", then run ** npx prisma migrate dev**

then run the program, and create an account, it will have admin role.

go back to prisma/schema.prisma directory and change back the role to user,
so that every account registered will have user role instead of admin,
run ** npx prisma migrate dev** again

then run the program.
