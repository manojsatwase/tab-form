## Machine Coding Round

The second round began with a few more questions about prototypes and the event loop, but quickly transitioned into a practical coding challenge. I was tasked with designing a form-based UI using React.js in **CodeSandbox**.

### Problem Statement

The form needed to have three tabs:
1. **Profile**
2. **Interest**
3. **Settings**

Each tab had specific field requirements:
- **Age Field:** Only numeric values allowed.
- **Email Field:** Validation to ensure the correct format.

The form had to incorporate various input types, including:
- Dropdowns
- Radio buttons
- Checkboxes

Additional requirements:
- **Validation for mandatory fields**
- **Data persistence across tabs**
- **A Submit button** to submit the entire form at the last tab

### Design Discussion

Once I implemented the initial version, we discussed the form’s scalability and maintainability. The interviewer suggested creating a **form configuration object** that would dynamically generate the form. This led to a broader discussion on the following topics:

#### Scalability:
- How easily we could extend or modify the form by updating the configuration object, without rewriting significant parts of the code.

#### Maintainability:
- Keeping the code modular, readable, and easy for future developers to understand and extend.

### Key Takeaways

This round highlighted the importance of:
- Designing **scalable systems** that can adapt to changes without major overhauls.
- Maintaining a **clean and organized codebase**, ensuring that the application remains easy to understand and extend in the future.

---
