interface text {
  children: React.ReactNode;
}

export default function Textin({ children }: text) {
  return <p className="text-xs text-gray-400 font-bold">{children}*</p>;
}
