export function formatDate(d:string|Date){
    if(!d) return null
    const date = new Date(d);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); 
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`
}

export function isDateEqual(d1:string, d2:string){
    return formatDate(d1) === formatDate(d2);
}