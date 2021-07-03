## Design Decision

# Components

- Component to add company
- Component to add Employee
- Component to show all the company
- Component to show company detail
- Component to show company in detail
- Component to show each employee

# packages

- redux for state management
- thunk for asynchronous
- logger for all the state logs
- firebase as backend
- formik, yup for validation
- react-router-dom for routing
- styled component for styling

# Data Structure

- redux stores all the data
- companies are stored in a object for constant time operation with key as the name of the
  company
- employees are stored in another object to flatten the data structure and simulate firebase,
  key as company name and value as another object with key being unique id.
