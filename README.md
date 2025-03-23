# Netflix Homepage Clone

### 📌 Project Overview

This project is a React-based recreation of the Netflix homepage using Tailwind CSS for styling. The goal of this assignment is to replicate the visual structure and layout of Netflix's interface.


## Installation & Setup
### 1. Clone the repository:
```sh
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```
### 2. Install dependencies:
```sh
npm install
```
### 3. Start the development server:
```sh
npm run dev  # For Next.js
```

### Dependencies
- **React.js / Next.js**
- **Tailwind CSS**


---

## Challenges Faced

### 1. **Component Errors and Naming Conflicts**
   - **Problem**: I accidentally created a naming conflict by importing a `MovieCard` component and also defining a component with the same name within the same file.
   - **Solution**: I resolved this issue by organizing my components properly, ensuring each file and component had unique and descriptive names.

---

### 2. **Dynamic Background Image**
   - **Problem**: I struggled to place the background image behind all elements (navigation and text).
   - **Solution**: I used the `style` attribute with `backgroundImage`, combined with CSS classes like `bg-cover` and `bg-center`. TailwindCSS helped simplify the process, but I ensured the image was properly located in the `public` directory for consistent rendering.

---

### 3. **Aligning Text**
   - **Problem**: I needed to align text dynamically.
   - **Solution**: I applied alignment-specific CSS classes such as `text-left` (in TailwindCSS).

---

### 4. **Navigation Bar Styling**
   - **Problem**: Making the navigation bar semi-transparent without affecting its functionality was tricky.
   - **Solution**: I used `bg-black bg-opacity-50` for a clean and responsive look, ensuring all items were visible and positioned correctly.

---

### 5. **Integrating Props**
   - **Problem**: Initially, I hardcoded data into the `MovieCard` component, reducing its reusability.
   - **Solution**: I made the `MovieCard` dynamic by passing props (`title` and `image`) to render unique cards for different movies or shows.

---

## Lessons Learned

1. **Component Architecture Matters**: Proper naming and organization make debugging easier and improve scalability.
2. **CSS Frameworks Simplify Work**: TailwindCSS provided prebuilt utility classes that streamlined styling processes.
3. **Dynamic Data Usage**: Passing props to components makes the application modular and reusable.
4. **Problem-Solving with Research**: Searching for best practices online and experimenting with solutions helped me overcome hurdles effectively.

---
### References
- Chatgpt
- Github copilot

### Future Improvements i could work on
- Add a carousel for categories
- Implement an API for dynamic movie fetching
- Improve animations and hover effects

## Conclusion
This project taught me valuable lessons about component-based architecture, responsive design, and leveraging CSS frameworks. While the path was full of challenges, each obstacle deepened my understanding of React and modern web development techniques.

---
