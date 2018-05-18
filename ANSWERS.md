<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware adds functionality to a program, and it's usually in the middle, and it's often use with express. The methods such as get, post, update, all use a middleware as part of its functionality. Sessions are used on websites to store state, which is useful to keep track of what has changed based on user activity. The session is uniqe to each user. Bcrypt is used to protect the password (by hashing), so that it will be very difficult to retrieve the orginal password. JWT is token based authentication that has a token lifespan. The token can't be revoked immediately after logout, but they do expire, and a login will create a new token (which will also have a limited lifespan). JWT is used to grant access for a limited time, so in a way it's more secure. If the token were stolen by some advanced method, it will not last very long.

2.  What does bcrypt do in order to prevent attacks?
Bcrypt add a salt to the hash, which can be added based on the specified cost value. If the cost value of the salt is higher, the password will be much more secure, and it's usually recommended with a value of 11 or 12.
3.  What are the three parts of the JSON Web Token?
The Header, Payload, and the Signature.