interface inputprops {
  type: string;
}

export default function Inputmessage({ type }: inputprops) {
  return (
    <textarea
      className="border placeholder-gray-400 resize-none w-full rounded border-gray-400 text-gray-400 h-48 px-3"
      placeholder="Digite sua mensagem aqui..."
    ></textarea>
  );
}
