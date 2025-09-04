
export default function Button({ className = "", children, ...props }) {
  return (
    <button
      {...props}
      className={`px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition shadow-lg hover:shadow-2xl active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
