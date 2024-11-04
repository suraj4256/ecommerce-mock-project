Project Setup
1. Prerequisites
   1. Node.js(version 14 or higher)
   2. npm for managing packages
   3. JSON Server (for mock API data)
      
2. Installation Steps
   1. Clone Repository:
      git clone <repository-url>
      cd <project-folder>
   2. Install Dependencies: Run the following command in the main project folder to install required dependencies.
      npm install
   3. Set Up JSON Srver : In a separate terminal window, run the JSON server for mock API data (json-server is a devDependency).
      npx json-server --watch db.json --port 5000
   4. Start the Development Server:
      npm start
      
3. Mock Data Source :
   db.json

4. Usage :
   1. Homepage : Click on a product for detailed information and buying options
   2. Product Details - Click on a Buy Now to proceed for checkout.
   3. Checkout - Enter customer information and choose a payment option.
   4. Mock Payment - Enter mock card details to proceed, leading to success/failure feedback (success or failure is randomly generated).
  
5. Note : Since this is a mock setup, payment processing is simulated without real transactions. Use dummy data for testing
     



