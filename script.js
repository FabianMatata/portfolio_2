/* styles.css */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
    transition: background-color 0.3s ease;
  }
  
  header {
    background-color: #2c3e50;
    color: white;
    padding: 2rem 0;
    text-align: center;
    animation: fadeInDown 1s ease-in-out;
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
    animation: fadeIn 1.2s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  nav a {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  nav a:hover {
    text-decoration: underline;
    color: #3498db;
  }
  
  .section {
    padding: 4rem 1rem;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 1s ease forwards;
    animation-delay: 0.5s;
  }
  
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .project {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .project:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: fadeIn 1s ease forwards;
    animation-delay: 0.5s;
  }
  
  input, textarea {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  input:focus, textarea:focus {
    border-color: #2980b9;
    outline: none;
  }
  
  button {
    background-color: #2980b9;
    color: white;
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #1c5980;
  }
  
  footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 1.5rem 0;
    margin-top: 2rem;
    animation: fadeIn 1s ease-in-out;
  }
  