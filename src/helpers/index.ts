export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
    }).format(amount)
}

export function formatDate(dateString: string) : string {
    const dateObjet = new Date(dateString)
    const options : Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return new Intl.DateTimeFormat("es-ES", options).format(dateObjet)
}