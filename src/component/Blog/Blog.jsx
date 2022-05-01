import React from "react";

const Blog = () => {
  return (
    <div className="container text-center">
      <div>
        <h1>What is the purpose of jwt and how does it work?</h1>
        <p>
          Ans: JSON web token, known as jwt.This token is used to increase
          security measures. It share data between database and client
          maintaining security in cryptographic way so the the claim cannot be
          altered once the jwt token is issued. A jwt is a string made by three
          parts.Each part contain diferent data .For example , who issued the
          token,how long the token will be valid,and what permission the client
          has been granted. the format look like this : xxxxxx.yyyyyyy.zzzzzzz
          once decoded it reveal two JSON string .First one is the header and
          the payload ,and the second one is the signature.
        </p>
      </div>

      <div>
        <h1>Differences between sql and nosql databases?</h1>
        <p>
          Ans:Mainly there are two  type of database with many deferences between them.
          And they are :
          <br />
          1.SQL databases are relational, NoSQL databases are non-relational.
          <br />
          2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
          <br />
          3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
          <br />
          4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
          <br />
          5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
        </p>
      </div>

      <div>
        <h1>Difference between javascript and nodejs</h1>
        <p>
          Ans :the defence between js node js are described below:
          1.Js is a simple programming language which run web application whereas node js is an interpreter and environment for java 
          script with some specific  useful library.
          <br />
          2.Js is mainly used for performing any client side activity for web application .On the other hand node js is used for accessing
          or performing any non blocking operation of operating system.
          <br />
          3.Both need engine to run .For example js need spider monkey(for fire fox),java script core (safari) and v8(for google) engine to run on 
          website .And node js only run in v8 engine mainly using by google.     
        </p>
      </div>
    </div>
  );
};

export default Blog;
