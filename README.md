# Shop Premium Leather Goods

A simple React application built to showcase a product catalog with category selection and dynamic filtering.

## How It Works

1. **Category Selection:** The landing screen displays cards for **Shoes**, **Bags**, and **Belts**.
2. **Dynamic Filtering:** Selecting a category loads the matching product list along with filters specific to that item type (e.g., Material for Shoes, Style for Bags, Buckle Finish for Belts).
3. **Instant Updates:** Updating any filter immediately updates the displayed products.
4. **Navigation:** Clicking "Shop Premium Leather Goods" in the header or the "Back" button resets the view back to the main category selection.

## Tech Stack

- **React** (Vite)
- **Tailwind CSS**

## Project Structure

```text
src/
├── data/
│   └── products.js       # Product data & categories
├── components/
│   ├── Header.jsx        # Navigation header & back button
│   ├── CategoryCards.jsx # Landing category grid
│   ├── FilterSidebar.jsx # Dynamic filter dropdowns
│   └── ProductList.jsx   # Filtered product grid
└── App.jsx               # Main state container & filter logic
```

# Screenshots of React App

## Landing page with 3 Categories
<img width="1236" height="733" alt="Screenshot 2026-10-23 at 1 27 04 AM" src="https://github.com/user-attachments/assets/ac98e02a-a53e-46d2-b14c-d59ef37dbf3d" />

## Product List page based on the Selected Category
<img width="1245" height="744" alt="Screenshot 2026-10-23 at 1 27 15 AM" src="https://github.com/user-attachments/assets/116b1130-5ca8-4d9b-926d-2d69ee95c2c3" />

## Filtered list of products based on the selected filters
<img width="1124" height="650" alt="Screenshot 2026-10-23 at 1 27 48 AM" src="https://github.com/user-attachments/assets/e4795ad8-af23-4b40-9fe5-91eee1b9f270" />

## Product list page if product not found based on the selected filters
<img width="1107" height="638" alt="Screenshot 2026-10-23 at 1 34 42 AM" src="https://github.com/user-attachments/assets/b2fb5057-fb96-43ef-8780-3d9346e69a1f" />


