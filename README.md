
  <div class="container">
        <h1>Kryzen</h1>
        <p>Kryzen is a full-stack web application that allows users to manage products and user accounts. It includes functionalities for user authentication, product management, filtering, and sorting.</p>
        <h2>Features</h2>
        <ul>
            <li>User Authentication: Sign up, Sign in, and secure routes with JWT.</li>
            <li>Product Management: CRUD operations for products.</li>
            <li>Filtering and Sorting: Filter products by category and sort by price.</li>
            <li>Sidebar Navigation: Easy navigation with a collapsible sidebar.</li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
            <li>Frontend: React, React Router</li>
            <li>Backend: Node.js, Express</li>
            <li>Database: MySQL, Sequelize</li>
            <li>Authentication: JWT, bcrypt</li>
            <li>HTTP Client: Axios</li>
        </ul>
        <h2>Setup Instructions</h2>
        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js and npm installed.</li>
            <li>MySQL server running.</li>
        </ul>
        <h3>Backend Setup</h3>
        <ol>
            <li>Clone the repository:
                <pre class="code">git clone &lt;repository-url&gt;</pre>
                <pre class="code">cd &lt;repository-folder&gt;</pre>
            </li>
            <li>Install backend dependencies:
                <pre class="code">cd backend</pre>
                <pre class="code">npm install</pre>
            </li>
            <li>Set up environment variables:
                <pre class="code">Create a .env file in the backend directory and add the following:</pre>
                <pre class="code">DATABASE=kryzen</pre>
                <pre class="code">USERNAME=&lt;your-mysql-username&gt;</pre>
                <pre class="code">PASSWORD=&lt;your-mysql-password&gt;</pre>
                <pre class="code">JWT_SECRET=&lt;your-jwt-secret&gt;</pre>
            </li>
            <li>Start the backend server:
                <pre class="code">npm start</pre>
            </li>
        </ol>
        <h3>Frontend Setup</h3>
        <ol>
            <li>Navigate to the frontend directory:
                <pre class="code">cd ../frontend</pre>
            </li>
            <li>Install frontend dependencies:
                <pre class="code">npm install</pre>
            </li>
            <li>Start the frontend server:
                <pre class="code">npm start</pre>
            </li>
        </ol>
        <h2>Usage</h2>
        <ol>
            <li><strong>Sign Up:</strong>
                <p>Navigate to the signup page via the link in the login page. Provide a username, email, and password to create an account.</p>
            </li>
            <li><strong>Sign In:</strong>
                <p>Use the credentials from the sign-up step to log in. On successful login, you will be redirected to the dashboard.</p>
            </li>
            <li><strong>Dashboard:</strong>
                <p>View the list of products. Use the filter and sort options to organize the product list. Add new products using the "ADD NEW" button. Edit or delete existing products.</p>
            </li>
        </ol>
        <h2>API Endpoints</h2>
        <h3>User Routes</h3>
        <ul>
            <li><strong>POST /users/signup:</strong> User signup.</li>
            <li><strong>POST /users/signin:</strong> User signin.</li>
        </ul>
        <h3>Product Routes</h3>
        <ul>
            <li><strong>GET /products:</strong> Get all products (requires auth).</li>
            <li><strong>POST /products:</strong> Add a new product (requires auth).</li>
            <li><strong>PUT /products/:id:</strong> Update a product (requires auth).</li>
            <li><strong>DELETE /products/:id:</strong> Delete a product (requires auth).</li>
            <li><strong>GET /products/category/:category:</strong> Get products by category.</li>
            <li><strong>GET /products/sort/price/:order:</strong> Get products sorted by price.</li>
        </ul>
        <h2>Deployed Application</h2>
        <p>You can access the deployed application at <a href="https://your-deployed-link.com" target="_blank">Kryzen Application</a>.</p>
        <h2>License</h2>
        <p>This project is licensed under the MIT License.</p>
    </div>

