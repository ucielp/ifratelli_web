# SYSTEM PROMPT & REQUIREMENTS: ifratelli accesorios

## 1. Brand Identity & Context
* **Brand Name:** ifratelli accesorios
* **Origin:** Founded 1998 in Rosario, Argentina; currently operating in El Masnou and Mallorca, Spain.
* **Founders:** Sisters Caro (started at 15) and María (started at 8), continuing their mother's craft.
* **Aesthetic:** Mediterranean, organic, warm. Wood displays, linen, cowrie shells, gold fish charms.
* **Palette:** Earth tones (browns, greys, greens) with warm gold metal accents. Classic, timeless, authentic.
* **Products:** Handmade/curated necklaces, bracelets, earrings, eyeglass holders, anklets (€8 – €30).

## 2. Technical Stack Preferences
* **Framework:** Next.js (App Router) recommended, targeted for Vercel deployment.
* **Authentication:** Auth.js / NextAuth (or Clerk/Supabase) for user session management.
* **Styling:** Tailwind CSS (matching the specified earth-tone and organic Mediterranean palette).

## 3. Core Features (Phase 1)
* **E-Commerce Catalog:**
  * Filterable by product type (Bracelets, Necklaces, Earrings, Eyeglass holders, Anklets).
  * Filterable by demographic (Women, Men, Teens, Kids).
* **User Accounts:**
  * Secure authentication login/registration.
  * Saved profiles, addresses, and order history.
* **Cart & Shipping Logic:**
  * Base shipping fee applied at checkout.
  * Conditional free shipping automatically triggered for carts > €60.
  * Primary delivery zones highlighted: Barcelona area and Mallorca.
* **Brand Hub & Events:**
  * "Our Story" section highlighting Caro and María's journey.
  * Event Calendar for upcoming clothing fairs and pop-ups.
  * Integrated Instagram feed to showcase styling.
* **Customer Support Chatbot:**
  * Automated responses for frequent queries: Shipping thresholds, material quality/care, and fair locations.

## 4. Admin Dashboard (Phase 2 - Architecture Setup)
* Secure owner login for inventory management.
* Interface to add/edit products, update pricing, and manage stock levels.

## 5. Critical Development Constraints
* **Date & Time Parsing:** When implementing the event calendar for local fairs, strictly avoid rendering raw ISO strings directly in client components. Implement robust local date parsing logic (e.g., using date-fns or dayjs) to prevent date-shifting or incorrect month column rendering caused by browser timezone discrepancies during Vercel deployments.



## 6 or the Website Footer 

💻 Designed with ❤️ by Joaquín (10) | Built with ⚙️ by Marco (10)
