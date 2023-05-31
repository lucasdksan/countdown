const schema = {
    title: "N1 - Countdown Collection",
    type: "object",
    properties: {
        active: {
            type: "boolean",
            title: "Exibir conteúdo por coleção?",
            description: "Ativar o countdown por coleção.",
            default: false
        },
        collection: {
            type: "string",
            title: "Id da coleção",
            description: "Colocar o id da coleção que vai receber o countdown.",
            default: ""
        }
    }
}

export default schema;