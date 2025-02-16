# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Machine Coding Round
The second round began with a few more questions about prototypes and the event loop, but quickly transitioned into a practical coding challenge. I was tasked with designing a form-based UI using React.js in CodeSandbox.

The problem statement included three tabs: Profile, Interest, and Settings, each with specific field requirements such as:

Age Field: Only numeric values allowed.
Email Field: Validation to ensure the correct format.
I had to incorporate various input types, including dropdowns, radio buttons, and checkboxes. The form also needed:

Validation for mandatory fields.
Data persistence across tabs.
A Submit button to submit the entire form at the last tab.
Design Discussion

Once I implemented the initial version, we discussed the form’s scalability and maintainability. The interviewer suggested creating a form configuration object that would dynamically generate the form. This led to a broader discussion on:

Scalability: How easily we could extend or modify the form by updating the configuration object without rewriting significant parts of the code.
Maintainability: Keeping the code modular, readable, and easy for future developers to understand and extend.
This round highlighted the importance of designing scalable systems while maintaining a clean and organized codebase.

