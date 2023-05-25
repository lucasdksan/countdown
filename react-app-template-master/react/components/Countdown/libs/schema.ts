const schema = {
    title: "N1 - Countdown Shelf",
    type: "object",
    properties: {
        useCollection: {
            type: "boolean",
            title: "Usar Coleção",
            description: "Habilite o cowntdown nos produtos contidos nas coleções.",
            default: false
        },
        collection: {
            type: "string",
            title: "Id da Coleção",
            description: "Coleção que servirá de referência para ativar a contagem regressiva de produtos.",
            default: null
        }
    }
}

export default schema;