# Shyam Jewellers POS and Inventory Management System

## Project Overview
The **Shyam Jewellers POS and Inventory Management System** is a comprehensive solution designed to streamline the operations of a jewelry store. This system handles Point-of-Sale transactions, inventory tracking, and customer management with a user-friendly interface and robust backend architecture.

## Features
- **Point of Sale (POS):** Efficiently handle sales transactions with support for discounts and taxes.
- **Inventory Management:** Track stock levels, categorize products, and generate low-stock alerts.
- **Customer Management:** Maintain customer profiles and purchase history.
- **User Authentication:** Secure login and sign-up powered by Clerk.
- **Reports and Analytics:** Generate sales and inventory reports for better decision-making.

## Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Authentication:** Clerk

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayush-sharaf/shyam-jewellers.git
   cd shyam-jewellers
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app in your browser:**
   - Visit `http://localhost:3000`.

## Environment Variables
Ensure to configure the following variables in your `.env` file:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Usage
1. **Admin Login:** Log in using admin credentials to access the dashboard.
2. **Manage Inventory:** Add, update, or delete product entries.
3. **Process Sales:** Use the POS module to handle sales transactions.
4. **View Reports:** Generate sales and inventory reports from the analytics section.



## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

