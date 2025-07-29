import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About Insta Board</h1>
      <p>
        Insta Board is a simple React app that simulates a user browsing
        experience inspired by social platforms. It fetches data from the Random
        User API to display randomly generated user profiles.
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Browse users and view their full profiles</li>
        <li>Adjust how many users you see</li>
        <li>Like your favorite profiles (saved in localStorage)</li>
        <li>Load more users with one click</li>
      </ul>
      <p className="credit">
        Developed by <strong>Bisan Fararjeh</strong> with ❤️ using React, React
        Router, and Axios
      </p>
    </div>
  );
}
