export interface ICategory {
  title: string
  id: number
  imageUrl: string
}

export interface ICategoryPreview {
  title: string
  items: Array<IItem>
}


export interface IItem {
  id: number
  imageUrl: string
  name: string
  price: number
}