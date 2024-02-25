# React Blog Project

This project is a simple blog application built using React Router DOM. It mimics the layout and functionality of the blog section of the website guvi.in/blog. Below are some key features of this project:

1. **Navbar Using React Router DOM:**
   - The navbar is created using the `<Router>` method provided by React Router DOM.
   - Each menu item in the navbar is a `<Link>` component that directs the user to different routes.

2. **Path Name Changes with Menu Item Click:**
   - When each menu item is clicked in the navbar, the path name changes accordingly.
   - This allows for smooth navigation between different sections of the blog.

3. **Local Data Using blogData.json:**
   - The blog content is stored locally in a separate file named `blogData.json`.
   - This file contains an array of JSON objects, each representing a blog post with properties like title, author, publication date, etc.

4. **Categorization Using Props and .filter() Method:**
   - Courses are categorized on each component page using props and the `.filter()` method.
   - Based on the selected category, only the relevant blog posts are displayed on the component page.

Click [here](https://shark-react-router-guvi-blog.netlify.app/) to view the deployed code.

