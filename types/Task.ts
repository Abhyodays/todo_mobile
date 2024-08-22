export type Task = {
    id:string,
    name:string,
    date: string|null,
    subTasks: subTask[],
    categorty:string,
    isCompleted:boolean
}
type subTask = {
    id:string,
    name: string,
    date:string|null,
    status:string,
    isCompleted:boolean
}