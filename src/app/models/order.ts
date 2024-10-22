import { Item } from "./item";

export interface Order {
    id: string,
    quantity: number,
    createdDate: Date,
    items: Array<Item>,
}
