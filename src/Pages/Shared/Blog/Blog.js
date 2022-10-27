import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box shadow-lg my-2"
      >
        <div className="collapse-title text-xl font-medium bg-violet-200">
          1.what is cors?
        </div>
        <div className="collapse-content">
          <p>
            Cross-Origin Resource Sharing is referred to as CORS. It enables us
            to loosen the security constraints placed on an API. Bypassing the
            Use-Control-Allow-Origin headers, which define which sources can
            access the API, this is accomplished. To put it another way, CORS is
            a security function built into browsers that limits cross-origin
            HTTP requests with other servers and determines which domains can
            access your resources.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box shadow-lg my-2"
      >
        <div className="collapse-title text-xl font-medium bg-violet-200">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content">
          <p>
            To authenticate users for your project, Firebase Authentication
            offers ready-made UI libraries, simple SDKs, and backend services.
            It allows authentication using a variety of methods, including
            passwords, phone numbers, well-known federated identity providers
            like Google, Facebook, and Twitter, among others. Firebase
            Authentication utilizes industry standards like OAuth 2.0 and OpenID
            Connect and interfaces seamlessly with other Firebase services,
            making it simple to integrate with a custom backend.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box shadow-lg my-2"
      >
        <div className="collapse-title text-xl font-medium bg-violet-200">
          3. How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
            If the user is logged in, the react private route component renders
            child components (children). If the user is not logged in, the
            location state attribute passes the return url, which directs the
            user to the /login page.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box shadow-lg my-2"
      >
        <div className="collapse-title text-xl font-medium bg-violet-200 ">
          4. What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>
            An open-source backend runtime environment for javascript is
            node.js. It serves as a backend service for applications that use
            javascript on the server. So as to Both the front end and the back
            end require javascript. Runs Node.js javascript code on the chrome
            v8 engine, which transforms it into It is extremely scalable, light
            weight, quick, and data-intensive. How Node.js functions: Node.js
            acknowledges the receives a request from the clients and responds
            while working utilizing the request node A single thread in js
            handles them. To operate the requests or I/O operations node. Js
            utilize the idea of threads.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
