export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container">
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
          {/* Email Section */}
          <div className="flex flex-col items-center md:items-start">
            <a href="mailto:anjik@gmail.com" className="text-sm text-gray-500">
              Email: anjik1218@gmail.com
            </a>
          </div>

          {/* Copyright Section */}
          <div className="mt-6 md:mt-0">
            <p className="text-sm text-gray-500 text-center md:text-right">
              &copy; Copyleft {new Date().getFullYear()}. no rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
