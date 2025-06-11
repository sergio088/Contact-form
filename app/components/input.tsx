interface inputprops {
  type: string;
}

export default function Input({ type }: inputprops) {
  return (
    <input
      type={type}
      className="border border-gray-400 w-full px-2 py-3 rounded text-gray-400"
    />
  );
}
