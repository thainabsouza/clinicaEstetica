export default function Footer() {
  return (
    <footer className="bg-[#d7c2bd] text-[#a06b3f] mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5 p-4">
        {/* Procedimentos */}
        <div>
          <h3 className="font-bold text-lg mb-1">Procedimentos</h3>
          <ul className="space-y-1">
            <li>Estetica Corporal</li>
            <li>Estetica Facial</li>
            <li>Emagrecimento</li>
            <li>Home Care</li>
          </ul>
        </div>

        {/* Institucional */}
        <div>
          <h3 className="font-bold text-lg mb-1">Institucional</h3>
          <ul className="space-y-1">
            <li>Sobre nós</li>
            <li>Nossa clínica</li>
            <li>Contato</li>
            <li>Localização</li>
          </ul>
        </div>

        {/* Horário */}
        <div>
          <h3 className="font-bold text-lg mb-1">Horário de Funcionamento</h3>
          <ul className="space-y-1">
            <li>Segunda - Sexta: 10h às 20h</li>
            <li>Sábado: 09h às 14h</li>
            <li>Domingo: Fechado</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
