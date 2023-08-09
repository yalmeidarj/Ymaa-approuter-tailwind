

const CallUscard = () => {
    return (
        <div className="flex justify-around flex-wrap bg-black text-white p-4">
            <div className="m-4 border max-w-xs p-5 bg-gray-dark flex flex-col items-center">
                <div className="text-xl mb-4">
                    PARCERIA Á LONGO PRAZO
                </div>
                <button className="bg-gray-dark text-xs p-2 rounded-md mb-4">
                    Contratos de manutenção para empresas, indústrias e condomínios
                </button>
                <button className="border border-white rounded-md px-10 py-2">
                    Saiba Mais
                </button>
            </div>
            <div className="m-4 border max-w-xs p-5 bg-gray-dark flex flex-col items-center">
                <div className="text-xl mb-4">
                    Atendimento <span className="text-secondary ml-1">24 horas</span>
                </div>
                <button className="bg-gray-dark text-xs p-2 rounded-md mb-4">
                    EM TODO O ESTADO DO RIO DE JANEIRO
                </button>
                <button className="border border-white rounded-md px-10 py-2">
                    Saiba Mais
                </button>
            </div>
        </div>
    );
}

export default CallUscard;
