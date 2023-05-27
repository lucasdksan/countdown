const schema = {
    title: "N1 - Banner Countdown",
    type: "object",
    properties: {
        active: {
            type: "boolean",
            title: "Exibir conteúdo?",
            description: "Ativar ou desativar o timer.",
            default: false
        },
        duration: {
            type: "string",
            title: "Duração do timer",
            description: "Formato: 00:00:00:00 (Dias:Horas:Minutos:Segundos).",
            default: "01:00:00:00"
        },
        title: {
            type: "string",
            title: "Título",
            description: "Título do Banner.",
            default: ""
        },
        link: {
            type: "string",
            title: "Link da promoção",
            description: "Link para redirecionamento (/exemplo).",
            default: ""
        },
        finalDate: {
            title: "Data final",
            description: "Formato: 27/11/2020 00:00 (Dia-Mes-Ano Horas:Minutos).",
            type: "string",
            default: null,
        },
        initialDate: {
            title: "Data inicial",
            description: "Utilize o formato: 23/11/2020 08:00 (Dia-Mes-Ano Horas:Minutos).",
            type: "string",
            default: null,
        },
        name: {
            title: "Nome de identificação",
            description: "Para fazer a identifação.",
            type: "string",
            default: null,
        }
    }
}

export default schema;