export default function Footer() {
  return (
    <footer className="bg-gray-primary dark:bg-black-primary text-black-primary dark:text-white-primary text-center py-4">
      <p>
        &copy; {new Date().getFullYear()} Gaige McMichael. All rights reserved.
      </p>
    </footer>
  );
}