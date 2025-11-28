<h1>💆‍♀️ DermaWell – Skin Analyzer & Skincare Recommendation App</h1>

<p>
DermaWell is a full-stack skincare analysis and shopping platform.  
Users can take a <b>Skin Analyzer Quiz</b> to detect their skin type and instantly 
view personalized products.  
The platform includes <b>authentication, product pages, supplement pages, cart system, checkout (QR Payment)</b> and full backend APIs.
</p>

<hr>

<h2>📁 Project Structure Overview</h2>

<pre>
DERMAWELL-PROJECT/
│── backend/                          # Spring Boot API
│   ├── src/
│   │     ├── controller/
│   │     │      ├── AuthController.java
│   │     │      ├── ProductController.java
│   │     │      └── QuizController.java
│   │     ├── model/
│   │     │      ├── User.java
│   │     │      ├── Product.java
│   │     │      └── QuizResult.java
│   │     ├── repository/
│   │     ├── service/
│   │     └── BackendApplication.java
│   ├── resources/
│   │     └── application.properties
│   ├── pom.xml
│
│── frontend/                         # React + Vite + CSS Modules
│   ├── public/
│   │     └── images/ (All product & supplement images)
│   ├── src/
│   │     ├── api/
│   │     │     └── api.js
│   │     ├── components/
│   │     │     └── Navbar.jsx
│   │     ├── context/
│   │     │     └── CartContext.jsx
│   │     ├── data/
│   │     │     └── supplements.js
│   │     ├── pages/
│   │     │     ├── Home.jsx
│   │     │     ├── Quiz.jsx
│   │     │     ├── Products.jsx
│   │     │     ├── ProductDetails.jsx
│   │     │     ├── Supplements.jsx
│   │     │     ├── Cart.jsx
│   │     │     ├── Checkout.jsx
│   │     │     ├── Learn.jsx
│   │     │     ├── Contact.jsx
│   │     │     ├── Login.jsx
│   │     │     └── Signup.jsx
│   │     ├── App.jsx
│   │     ├── main.jsx
│   │     └── index.css
│   ├── package.json
│   ├── vite.config.js
│
└── README.md
</pre>

<hr>

<h2>🚀 Tech Stack</h2>

<h3>Frontend</h3>
<ul>
<li>React + Vite</li>
<li>CSS Modules + Animations</li>
<li>Axios</li>
<li>React Router</li>
<li>Custom Cart Context API</li>
</ul>

<h3>Backend</h3>
<ul>
<li>Spring Boot (Java)</li>
<li>Spring Web + JPA + Hibernate</li>
<li>PostgreSQL Driver</li>
<li>CORS enabled API</li>
</ul>

<h3>Database</h3>
<ul>
<li>PostgreSQL</li>
<li>Products table</li>
<li>Users table</li>
<li>Quiz Result logic</li>
</ul>

<hr>

<h2>🔧 Environment Variables</h2>

<h3>Backend (application.properties)</h3>
<pre>
spring.datasource.url=jdbc:postgresql://localhost:5432/dermawell
spring.datasource.username=postgres
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
</pre>

<h3>Frontend (.env)</h3>
<pre>
VITE_API_URL=http://localhost:8080
</pre>

<hr>

<h2>🛠️ Backend Setup</h2>

<ol>
<li><b>Install Java + Maven</b></li>
<li><b>Run backend</b></li>

<pre>
cd backend
mvn clean
mvn spring-boot:run
</pre>

<li><b>API will run on:</b></li>
<pre>http://localhost:8080</pre>
</ol>

<hr>

<h2>🖥️ Frontend Setup</h2>

<ol>
<li><b>Install dependencies</b></li>
<pre>
cd frontend
npm install
</pre>

<li><b>Start dev server</b></li>
<pre>npm run dev</pre>

<li><b>Open app at</b></li>
<pre>http://localhost:5173</pre>
</ol>

<hr>

<h2>📡 API Routes Overview</h2>

<h3>🔐 Authentication</h3>
<pre>
POST /auth/signup
POST /auth/login
</pre>

<h3>🧪 Skin Quiz</h3>
<pre>
POST /quiz/result        → Returns skinType ("dry", "oily", "normal")
</pre>

<h3>🛍 Products</h3>
<pre>
GET /products                      → All products
GET /products/skin/{skinType}     → Products by skin type
GET /products/{id}                → Product details
</pre>

<hr>

<h2>🛒 Cart & Checkout</h2>

<p>
Cart is fully handled on frontend using <b>React Context</b>.  
Checkout uses QR code payment (static: <b>7892840229</b>).
</p>

<hr>

<h2>🌟 Key Frontend Features</h2>
<ul>
<li>Beautiful animated UI using CSS Modules</li>
<li>Skin Analyzer Quiz → Recommends correct product category</li>
<li>Dedicated Supplements page</li>
<li>Product Details page with Buy Now & Add to Cart</li>
<li>Cart + Qty update + Remove item + Clear cart</li>
<li>QR Code Checkout</li>
<li>Login + Signup forms</li>
<li>Responsive UI</li>
</ul>

<hr>

<h2>🧬 Database Schema (PostgreSQL)</h2>

<h3>Products Table</h3>
<pre>
id SERIAL PRIMARY KEY
name VARCHAR
description TEXT
skin_type VARCHAR
price INT
image_url VARCHAR
</pre>

<h3>Users Table</h3>
<pre>
id SERIAL PRIMARY KEY
name VARCHAR
email VARCHAR UNIQUE
password VARCHAR
</pre>

<hr>

<h2>📷 Screenshots</h2>

<p>Below are the screenshots (add your own images here):</p>

<h3>🏠 Home Page</h3>
<img src="SCREENSHOT URL HERE" />

<h3>🧪 Quiz Page</h3>
<img src="SCREENSHOT URL HERE" />

<h3>🛍 Products Page</h3>
<img src="SCREENSHOT URL HERE" />

<h3>💊 Supplements Page</h3>
<img src="SCREENSHOT URL HERE" />

<h3>🛒 Cart & Checkout</h3>
<img src="SCREENSHOT URL HERE" />

<hr>

<h2>👤 Author</h2>

<p>
<b>Abhishek Khanai</b><br>
Full Stack Developer<br>
GitHub: <a href="https://github.com/Abhishekkhanai07">Abhishekkhanai07</a>
</p>
